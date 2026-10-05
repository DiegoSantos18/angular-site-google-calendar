import { computed, Service, signal } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { Calendar } from '../../models/calendar/calendar.model';

@Service()
export class CalendarStateService {
  private readonly STORAGE_KEY = 'selected_calendar_id';
  private readonly calendarsReadySubject = new ReplaySubject<void>(1);

  readonly calendars = signal<Calendar[]>([]);
  readonly initialized = signal(false);
  readonly calendarsReady$ = this.calendarsReadySubject.asObservable();
  readonly selectedCalendarId = signal<string | null>(
    this.readStoredCalendarId()
  );
  readonly selectedCalendar = computed(() =>
    this.calendars().find(calendar => calendar.id === this.selectedCalendarId()) ?? null
  );

  setCalendars(calendars: Calendar[] | null | undefined): void {
    const availableCalendars = (calendars ?? []).filter(
      calendar => Boolean(calendar.id) && calendar.id !== 'primary' && !calendar.primary
    );
    this.calendars.set(availableCalendars);

    const currentId = this.selectedCalendarId();
    const selectedId = availableCalendars.some(calendar => calendar.id === currentId)
      ? currentId
      : availableCalendars[0]?.id ?? null;

    if (selectedId) {
      this.setCalendarId(selectedId);
    } else {
      this.selectedCalendarId.set(null);
      localStorage.removeItem(this.STORAGE_KEY);
    }

    this.initialized.set(true);
    this.calendarsReadySubject.next();
    this.calendarsReadySubject.complete();
  }

  setCalendarId(calendarId: string | null | undefined): void {
    if (!calendarId || calendarId === 'primary') {
      console.error('Parâmetro "calendar id" é obrigatório.');
      return;
    }

    if (
      this.initialized() &&
      !this.calendars().some(calendar => calendar.id === calendarId)
    ) {
      console.error('O calendário selecionado não está disponível.');
      return;
    }

    this.selectedCalendarId.set(calendarId);
    localStorage.setItem(this.STORAGE_KEY, calendarId);
  }

  private readStoredCalendarId(): string | null {
    const storedId = localStorage.getItem(this.STORAGE_KEY);
    return storedId && storedId !== 'primary' ? storedId : null;
  }
}
