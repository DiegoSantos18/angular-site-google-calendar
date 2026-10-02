import { Component, EventEmitter, Injectable, Input, Output, signal, ViewChild, ElementRef, AfterViewChecked, ChangeDetectorRef, inject, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule, MatIcon } from '@angular/material/icon';
import { MatDatepickerModule, DateRange, MatCalendarCellCssClasses, MatDatepickerIntl, MatCalendar } from '@angular/material/datepicker';
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
  private cdr = inject(ChangeDetectorRef);

  @ViewChild(MatCalendar) matCalendar?: MatCalendar<Date>;

  @Input() selectedRange: DateRange<Date> | null = null;
  @Input() calendarHeaderDate: Date = new Date();
  @Input() disabled = false;

  private _existingEvents: CalendarEvent[] = [];
  @Input() set existingEvents(value: CalendarEvent[]) {
    this._existingEvents = value;
    this.cdr.markForCheck();
    if (this.matCalendar) {
      this.matCalendar.updateTodaysDate();
    }
  }
  get existingEvents(): CalendarEvent[] {
    return this._existingEvents;
  }

  @Input() startTime = '08:00';
  @Input() endTime = '09:00';

  @Output() rangeChange = new EventEmitter<DateRange<Date> | null>();
  @Output() startTimeChange = new EventEmitter<string>();
  @Output() endTimeChange = new EventEmitter<string>();
  @Output() activeDateChange = new EventEmitter<Date>();

  @ViewChild('startTimeInput') startTimeInput?: ElementRef<HTMLInputElement>;

  showTimeSelection = signal(false);
  private shouldFocusTime = false;

  @HostListener('click', ['$event'])
  onCalendarHostClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (
      target.closest('.mat-calendar-previous-button') ||
      target.closest('.mat-calendar-next-button') ||
      target.closest('.mat-calendar-period-button')
    ) {
      setTimeout(() => {
        if (this.matCalendar) {
          const activeDate = this.matCalendar.activeDate;
          if (activeDate) {
            this.activeDateChange.emit(activeDate);
          }
        }
      }, 50);
    }
  }

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

  onActiveDateChange(date: any) {
    const parsedDate = date instanceof Date ? date : new Date(date);
    if (!isNaN(parsedDate.getTime())) {
      this.activeDateChange.emit(parsedDate);
    }
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

    const checkDate = new Date(date);
    checkDate.setHours(0, 0, 0, 0);

    return !this.existingEvents.some(ev => {
      if (!ev.start) return false;
      const startDateStr = ev.start.dateTime || ev.start.date;
      if (!startDateStr) return false;

      const evStart = new Date(startDateStr);
      evStart.setHours(0, 0, 0, 0);

      const endDateStr = ev.end?.dateTime || ev.end?.date || startDateStr;
      const evEnd = new Date(endDateStr);
      evEnd.setHours(0, 0, 0, 0);

      return checkDate >= evStart && checkDate <= evEnd;
    });
  };

  dateClass = (date: Date): MatCalendarCellCssClasses => {
    const checkDate = new Date(date);
    checkDate.setHours(0, 0, 0, 0);

    const isOccupied = this.existingEvents.some(ev => {
      if (!ev.start) return false;
      const startDateStr = ev.start.dateTime || ev.start.date;
      if (!startDateStr) return false;

      const evStart = new Date(startDateStr);
      evStart.setHours(0, 0, 0, 0);

      const endDateStr = ev.end?.dateTime || ev.end?.date || startDateStr;
      const evEnd = new Date(endDateStr);
      evEnd.setHours(0, 0, 0, 0);

      return checkDate >= evStart && checkDate <= evEnd;
    });

    return isOccupied ? 'occupied-date' : '';
  };
}
