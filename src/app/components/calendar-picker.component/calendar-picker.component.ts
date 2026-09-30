import { Component, EventEmitter, Injectable, Input, Output, signal, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule, MatIcon } from '@angular/material/icon';
import { MatDatepickerModule, DateRange, MatCalendarCellCssClasses, MatDatepickerIntl } from '@angular/material/datepicker';
import { CalendarEvent } from '../../models/calendar.model';

@Injectable()
export class RelaMatDatepickerIntl extends MatDatepickerIntl {
  override prevMonthLabel = 'Mês anterior';
  override nextMonthLabel = 'Mês seguinte';
  override prevYearLabel = 'Ano anterior';
  override nextYearLabel = 'Ano seguinte';
  override prevMultiYearLabel = '24 anos anteriores';
  override nextMultiYearLabel = 'Próximos 24 anos';
  override openCalendarLabel = 'Abrir calendário';
  override switchToMonthViewLabel = 'Mudar para visualização de mês';
  override switchToMultiYearViewLabel = 'Mudar para visualização de anos';
}

@Component({
  imports: [CommonModule, MatIcon, MatIconModule, MatDatepickerModule],
  providers: [
    { provide: MatDatepickerIntl, useClass: RelaMatDatepickerIntl }
  ],
  selector: 'app-calendar-picker',
  styleUrl: './calendar-picker.component.scss',
  templateUrl: './calendar-picker.component.html'
})
export class CalendarPickerComponent implements AfterViewChecked {
  @Input() selectedRange: DateRange<Date> | null = null;
  @Input() existingEvents: CalendarEvent[] = [];
  @Input() startTime = '08:00';
  @Input() endTime = '09:00';

  @Output() rangeChange = new EventEmitter<DateRange<Date> | null>();
  @Output() startTimeChange = new EventEmitter<string>();
  @Output() endTimeChange = new EventEmitter<string>();

  @ViewChild('startTimeInput') startTimeInput?: ElementRef<HTMLInputElement>;

  showTimeSelection = signal(false);
  private shouldFocusTime = false;

  toggleTimeSelection() {
    const willShow = !this.showTimeSelection();
    this.showTimeSelection.set(willShow);
    if (willShow) {
      this.shouldFocusTime = true;
    }
  }

  ngAfterViewChecked() {
    if (this.shouldFocusTime && this.startTimeInput) {
      this.startTimeInput.nativeElement.focus();
      this.shouldFocusTime = false;
    }
  }

  onSelectedChange(date: Date | null) {
    if (!date) return;
    let newRange: DateRange<Date> | null = null;

    if (
      this.selectedRange &&
      this.selectedRange.start &&
      date.getTime() === this.selectedRange.start.getTime() &&
      !this.selectedRange.end
    ) {
      newRange = null;
    } else if (
      this.selectedRange &&
      this.selectedRange.start &&
      date > this.selectedRange.start &&
      !this.selectedRange.end
    ) {
      newRange = new DateRange(this.selectedRange.start, date);
    } else {
      newRange = new DateRange(date, null);
    }

    this.rangeChange.emit(newRange);
  }

  onStartTimeChange(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.startTimeChange.emit(value);
  }

  onEndTimeChange(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.endTimeChange.emit(value);
  }

  dateFilter = (date: Date | null): boolean => {
    if (!date) return false;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (date < today) return false;

    return !this.existingEvents.some(ev => {
      if (!ev.start) return false;
      const dateStr = ev.start.dateTime || ev.start.date;
      if (!dateStr) return false;
      const evDate = new Date(dateStr);
      return evDate.getDate() === date.getDate() &&
             evDate.getMonth() === date.getMonth() &&
             evDate.getFullYear() === date.getFullYear();
    });
  };

  dateClass = (date: Date): MatCalendarCellCssClasses => {
    const isOccupied = this.existingEvents.some(ev => {
      if (!ev.start) return false;
      const dateStr = ev.start.dateTime || ev.start.date;
      if (!dateStr) return false;
      const evDate = new Date(dateStr);
      return evDate.getDate() === date.getDate() &&
             evDate.getMonth() === date.getMonth() &&
             evDate.getFullYear() === date.getFullYear();
    });

    return isOccupied ? 'occupied-date' : '';
  };
}
