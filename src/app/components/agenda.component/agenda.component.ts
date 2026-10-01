import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { catchError, map, of, startWith } from 'rxjs';
import { CalendarService } from '../../services/calendar.service';
import { CalendarEvent } from '../../models/calendar.model';

@Component({
  imports: [CommonModule, MatIconModule, MatButtonModule, RouterLink],
  selector: 'app-agenda',
  styleUrl: './agenda.component.scss',
  templateUrl: './agenda.component.html',
})
export class AgendaComponent {
  private calendarService = inject(CalendarService);

  currentPage = 1;
  pageSize = 6;

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

  get totalPages(): number {
    return Math.ceil(this.eventos.length / this.pageSize) || 1;
  }

  get paginatedEvents(): CalendarEvent[] {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.eventos.slice(start, start + this.pageSize);
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  getGoogleCalendarLink(ev: CalendarEvent): string {
    if ((ev as any).htmlLink && (ev as any).htmlLink.includes('action=TEMPLATE')) {
      return (ev as any).htmlLink;
    }

    const summary = encodeURIComponent(ev.summary || 'Evento');
    const description = encodeURIComponent(ev.description || '');
    const location = encodeURIComponent(ev.location || '');

    const formatDate = (dateStr?: string) => {
      if (!dateStr) return '';
      const d = new Date(dateStr);
      return !isNaN(d.getTime()) ? d.toISOString().replace(/-|:|\.\d{3}/g, '') : '';
    };

    const start = formatDate(ev.start.dateTime || ev.start.date);
    const end = formatDate(ev.end?.dateTime || ev.end?.date || ev.start.dateTime || ev.start.date);

    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${summary}&dates=${start}/${end}&details=${description}&location=${location}`;
  }
}
