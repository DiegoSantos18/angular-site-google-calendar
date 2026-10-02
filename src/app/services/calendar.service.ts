import { inject, Service } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, timer, switchMap } from 'rxjs';
import { CalendarEvent, CreateCalendarEvent } from '../models/calendar.model';
import { environment } from '../../environments/environment';

@Service()
export class CalendarService {
  private http = inject(HttpClient);

  getEvents(skip: number = 0, take: number = 50): Observable<CalendarEvent[]> {
    const action = 'get-events';
    const methodCall = this.http.get<CalendarEvent[]>(
      `${environment.apiUrl}/calendar?action=${action}&skip=${skip}&take=${take}`
    );

    const poolingTime = environment.apiPooling;
    if (poolingTime && poolingTime > 0) {
      return timer(0, poolingTime).pipe(switchMap(() => methodCall));
    }

    return methodCall;
  }

  addEvent(eventData: CreateCalendarEvent): Observable<CalendarEvent> {
    return this.http.post<CalendarEvent>(`${environment.apiUrl}/calendar?action=add-event`, eventData);
  }

  deleteEvent(eventId: string): Observable<any> {
    return this.http.delete(`${environment.apiUrl}/calendar?action=delete-event&id=${eventId}`);
  }
}
