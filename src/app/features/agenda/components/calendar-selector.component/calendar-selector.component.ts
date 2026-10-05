import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CalendarStateService } from '../../../../core/services/calendar-state/calendar-state.service';
import { resolveCalendarColor } from '../../../../core/models/calendar/calendar.model';

@Component({
  imports: [CommonModule, MatMenuModule, MatButtonModule, MatIconModule],
  selector: 'app-calendar-selector',
  styleUrl: './calendar-selector.component.scss',
  templateUrl: './calendar-selector.component.html',
})
export class CalendarSelectorComponent {
  private readonly calendarState = inject(CalendarStateService);

  calendars = this.calendarState.calendars;
  selectedId = this.calendarState.selectedCalendarId;
  selectedCalendar = this.calendarState.selectedCalendar;

  getCalendarColor(color?: string | null): string {
    return resolveCalendarColor(color);
  }

  getCalendarTint(color?: string | null): string {
    const calendarColor = this.getCalendarColor(color);
    return calendarColor.startsWith('#')
      ? `color-mix(in srgb, ${calendarColor} 16%, var(--mat-sys-surface))`
      : 'var(--mat-sys-primary-container)';
  }

  onCalendarChange(calendarId: string | null | undefined) {
    this.calendarState.setCalendarId(calendarId);
  }
}
