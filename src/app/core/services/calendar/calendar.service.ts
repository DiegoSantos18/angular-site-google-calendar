import { inject, Service } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, timer, switchMap, throwError, filter, take, shareReplay } from 'rxjs';
import { environment } from '../../../../environments/environment';
import {
  CalendarActionResponse,
  CalendarEvent,
  CalendarEventCreated,
  CreateCalendarEvent
} from '../../models/calendar-event/calendar-event.model';
import { CalendarStateService } from '../calendar-state/calendar-state.service';
import { Calendar, CreateCalendar } from '../../models/calendar/calendar.model';

@Service()
export class CalendarService {
  private readonly http = inject(HttpClient);
  private readonly calendarState = inject(CalendarStateService);
  private readonly calendarReady$ = this.calendarState.calendarsReady$.pipe(
    take(1),
    shareReplay({ bufferSize: 1, refCount: true })
  );

  private getHeaders(calendarId: string): HttpHeaders {
    return new HttpHeaders().set('x-google-calendar-id', calendarId);
  }

  getCalendars(): Observable<Calendar[]> {
    return this.http.get<Calendar[]>(`${environment.apiUrl}/calendar?action=get-calendars`);
  }

  createCalendar(calendar: CreateCalendar): Observable<Calendar> {
    return this.http.post<Calendar>(
      `${environment.apiUrl}/calendar?action=create-calendar`,
      calendar
    );
  }

  deleteCalendar(calendarId: string | null | undefined): Observable<CalendarActionResponse> {
    if (!calendarId || calendarId === 'primary') {
      return throwError(() => new Error('Selecione um calendário não principal para excluir.'));
    }

    return this.http.delete<CalendarActionResponse>(
      `${environment.apiUrl}/calendar?action=delete-calendar`,
      { headers: this.getHeaders(calendarId) }
    );
  }

  getEvents(skip: number = 0, take: number = 50): Observable<CalendarEvent[]> {
    return this.withCalendarId(calendarId => this.requestEvents(calendarId, skip, take));
  }

  watchEvents(skip: number = 0, take: number = 50): Observable<CalendarEvent[]> {
    return this.withCalendarId(calendarId => {
      const pollingTime = environment.apiPooling;
      const request = () => this.requestEvents(calendarId, skip, take);

      return pollingTime && pollingTime > 0
        ? timer(0, pollingTime).pipe(switchMap(request))
        : request();
    });
  }

  addEvent(eventData: CreateCalendarEvent): Observable<CalendarEventCreated> {
    return this.withCalendarId(calendarId =>
      this.http.post<CalendarEventCreated>(
        `${environment.apiUrl}/calendar?action=add-event`,
        eventData,
        { headers: this.getHeaders(calendarId) }
      )
    );
  }

  deleteEvent(eventId: string | null | undefined): Observable<CalendarActionResponse> {
    if (!eventId) {
      return throwError(() => new Error('Parâmetro "id" é obrigatório.'));
    }

    return this.withCalendarId(calendarId =>
      this.http.delete<CalendarActionResponse>(
        `${environment.apiUrl}/calendar?action=delete-event&id=${encodeURIComponent(eventId)}`,
        { headers: this.getHeaders(calendarId) }
      )
    );
  }

  private withCalendarId<T>(request: (calendarId: string) => Observable<T>): Observable<T> {
    return this.calendarReady$.pipe(
      switchMap(() => {
        const calendarId = this.calendarState.selectedCalendarId();
        return calendarId
          ? request(calendarId)
          : throwError(() => new Error('Nenhum calendário disponível para esta operação.'));
      })
    );
  }

  private requestEvents(calendarId: string, skip: number, take: number): Observable<CalendarEvent[]> {
    return this.http.get<CalendarEvent[]>(
      `${environment.apiUrl}/calendar?action=get-events&skip=${skip}&take=${take}`,
      { headers: this.getHeaders(calendarId) }
    );
  }
}
