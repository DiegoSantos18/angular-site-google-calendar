import { Component, EventEmitter, Injectable, Input, Output, signal, ViewChild, ElementRef, AfterViewChecked, ChangeDetectorRef, inject, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule, MatIcon } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule, DateRange, MatCalendarCellCssClasses, MatDatepickerIntl, MatCalendar } from '@angular/material/datepicker';
import { MatMenuModule } from '@angular/material/menu';
import { CalendarEvent } from '../../../core/models/calendar-event/calendar-event.model';

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
  imports: [CommonModule, MatIcon, MatIconModule, MatButtonModule, MatDatepickerModule, MatMenuModule],
  providers: [
    {
      provide: MatDatepickerIntl,
      useClass: RelaMatDatepickerIntl
    }
  ],
  selector: 'app-calendar-picker',
  styleUrl: './calendar-picker.component.scss',
  templateUrl: './calendar-picker.component.html'
})
export class CalendarPickerComponent implements AfterViewChecked {
  private cdr = inject(ChangeDetectorRef);

  showTimeSelection = signal(false);
  private shouldFocusTime = false;

  @ViewChild(MatCalendar) matCalendar?: MatCalendar<Date>;
  @ViewChild('startTimeInput') startTimeInput?: ElementRef<HTMLInputElement>;
  @Input() selectedRange: DateRange<Date> | null = null;
  @Input() calendarHeaderDate: Date = new Date();
  @Input() disabled = false;
  @Input() startTime = '08:00';
  @Input() endTime = '09:00';
  readonly hours = Array.from({ length: 24 }, (_, hour) => String(hour).padStart(2, '0'));
  readonly minutes = Array.from({ length: 60 }, (_, minute) => String(minute).padStart(2, '0'));

  private _existingEvents: CalendarEvent[] = [];
  @Input() set existingEvents(value: CalendarEvent[]) {
    this._existingEvents = value;
    this.cdr.markForCheck();
    if (this.matCalendar) {
      this.matCalendar.updateTodaysDate();
    }
  }
  get existingEvents(): CalendarEvent[] { return this._existingEvents; }

  @Output() rangeChange = new EventEmitter<DateRange<Date> | null>();
  @Output() startTimeChange = new EventEmitter<string>();
  @Output() endTimeChange = new EventEmitter<string>();
  @Output() activeDateChange = new EventEmitter<Date>();

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
    this.startTimeChange.emit(this.normalizeTimeInput(event));
  }

  onEndTimeChange(event: Event) {
    this.endTimeChange.emit(this.normalizeTimeInput(event));
  }

  selectStartHour(hour: string) {
    this.updateTimePart('start', 'hour', hour);
  }

  selectStartMinute(minute: string) {
    this.updateTimePart('start', 'minute', minute);
  }

  selectEndHour(hour: string) {
    this.updateTimePart('end', 'hour', hour);
  }

  selectEndMinute(minute: string) {
    this.updateTimePart('end', 'minute', minute);
  }

  scrollSelectedOption(list: HTMLElement) {
    requestAnimationFrame(() => {
      const selectedOption = list.querySelector<HTMLElement>('.selected');
      if (selectedOption) {
        list.scrollTop = selectedOption.offsetTop;
      }
    });
  }

  toggleTimeSelection() {
    const willShow = !this.showTimeSelection();
    this.showTimeSelection.set(willShow);
    if (willShow) {
      this.shouldFocusTime = true;
    }
  }

  dateFilter = (date: Date | null): boolean => {
    if (!date) return false;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (date < today) return false;

    return !this.getEventForDate(date);
  };

  dateClass = (date: Date): MatCalendarCellCssClasses => {
    const event = this.getEventForDate(date);
    if (!event) return '';
    const colorId = event.colorId;
    return colorId && /^(?:[1-9]|1[01])$/.test(colorId)
      ? `occupied-date occupied-color-${colorId}`
      : 'occupied-date';
  };

  private getEventForDate(date: Date): CalendarEvent | undefined {
    const checkDate = new Date(date);
    checkDate.setHours(0, 0, 0, 0);

    return this.existingEvents.find(event => {
      if (!event.start) return false;
      const startDateStr = event.start.dateTime || event.start.date;
      if (!startDateStr) return false;

      const evStart = new Date(startDateStr);
      evStart.setHours(0, 0, 0, 0);

      const endDateStr = event.end?.dateTime || event.end?.date || startDateStr;
      const evEnd = new Date(endDateStr);
      evEnd.setHours(0, 0, 0, 0);

      return checkDate >= evStart && checkDate <= evEnd;
    });
  }

  private normalizeTimeInput(event: Event): string {
    const input = event.target as HTMLInputElement;
    const digitsBeforeCursor = input.value
      .slice(0, input.selectionStart ?? input.value.length)
      .replace(/\D/g, '').length;
    const digits = input.value.replace(/\D/g, '').slice(0, 4);
    const formatted = digits.length > 2
      ? `${digits.slice(0, 2)}:${digits.slice(2)}`
      : digits;

    input.value = formatted;
    const cursorPosition = digitsBeforeCursor + (digitsBeforeCursor > 2 ? 1 : 0);
    input.setSelectionRange(cursorPosition, cursorPosition);

    return formatted;
  }

  private updateTimePart(
    field: 'start' | 'end',
    part: 'hour' | 'minute',
    value: string
  ): void {
    const currentTime = field === 'start' ? this.startTime : this.endTime;
    const [currentHour = '00', currentMinute = '00'] = currentTime.split(':');
    const updatedTime = part === 'hour'
      ? `${value}:${currentMinute}`
      : `${currentHour}:${value}`;
    const output = field === 'start' ? this.startTimeChange : this.endTimeChange;

    output.emit(updatedTime);
  }
}
