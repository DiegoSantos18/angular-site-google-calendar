import { CommonModule } from '@angular/common';
import { Component, inject, signal, computed } from '@angular/core';
import { toSignal, toObservable } from '@angular/core/rxjs-interop';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { catchError, map, of, startWith, switchMap } from 'rxjs';
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

  currentPage = signal(1);
  pageSize = 6;

  agendaQuery = toSignal(
    toObservable(this.currentPage).pipe(
      switchMap((page) => {
        const skip = (page - 1) * this.pageSize;
        return this.calendarService.getEvents(skip, this.pageSize + 1).pipe(
          map((eventos) => {
            const hasMore = eventos.length > this.pageSize;
            const paginatedList = hasMore ? eventos.slice(0, this.pageSize) : eventos;
            return { eventos: paginatedList, hasMore, loading: false, error: '' };
          }),
          startWith({ eventos: [] as CalendarEvent[], hasMore: false, loading: true, error: '' }),
          catchError((err) => {
            console.error('Erro ao buscar eventos:', err);
            return of({
              eventos: [] as CalendarEvent[],
              hasMore: false,
              loading: false,
              error: 'Não foi possível carregar a agenda no momento.'
            });
          })
        );
      })
    ),
    { initialValue: { eventos: [] as CalendarEvent[], hasMore: false, loading: true, error: '' } }
  );

  get hasMorePages() {
    return this.agendaQuery().hasMore;
  }

  get eventos() {
    return this.agendaQuery().eventos;
  }
  get loading() { return this.agendaQuery().loading; }
  get errorMessage() { return this.agendaQuery().error; }

  totalPages = computed(() => {
    return this.hasMorePages ? this.currentPage() + 1 : this.currentPage();
  });

  get paginatedEvents(): CalendarEvent[] {
    return this.eventos;
  }

  nextPage() {
    this.currentPage.update(p => p + 1);
  }

  prevPage() {
    if (this.currentPage() > 1) {
      this.currentPage.update(p => p - 1);
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
