import * as fs from 'fs';
import * as path from 'path';
import { SeedBase } from '../seed-base';

interface CalendarSeedItem {
  summary: string;
  description?: string;
  dayOffset: number;
  startTime: string;
  endTime: string;
  location?: string;
}

export class CalendarSeeder extends SeedBase<CalendarSeedItem> {

  protected getSeederName(): string {
    return 'Calendar Seeder';
  }

  protected getEndpointPath(): string {
    return '/calendar?action=add-event';
  }

  protected getSeedData(): CalendarSeedItem[] {
    const filePath = path.join(__dirname, 'events-seed.json');
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(fileContent);
  }

  protected transformItem(item: CalendarSeedItem): any {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const eventDate = new Date(today);
    eventDate.setDate(eventDate.getDate() + item.dayOffset);

    const [startHour, startMinute] = item.startTime.split(':').map(Number);
    const [endHour, endMinute] = item.endTime.split(':').map(Number);

    const newStart = new Date(eventDate);
    newStart.setHours(startHour, startMinute, 0, 0);

    const newEnd = new Date(eventDate);
    newEnd.setHours(endHour, endMinute, 0, 0);

    const formattedDate = newStart.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });

    console.log(`📌 Preparando: "${item.summary}" para ${formattedDate} às ${item.startTime}`);

    return {
      summary: item.summary,
      description: item.description,
      startDateTime: newStart.toISOString(),
      endDateTime: newEnd.toISOString(),
      location: item.location,
    };
  }
}
