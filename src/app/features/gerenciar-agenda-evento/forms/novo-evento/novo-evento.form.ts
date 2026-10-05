import { Component, effect, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DateRange } from '@angular/material/datepicker';
import { RouterLink } from '@angular/router';
import { filter, switchMap, take } from 'rxjs';
import { CalendarService } from '../../../../core/services/calendar/calendar.service';
import {
  CalendarEvent,
  googleEventPalette,
  resolveEventColor
} from '../../../../core/models/calendar-event/calendar-event.model';
import { resolveCalendarColor } from '../../../../core/models/calendar/calendar.model';
import { CalendarStateService } from '../../../../core/services/calendar-state/calendar-state.service';
import { CalendarPickerComponent } from '../../../../shared/components/calendar-picker.component/calendar-picker.component';
import { ConfirmDialogComponent } from '../../../../shared/components/confirm-dialog.component/confirm-dialog.component';

const TIME_FORMAT_PATTERN = /^([01]\d|2[0-3]):[0-5]\d$/;
const EVENT_COLOR_NAMES: Record<string, string> = {
  '1': 'Lavanda',
  '2': 'Sálvia',
  '3': 'Uva',
  '4': 'Flamingo',
  '5': 'Banana',
  '6': 'Tangerina',
  '7': 'Pavão',
  '8': 'Grafite',
  '9': 'Mirtilo',
  '10': 'Manjericão',
  '11': 'Tomate'
};

@Component({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatTooltipModule,
    RouterLink,
    CalendarPickerComponent
  ],
  selector: 'app-novo-evento-form',
  styleUrl: './novo-evento.form.scss',
  templateUrl: './novo-evento.form.html'
})
export class NovoEventoForm {
  private fb = inject(FormBuilder);
  private calendarService = inject(CalendarService);
  private router = inject(Router);
  private calendarState = inject(CalendarStateService);
  private dialog = inject(MatDialog);
  private snackBar = inject(MatSnackBar);

  loading = signal(false);
  availabilityError = signal('');
  existingEvents = signal<CalendarEvent[]>([]);
  selectedRange: DateRange<Date> | null = null;
  currentCalendarDate = signal<Date>(new Date());
  readonly eventColors = Object.entries(googleEventPalette).map(([colorId, color]) => ({
    colorId,
    color,
    label: EVENT_COLOR_NAMES[colorId] ?? `Cor ${colorId}`
  }));

  getCalendarColor(): string {
    return resolveCalendarColor(this.calendarState.selectedCalendar()?.backgroundColor);
  }

  getEventColor(event: CalendarEvent): string | null {
    return resolveEventColor(event);
  }

  get hasCalendars(): boolean {
    return this.calendarState.calendars().length > 0;
  }

  eventForm: FormGroup = this.fb.group({
    summary: ['', Validators.required],
    description: [''],
    dateRange: this.fb.group({
      start: [null, Validators.required],
      end: [null, Validators.required]
    }),
    startTime: ['08:00', [Validators.required, Validators.pattern(TIME_FORMAT_PATTERN)]],
    endTime: ['09:00', [Validators.required, Validators.pattern(TIME_FORMAT_PATTERN)]],
    location: [''],
    colorId: ['']
  });

  private readonly selectedCalendarEffect = effect(() => {
    if (!this.calendarState.initialized()) return;

    if (this.calendarState.selectedCalendarId()) {
      this.loadOccupiedSlots();
      return;
    }

    this.loading.set(false);
    this.existingEvents.set([]);
    this.availabilityError.set('Cadastre uma agenda antes de consultar a disponibilidade.');
    this.eventForm.enable();
  });

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

  onSubmit() {
    if (this.eventForm.invalid || !this.selectedRange?.start) return;

    this.loading.set(true);
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
      location: formValue.location,
      colorId: formValue.colorId || undefined
    };

