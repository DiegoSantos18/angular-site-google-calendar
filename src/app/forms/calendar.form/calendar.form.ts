import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink, ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { DateRange } from '@angular/material/datepicker';
import { MAT_DATE_LOCALE, provideNativeDateAdapter } from '@angular/material/core';
import { CalendarService } from './../../services/calendar.service';
import { CalendarEvent } from './../../models/calendar.model';
import { CalendarPickerComponent } from './../../components/calendar-picker.component/calendar-picker.component';
import { environment } from '../../../environments/environment.development';

@Component({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatTabsModule,
    CalendarPickerComponent
  ],
  providers: [
    provideNativeDateAdapter(),
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' }
  ],
  selector: 'app-calendar-form',
  styleUrl: './calendar.form.scss',
  templateUrl: './calendar.form.html'
})
export class CalendarForm implements OnInit {
  private fb = inject(FormBuilder);
  private calendarService = inject(CalendarService);
  private sanitizer = inject(DomSanitizer);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  loading = signal(false);
  loadingEvents = signal(true);
  successMessage = signal('');
  errorMessage = signal('');
  selectedTabIndex = signal(0);
  iframeLoading = signal(true);

  existingEvents = signal<CalendarEvent[]>([]);
  selectedRange: DateRange<Date> | null = null;
  currentCalendarDate = signal<Date>(new Date());

  eventForm: FormGroup = this.fb.group({
    summary: ['', Validators.required],
    description: [''],
    dateRange: this.fb.group({
      start: [null, Validators.required],
      end: [null, Validators.required]
    }),
    startTime: ['08:00', Validators.required],
    endTime: ['09:00', Validators.required],
    location: ['']
  });

  get iframeSRC(): SafeResourceUrl {
    const url = `https://calendar.google.com/calendar/embed?src=${encodeURIComponent(environment.google_calendar_id)}&ctz=America%2FSao_Paulo&hl=pt-BR`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  get filteredEventsForMonth(): CalendarEvent[] {
    const events = this.existingEvents();
    const activeDate = this.selectedRange?.start || this.currentCalendarDate();
    const targetMonth = activeDate.getMonth();
    const targetYear = activeDate.getFullYear();
    const startOfMonth = new Date(targetYear, targetMonth, 1, 0, 0, 0, 0);
    const endOfMonth = new Date(targetYear, targetMonth + 1, 0, 23, 59, 59, 999);

    return events.filter(ev => {
      if (!ev.start) return false;
      const startDateStr = ev.start.dateTime || ev.start.date;
      if (!startDateStr) return false;

      const evStart = new Date(startDateStr);
      const endDateStr = ev.end?.dateTime || ev.end?.date || startDateStr;
      const evEnd = new Date(endDateStr);

      return evStart <= endOfMonth && evEnd >= startOfMonth;
    });
  }

  ngOnInit() {
    this.loadOccupiedSlots();

    this.route.queryParams.subscribe(params => {
      if (params['tab'] === 'visualizar') {
        setTimeout(() => {
          this.selectedTabIndex.set(1);
          this.iframeLoading.set(true);
          setTimeout(() => {
            this.iframeLoading.set(false);
          }, 1200);
        }, 50);
      }
    });
  }

  onTabChange(index: number) {
  this.selectedTabIndex.set(index);

  if (index === 1) {
    this.iframeLoading.set(true);
    setTimeout(() => {
      this.iframeLoading.set(false);
    }, 1200);
  }
}

  onIframeLoad() {
    if (this.iframeLoading()) {
      this.iframeLoading.set(false);
    }
  }

  loadOccupiedSlots() {
    this.loadingEvents.set(true);
    this.eventForm.disable();

    this.calendarService.getEvents(0, 31).subscribe({
      next: (events) => {
        this.existingEvents.set(events);
        this.loadingEvents.set(false);
        this.eventForm.enable();
      },
      error: () => {
        this.loadingEvents.set(false);
        this.eventForm.enable();
      }
    });
  }

  onRangeChange(range: DateRange<Date> | null) {
    this.selectedRange = range;
    this.eventForm.patchValue({
      dateRange: {
        start: range?.start || null,
        end: range?.end || range?.start || null
      }
    });
  }

  onActiveDateChange(date: Date) {
    this.currentCalendarDate.set(date);
  }

  formatRangeDisplay(): string {
    if (!this.selectedRange || !this.selectedRange.start) return 'Selecione no calendário';

    const startTime = this.eventForm?.get('startTime')?.value || '00:00';
    const endTime = this.eventForm?.get('endTime')?.value || '00:00';
    const startDt = this.selectedRange.start.toLocaleDateString('pt-BR');

    if (this.selectedRange.end) {
      const endDt = this.selectedRange.end.toLocaleDateString('pt-BR');
      if (startDt !== endDt) {
        return `${startDt} às ${startTime} até ${endDt} às ${endTime}`;
      }
    }

    return `${startDt} das ${startTime} às ${endTime}`;
  }

  formatEventDate(dateString?: string): string {
    if (!dateString) return '';
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${day}/${month}/${year} ${hours}:${minutes}H`;
  }

  formatEventDateRange(ev: CalendarEvent): string {
    if (!ev.start) return '';
    const startStr = ev.start.dateTime || ev.start.date;
    const formattedStart = this.formatEventDate(startStr);

    const endStr = ev.end?.dateTime || ev.end?.date;
    if (!endStr) return formattedStart;

    const formattedEnd = this.formatEventDate(endStr);
    if (formattedStart === formattedEnd) return formattedStart;

    return `${formattedStart} até ${formattedEnd}`;
  }

  onSubmit() {
    if (this.eventForm.invalid || !this.selectedRange?.start) return;

    this.loading.set(true);
    this.loadingEvents.set(true);
    this.successMessage.set('');
    this.errorMessage.set('');

    const formValue = this.eventForm.value;
    const startDt: Date = formValue.dateRange.start;
    const endDt: Date = formValue.dateRange.end || startDt;

    const [startHour, startMin] = formValue.startTime.split(':');
    const [endHour, endMin] = formValue.endTime.split(':');

    const startDateTime = new Date(startDt);
    startDateTime.setHours(Number(startHour), Number(startMin), 0);

    const endDateTime = new Date(endDt);
    endDateTime.setHours(Number(endHour), Number(endMin), 0);

    const payload = {
      summary: formValue.summary,
      description: formValue.description,
      startDateTime: startDateTime.toISOString(),
      endDateTime: endDateTime.toISOString(),
      location: formValue.location
    };

    this.calendarService.addEvent(payload).subscribe({
      next: () => {
        this.loading.set(false);
        this.loadingEvents.set(false);
        this.successMessage.set('Evento agendado com sucesso!');
        setTimeout(() => this.router.navigate(['/']), 1500);
      },
      error: (err) => {
        this.loading.set(false);
        this.loadingEvents.set(false);
        this.errorMessage.set('Erro ao agendar. O horário selecionado está em conflito.');
        console.error(err);
      }
    });
  }

  deleteEvent(eventId: string) {
    if (!confirm('Tem certeza de que deseja excluir este evento?')) {
      return;
    }

    this.calendarService.deleteEvent(eventId).subscribe({
      next: () => {
        this.existingEvents.update(events => events.filter(ev => ev.id !== eventId));
      },
      error: (err) => {
        console.error('Erro ao excluir o evento:', err);
      }
    });
  }
}
