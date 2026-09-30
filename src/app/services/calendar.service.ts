import { inject, Service } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, timer, switchMap } from 'rxjs';
import { CalendarEvent, CreateCalendarEvent } from '../models/calendar.model';
import { environment } from '../../environments/environment';

@Service()
export class CalendarService {
  private http = inject(HttpClient);

  getEvents(): Observable<CalendarEvent[]> {
    const poolingTime = environment.apiPooling ?? undefined;
    if (poolingTime) {
      // Dispara AGORA (0 ms) e depois repete a cada x minutos (x ms) - Simula um SignalR
      return timer(0, poolingTime).pipe(
        switchMap(() => this.http.get<CalendarEvent[]>(`${environment.apiUrl}/calendar`))
      );
    }

    // Dispara NORMAL - Simula carregamento normal de rota na tela
    return this.http.get<CalendarEvent[]>(`${environment.apiUrl}/calendar`);
  }

  addEvent(eventData: CreateCalendarEvent): Observable<CalendarEvent> {
    return this.http.post<CalendarEvent>(`${environment.apiUrl}/calendar`, eventData);
  }
}
