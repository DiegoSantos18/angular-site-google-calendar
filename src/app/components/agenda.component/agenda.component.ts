import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { catchError, map, of, startWith } from 'rxjs';
import { CalendarService } from '../../services/calendar.service';
import { CalendarEvent } from '../../models/calendar.model';

@Component({
  imports: [CommonModule, MatIconModule, RouterLink],
  selector: 'app-agenda',
  styleUrl: './agenda.component.scss',
  templateUrl: './agenda.component.html',
})
export class AgendaComponent {
  private calendarService = inject(CalendarService);

  agendaQuery = toSignal(
    this.calendarService.getEvents().pipe(
      map((eventos) => ({ eventos, loading: false, error: '' })),
      startWith({ eventos: [] as CalendarEvent[], loading: true, error: '' }),
      catchError((err) => {
        console.error('Erro ao buscar eventos:', err);
        return of({
          eventos: [] as CalendarEvent[],
          loading: false,
          error: 'Não foi possível carregar a agenda no momento.'
        });
      })
    )
  );

  get eventos() { return this.agendaQuery()?.eventos ?? []; }
  get loading() { return this.agendaQuery()?.loading ?? true; }
  get errorMessage() { return this.agendaQuery()?.error ?? ''; }
}
