import * as fs from 'node:fs';
import * as path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createInterface } from 'node:readline/promises';
import {
  getSeedCalendarMarker,
  SEED_CALENDAR_MARKER_PREFIX,
  SEED_EVENT_MARKER,
  SeedBase,
  SeedCalendar,
  SeedEvent
} from '../seed-base';

interface CalendarSeedDefinition {
  key: string;
  summary: string;
  description: string;
  timeZone: string;
  backgroundColor: string;
}

interface CalendarSeedItem {
  calendarKey: string;
  summary: string;
  description?: string;
  colorId: string;
  dayOffset: number;
  startTime: string;
  endTime: string;
  location?: string;
}

interface CalendarSeedPayload {
  summary: string;
  description?: string;
  colorId: string;
  startDateTime: string;
  endDateTime: string;
  location?: string;
  extendedProperties: {
    private: Record<typeof SEED_EVENT_MARKER.key, typeof SEED_EVENT_MARKER.value>;
  };
}

export class CalendarSeeder extends SeedBase {
  async execute(): Promise<void> {
    const definitions = this.readFile<CalendarSeedDefinition[]>('calendars-seed.json');
    const events = this.readFile<CalendarSeedItem[]>('events-seed.json');
    this.validateSeedData(definitions, events);

    console.log('\n🌱 Criando ou localizando calendários de demonstração...');
    const calendars = await this.resolveCalendars(definitions);
    const existingEventsByCalendar = new Map<string, Map<string, SeedEvent>>();
    for (const calendar of calendars.values()) {
      const existingEvents = await this.request<SeedEvent[]>('get-events', {
        calendarId: calendar.id,
        query: { skip: '0', take: '2500' }
      });
      existingEventsByCalendar.set(
        calendar.id,
        new Map(existingEvents
          .filter(event =>
            event.extendedProperties?.private?.[SEED_EVENT_MARKER.key] === SEED_EVENT_MARKER.value
          )
          .filter((event): event is SeedEvent & { summary: string } => Boolean(event.summary))
          .map(event => [event.summary, event]))
      );
    }
    let created = 0;
    let skipped = 0;
    let updated = 0;
    let failed = 0;

    for (const [index, item] of events.entries()) {
      const calendar = calendars.get(item.calendarKey);
      if (!calendar) {
        failed++;
        console.error(`❌ [${index + 1}/${events.length}] Agenda "${item.calendarKey}" não encontrada para "${item.summary}".`);
        continue;
      }

      try {
        const seededSummaries = existingEventsByCalendar.get(calendar.id);
        const existingEvent = seededSummaries?.get(item.summary);
        if (existingEvent) {
          if (existingEvent.id && existingEvent.colorId !== item.colorId) {
            await this.request('update-seed-event', {
              method: 'PATCH',
              calendarId: calendar.id,
              query: { id: existingEvent.id },
              body: { colorId: item.colorId }
            });
            existingEvent.colorId = item.colorId;
            updated++;
            console.log(`🎨 Cor atualizada em "${calendar.summary}": "${item.summary}".`);
          } else {
            skipped++;
            console.log(`↪️ Já existe em "${calendar.summary}": "${item.summary}".`);
          }
          continue;
        }

        const payload = this.transformItem(item);
        await this.request('add-event', {
          method: 'POST',
          calendarId: calendar.id,
          body: payload
        });
        seededSummaries?.set(item.summary, {
          summary: item.summary,
          colorId: item.colorId
        });
        created++;
        console.log(`✅ Criado em "${calendar.summary}": "${item.summary}".`);
      } catch (error) {
        failed++;
        console.error(`❌ Falha ao criar "${item.summary}" em "${calendar.summary}":`, error);
      }
    }

    console.log(`\n📊 Seeds: ${created} criados | ${updated} cores atualizadas | ${skipped} inalterados | ${failed} falhas.`);
    if (failed > 0) {
      throw new Error(`${failed} eventos seed não puderam ser criados.`);
    }
  }

  async delete(): Promise<void> {
    const allCalendars = await this.request<SeedCalendar[]>('get-calendars');
    const seedCalendars = allCalendars.filter(calendar =>
      calendar.description?.includes(SEED_CALENDAR_MARKER_PREFIX)
    );

    if (seedCalendars.length === 0) {
      console.log('Nenhum calendário de demonstração identificado foi encontrado.');
      return;
    }

    if (!await this.confirmSeedDeletion(seedCalendars)) {
      console.log('Exclusão cancelada; nenhum evento foi removido.');
      return;
    }

    let removed = 0;
    let failed = 0;
    for (const calendar of seedCalendars) {
      try {
        const events = await this.request<SeedEvent[]>('get-events', {
          calendarId: calendar.id,
          query: { skip: '0', take: '2500' }
        });
        const seedEvents = events.filter(event =>
          event.extendedProperties?.private?.[SEED_EVENT_MARKER.key] === SEED_EVENT_MARKER.value
        );

        for (const event of seedEvents) {
          if (!event.id) {
            failed++;
            console.error(`Evento seed sem ID em "${calendar.summary}"; não foi excluído.`);
            continue;
          }

          try {
            await this.request('delete-event', {
              method: 'DELETE',
              calendarId: calendar.id,
              query: { id: event.id }
            });
            removed++;
            console.log(`✅ Excluído de "${calendar.summary}": "${event.summary || event.id}".`);
          } catch (error) {
            failed++;
            console.error(`❌ Falha ao excluir "${event.summary || event.id}":`, error);
          }
        }

        try {
          await this.request('delete-calendar', {
            method: 'DELETE',
            calendarId: calendar.id
          });
          console.log(`🗑️️ Calendário "${calendar.summary}" excluído com sucesso.`);
        } catch (error) {
          failed++;
          console.error(`❌ Falha ao excluir o calendário "${calendar.summary}":`, error);
        }
      } catch (error) {
        failed++;
        console.error(`❌ Não foi possível listar os eventos de "${calendar.summary}":`, error);
      }
    }

    console.log(`\n📊 Reversão: ${removed} eventos seed removidos | ${failed} falhas.`);
    console.log('Os calendários de demonstração foram mantidos; somente eventos com marcador seed são removidos.');
    if (failed > 0) {
      throw new Error(`${failed} eventos seed não puderam ser excluídos.`);
    }
  }