    this.calendarService.addEvent(payload).subscribe({
      next: () => {
        this.loading.set(false);
        this.showMessage('Evento agendado com sucesso.', 'success');
        setTimeout(() => this.router.navigate(['/']), 1500);
      },
      error: (err) => {
        this.loading.set(false);
        console.error('Erro ao agendar o evento:', err);
        this.showMessage(this.getRequestErrorMessage(err, 'criar'), 'error');
      }
    });
  }

  onDeleteEvent(eventId: string | null | undefined, eventSummary?: string | null): void {
    if (!eventId) {
      this.showMessage('Não foi possível identificar o evento para excluir.', 'error');
      return;
    }

    this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Excluir evento?',
        message: `O evento “${eventSummary || 'sem título'}” será removido da agenda. Esta ação não pode ser desfeita.`,
        confirmLabel: 'Excluir evento',
        confirmColor: 'warn',
        icon: 'delete_forever'
      },
      ariaLabel: 'Confirmar exclusão de evento',
      autoFocus: 'dialog',
      restoreFocus: true,
      width: 'min(92vw, 420px)'
    }).afterClosed().pipe(
      take(1),
      filter((confirmed): confirmed is true => confirmed === true),
      switchMap(() => this.calendarService.deleteEvent(eventId))
    ).subscribe({
      next: () => {
        this.existingEvents.update(events => events.filter(ev => ev.id !== eventId));
        this.showMessage('Evento excluído da agenda.', 'success');
      },
      error: (err) => {
        console.error('Erro ao excluir o evento:', err);
        this.showMessage(this.getRequestErrorMessage(err, 'excluir'), 'error');
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

  loadOccupiedSlots() {
    if (!this.calendarState.selectedCalendarId()) {
      this.loading.set(false);
      this.existingEvents.set([]);
      this.availabilityError.set('Cadastre uma agenda antes de consultar a disponibilidade.');
      this.eventForm.enable();
      return;
    }

    this.loading.set(true);
    this.availabilityError.set('');
    this.eventForm.disable();

    this.calendarService.getEvents(0, 31).subscribe({
      next: (events) => {
        this.existingEvents.set(events);
        this.loading.set(false);
        this.eventForm.enable();
      },
      error: (err) => {
        this.loading.set(false);
        this.eventForm.enable();
        this.availabilityError.set(
          'Não foi possível carregar a disponibilidade. Tente novamente antes de agendar.'
        );
        console.error('Erro ao carregar eventos existentes:', err);
      }
    });
  }

  private showMessage(message: string, type: 'success' | 'error'): void {
    this.snackBar.open(message, 'Fechar', {
      duration: type === 'success' ? 4000 : 7000,
      politeness: type === 'error' ? 'assertive' : 'polite',
      panelClass: [`app-snackbar-${type}`]
    });
  }

  private getRequestErrorMessage(error: unknown, action: 'criar' | 'excluir'): string {
    const rawStatus = typeof error === 'object' && error !== null && 'status' in error
      ? error.status
      : undefined;
    const status = typeof rawStatus === 'number' ? rawStatus : undefined;

    if (status === 0) {
      return 'Não foi possível conectar à API. Verifique sua conexão e tente novamente.';
    }
    if (status === 401) {
      return 'Sua sessão Google expirou. Entre novamente com a conta autorizada.';
    }
    if (status === 403) {
      return 'Esta conta Google não tem permissão para alterar as agendas.';
    }
    if (status === 409) {
      return 'Esse horário entrou em conflito com outro evento. Atualize a agenda e escolha outro período.';
    }
    if (status === 400) {
      return action === 'criar'
        ? 'Confira o título, a data e os horários informados e tente novamente.'
        : 'A solicitação de exclusão não foi aceita. Atualize a agenda e tente novamente.';
    }

    return action === 'criar'
      ? 'Não foi possível agendar o evento agora. Tente novamente em instantes.'
      : 'Não foi possível excluir o evento agora. Tente novamente em instantes.';
  }

  formatRangeDisplay(): string {
    if (!this.selectedRange || !this.selectedRange.start) {
      return 'Selecione no calendário';
    }

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

  formatEventDate(dateString?: string | null | undefined): string {
    if (!dateString) return '';
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${day}/${month}/${year} às ${hours}:${minutes}`;
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
}
