import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
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

  loading = signal(false);
  loadingEvents = signal(true);
  successMessage = signal('');
  errorMessage = signal('');

  existingEvents = signal<CalendarEvent[]>([]);
  selectedRange: DateRange<Date> | null = null;

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

  ngOnInit() {
    this.loadOccupiedSlots();
  }

  loadOccupiedSlots() {
    this.loadingEvents.set(true);
    this.calendarService.getEvents().subscribe({
      next: (events) => {
        this.existingEvents.set(events);
        this.loadingEvents.set(false);
      },
      error: () => {
        this.loadingEvents.set(false);
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
    return `${day}/${month}/${year}, ${hours}:${minutes}`;
  }

  onSubmit() {
    if (this.eventForm.invalid || !this.selectedRange?.start) return;

    this.loading.set(true);
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
        this.successMessage.set('Evento agendado com sucesso!');
        setTimeout(() => this.router.navigate(['/']), 1500);
      },
      error: (err) => {
        this.loading.set(false);
        this.errorMessage.set('Erro ao agendar. O horário selecionado está em conflito.');
        console.error(err);
      }
    });
  }
}
