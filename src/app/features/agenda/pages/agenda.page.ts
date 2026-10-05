import { CommonModule } from '@angular/common';
import { Component, inject, signal, computed } from '@angular/core';
import { toSignal, toObservable } from '@angular/core/rxjs-interop';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { catchError, map, of, startWith, switchMap, combineLatest } from 'rxjs';
import { CalendarService } from '../../../core/services/calendar/calendar.service';
import { CalendarStateService } from '../../../core/services/calendar-state/calendar-state.service';
import { resolveCalendarColor } from '../../../core/models/calendar/calendar.model';
import { CalendarEvent, resolveEventColor } from '../../../core/models/calendar-event/calendar-event.model';
import { CalendarSelectorComponent } from '../components/calendar-selector.component/calendar-selector.component';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  imports: [CommonModule, MatIconModule, MatButtonModule, MatMenuModule, RouterLink, CalendarSelectorComponent],
  selector: 'app-agenda-page',
  styleUrl: './agenda.page.scss',
  templateUrl: './agenda.page.html',
})
export class AgendaPage {
  private calendarService = inject(CalendarService);
  private calendarState = inject(CalendarStateService);

  currentPage = signal(1);
  pageSize = 6;

  agendaQuery = toSignal(
    combineLatest([
      toObservable(this.currentPage),
      toObservable(this.calendarState.selectedCalendarId),
      toObservable(this.calendarState.initialized)
    ]).pipe(
      switchMap(([page, calendarId, calendarsInitialized]) => {
        if (calendarsInitialized && !calendarId) {
          return of({ eventos: [] as CalendarEvent[], hasMore: false, loading: false, error: '' });
        }

        if (!calendarId) {
          return of({ eventos: [] as CalendarEvent[], hasMore: false, loading: true, error: '' });
        }

        const skip = (page - 1) * this.pageSize;
        return this.calendarService.watchEvents(skip, this.pageSize + 1).pipe(
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

  get hasMorePages() { return this.agendaQuery().hasMore; }
  get eventos() { return this.agendaQuery().eventos; }
  get loading() { return this.agendaQuery().loading; }
  get errorMessage() { return this.agendaQuery().error; }
  get paginatedEvents(): CalendarEvent[] { return this.eventos; }
  get selectedCalendar() { return this.calendarState.selectedCalendar(); }
  get hasCalendars() { return this.calendarState.calendars().length > 0; }

  getCalendarColor(): string {
    return resolveCalendarColor(this.selectedCalendar?.backgroundColor);
  }

  getEventColor(event: CalendarEvent): string | null {
    return resolveEventColor(event);
  }

  totalPages = computed(() => {
    return this.hasMorePages ? this.currentPage() + 1 : this.currentPage();
  });

  nextPage = () => this.currentPage.update(p => p + 1);
  prevPage = () => this.currentPage() > 1 ? this.currentPage.update(p => p - 1) : undefined;

  getGoogleCalendarLink(ev: CalendarEvent): string {
    if (ev.htmlLink && ev.htmlLink.includes('action=TEMPLATE')) {
      return ev.htmlLink;
    }

    const summary = encodeURIComponent(ev.summary || 'Evento');
    const description = encodeURIComponent(ev.description || '');
    const location = encodeURIComponent(ev.location || '');

    const formatDate = (dateStr?: string | null | undefined) => {
      if (!dateStr) return '';
      const d = new Date(dateStr);
      return !isNaN(d.getTime()) ? d.toISOString().replace(/-|:|\.\d{3}/g, '') : '';
    };

    const start = formatDate(ev.start?.dateTime || ev.start?.date);
    const end = formatDate(ev.end?.dateTime || ev.end?.date || ev.start?.dateTime || ev.start?.date);

    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${summary}&dates=${start}/${end}&details=${description}&location=${location}`;
  }
}
