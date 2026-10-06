import { Component, inject, OnInit } from '@angular/core';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';
import { firstValueFrom } from 'rxjs';
import { Title } from '@angular/platform-browser';
import { MAT_DATE_LOCALE, provideNativeDateAdapter } from '@angular/material/core';
import { MatIconRegistry, MatIcon } from '@angular/material/icon';
import { MatIconModule } from '@angular/material/icon';
import { CalendarStateService } from './core/services/calendar-state/calendar-state.service';
import { CalendarService } from './core/services/calendar/calendar.service';
import { resolveCalendarColor } from './core/models/calendar/calendar.model';

@Component({
  imports: [RouterOutlet, MatIcon, MatIconModule],
  providers: [
    provideNativeDateAdapter(),
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' }
  ],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App implements OnInit {
  private router = inject(Router);
  private titleService = inject(Title);
  private matIconRegistry = inject(MatIconRegistry);
  private calendarService = inject(CalendarService);
  private calendarState = inject(CalendarStateService);
  public readonly currentYear = new Date().getFullYear();

  getCalendarColor(): string {
    return resolveCalendarColor(this.calendarState.selectedCalendar()?.backgroundColor);
  }

  constructor() {
    // Registry para Font Awesome e Material Icon
    this.matIconRegistry.registerFontClassAlias('fontawesome', 'fa-solid');
    this.matIconRegistry.registerFontClassAlias('fa-regular', 'fa-regular');
    this.matIconRegistry.registerFontClassAlias('fa-brands', 'fa-brands');
  }

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      let activeRouteChild = this.router.routerState.root;
      while (activeRouteChild.firstChild) {
        activeRouteChild = activeRouteChild.firstChild;
      }

      let title = 'Minha Agenda';
      const routeTitle = activeRouteChild.snapshot.data['title'];
      if (routeTitle) {
        title = `Minha Agenda - ${routeTitle}`;
      }

      this.titleService.setTitle(title);
    });
    this.inicializarCalendarios();
  }

  async inicializarCalendarios() {
    try {
      const calendars = await firstValueFrom(this.calendarService.getCalendars());
      this.calendarState.setCalendars(calendars);
    } catch (err) {
      console.error('Erro ao inicializar calendários:', err);
      this.calendarState.setCalendars([]);
    }
  }
}