  private async resolveCalendars(
    definitions: CalendarSeedDefinition[]
  ): Promise<Map<string, SeedCalendar>> {
    const available = await this.request<SeedCalendar[]>('get-calendars');
    const resolved = new Map<string, SeedCalendar>();

    for (const definition of definitions) {
      const marker = getSeedCalendarMarker(definition.key);
      const matches = available.filter(calendar => calendar.description?.includes(marker));
      if (matches.length > 1) {
        throw new Error(
          `Há mais de um calendário marcado para "${definition.key}". Resolva as duplicatas manualmente antes de executar o seed.`
        );
      }

      const calendar = matches[0] ?? await this.request<SeedCalendar>('add-calendar', {
        method: 'POST',
        body: {
          ...definition,
          description: `${definition.description}\n${marker}`
        }
      });
      resolved.set(definition.key, calendar);
      console.log(`${matches.length ? '↪️ Reutilizado' : '✅ Criado'} calendário "${calendar.summary}" (${calendar.id}).`);
    }

    return resolved;
  }

  private async confirmSeedDeletion(calendars: SeedCalendar[]): Promise<boolean> {
    const confirmationValue = process.env.CONFIRM_SEED_DELETE;

    console.warn('A reversão removerá somente eventos e calendários seed marcados nos calendários:');
    for (const calendar of calendars) {
      console.warn(`- ${calendar.summary || calendar.id}: ${calendar.id}`);
    }

    if (confirmationValue !== undefined) {
      return confirmationValue === 'true' || confirmationValue === 'y';
    }

    if (!process.stdin.isTTY || !process.stdout.isTTY) {
      throw new Error(
        'A exclusão exige confirmação interativa. Para automação, defina CONFIRM_SEED_DELETE=true.'
      );
    }

    const terminal = createInterface({ input: process.stdin, output: process.stdout });
    try {
      const answer = await terminal.question(
        'Tem certeza de que deseja excluir os eventos seed dos calendários acima? (y/N): '
      );
      const normalized = answer.trim().toLowerCase();
      return normalized === 'y' || normalized === 'yes' || normalized === 's' || normalized === 'sim';
    } finally {
      terminal.close();
    }
  }

  private readFile<T>(fileName: string): T {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const filePath = path.join(__dirname, fileName);
    return JSON.parse(fs.readFileSync(filePath, 'utf-8')) as T;
  }

  private validateSeedData(
    calendars: CalendarSeedDefinition[],
    events: CalendarSeedItem[]
  ): void {
    const keys = new Set<string>();
    for (const calendar of calendars) {
      if (!calendar.key || keys.has(calendar.key)) {
        throw new Error(`Chave de calendário ausente ou duplicada: "${calendar.key}".`);
      }
      if (!calendar.summary || !calendar.description || !calendar.timeZone) {
        throw new Error(`Configuração incompleta para o calendário "${calendar.key}".`);
      }
      if (!/^#[\da-f]{6}$/i.test(calendar.backgroundColor)) {
        throw new Error(`Cor inválida para o calendário "${calendar.key}".`);
      }
      keys.add(calendar.key);
    }

    if (calendars.length !== 2) {
      throw new Error(`O seed de demonstração exige exatamente dois calendários; foram configurados ${calendars.length}.`);
    }
    for (const event of events) {
      if (!keys.has(event.calendarKey)) {
        throw new Error(`Evento "${event.summary}" referencia calendário desconhecido "${event.calendarKey}".`);
      }
      if (
        !event.summary?.trim() ||
        !/^[1-9]$|^10$|^11$/.test(event.colorId) ||
        !Number.isInteger(event.dayOffset) ||
        event.dayOffset < 0 ||
        !/^([01]\d|2[0-3]):[0-5]\d$/.test(event.startTime) ||
        !/^([01]\d|2[0-3]):[0-5]\d$/.test(event.endTime)
      ) {
        throw new Error(`Dados inválidos para o evento "${event.summary}".`);
      }
    }
  }

  private transformItem(item: CalendarSeedItem): CalendarSeedPayload {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const eventDate = new Date(today);
    eventDate.setDate(eventDate.getDate() + item.dayOffset);

    const [startHour, startMinute] = item.startTime.split(':').map(Number);
    const [endHour, endMinute] = item.endTime.split(':').map(Number);

    const start = new Date(eventDate);
    start.setHours(startHour, startMinute, 0, 0);

    const end = new Date(eventDate);
    end.setHours(endHour, endMinute, 0, 0);

    return {
      summary: item.summary,
      description: item.description,
      colorId: item.colorId,
      startDateTime: start.toISOString(),
      endDateTime: end.toISOString(),
      location: item.location,
      extendedProperties: {
        private: {
          [SEED_EVENT_MARKER.key]: SEED_EVENT_MARKER.value
        }
      }
    };
  }
}
