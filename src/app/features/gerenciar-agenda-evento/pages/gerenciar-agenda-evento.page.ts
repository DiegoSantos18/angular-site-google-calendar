import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NovoEventoForm } from '../forms/novo-evento/novo-evento.form';
import { NovoCalendarioForm } from '../forms/novo-calendario/novo-calendario.form';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CalendarStateService } from '../../../core/services/calendar-state/calendar-state.service';
import { CalendarService } from '../../../core/services/calendar/calendar.service';
import { CreateCalendar, resolveCalendarColor } from '../../../core/models/calendar/calendar.model';
import { ConfirmDialogComponent } from '../../../shared/components/confirm-dialog.component/confirm-dialog.component';

@Component({
  imports: [
    CommonModule,
    MatIconModule,
    MatTabsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatTooltipModule,
    NovoEventoForm,
    NovoCalendarioForm,
    RouterLink
  ],
  selector: 'app-gerenciar-agenda-evento-page',
  styleUrl: './gerenciar-agenda-evento.page.scss',
  templateUrl: './gerenciar-agenda-evento.page.html',
})
export class GerenciarAgendaEventoPage implements OnInit {
  private sanitizer = inject(DomSanitizer);
  private route = inject(ActivatedRoute);
  private calendarState = inject(CalendarStateService);
  private calendarService = inject(CalendarService);
  private dialog = inject(MatDialog);
  private snackBar = inject(MatSnackBar);

  selectedTabIndex = signal(0);
  iframeLoading = signal(true);
  creatingCalendar = signal(false);
  deletingCalendar = signal(false);
  showCalendarForm = signal(false);
  readonly calendars = this.calendarState.calendars;
  readonly selectedCalendarId = this.calendarState.selectedCalendarId;
  readonly selectedCalendar = this.calendarState.selectedCalendar;
  calendarsInitialized = this.calendarState.initialized;
  hasCalendars = computed(() => this.calendarState.calendars().length > 0);

  readonly iframeSRC = computed<SafeResourceUrl>(() => {
    const calendarId = this.calendarState.selectedCalendarId();
    const url = calendarId
      ? `https://calendar.google.com/calendar/embed?src=${encodeURIComponent(calendarId)}&ctz=America%2FSao_Paulo&hl=pt-BR`
      : 'about:blank';
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  });

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['tab'] === 'visualizar') {
        if (params['create'] === 'true') {
          this.showCalendarForm.set(true);
        }
        this.selectedTabIndex.set(1);
      }
    });
  }

  onTabChange(index: number) {
    this.selectedTabIndex.set(index);
  }

  onIframeLoad() {
    if (this.iframeLoading()) {
      this.iframeLoading.set(false);
    }
  }

  onCalendarChange(calendarId: string): void {
    this.calendarState.setCalendarId(calendarId);
    this.iframeLoading.set(true);
  }

  getCalendarColor(color?: string | null): string {
    return resolveCalendarColor(color);
  }

  createCalendar(): void {
    this.showCalendarForm.set(true);
  }

  onCreateCalendar(calendar: CreateCalendar): void {
    this.creatingCalendar.set(true);
    this.calendarService.createCalendar(calendar).subscribe({
      next: createdCalendar => {
        this.creatingCalendar.set(false);
        if (!createdCalendar.id) {
          this.showCalendarMessage('A agenda foi criada, mas não foi possível identificá-la para exibição.', 'error');
          return;
        }

        const calendars = this.calendarState.calendars();
        this.calendarState.setCalendars([
          ...calendars.filter(item => item.id !== createdCalendar.id),
          createdCalendar
        ]);
        this.calendarState.setCalendarId(createdCalendar.id);
        this.showCalendarForm.set(false);
        this.iframeLoading.set(true);
        this.showCalendarMessage('Agenda criada com sucesso.', 'success');
      },
      error: error => {
        this.creatingCalendar.set(false);
        console.error('Erro ao criar agenda:', error);
        const message = typeof error?.error?.error === 'string'
          ? error.error.error
          : 'Não foi possível criar a agenda. Verifique a conexão e tente novamente.';
        this.showCalendarMessage(message, 'error');
      }
    });
  }

  confirmDeleteCalendar(): void {
    const calendar = this.selectedCalendar();
    if (!calendar?.id) {
      this.showCalendarMessage('Selecione uma agenda válida para excluir.', 'error');
      return;
    }
    const calendarId = calendar.id;

    this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Excluir agenda?',
        message: `A agenda “${calendar.summary || 'sem nome'}” e todos os eventos nela serão excluídos permanentemente. Esta ação não pode ser desfeita.`,
        confirmLabel: 'Excluir agenda',
        confirmColor: 'warn',
        icon: 'delete_forever'
      },
      ariaLabel: 'Confirmar exclusão de agenda',
      autoFocus: 'dialog',
      restoreFocus: true
    }).afterClosed().subscribe(confirmed => {
      if (confirmed) this.deleteCalendar(calendarId);
    });
  }

  private deleteCalendar(calendarId: string): void {
    this.deletingCalendar.set(true);
    this.calendarService.deleteCalendar(calendarId).subscribe({
      next: () => {
        const calendars = this.calendarState.calendars().filter(calendar => calendar.id !== calendarId);
        this.calendarState.setCalendars(calendars);
        this.deletingCalendar.set(false);
        this.iframeLoading.set(true);
        this.showCalendarMessage('Agenda e eventos excluídos com sucesso.', 'success');
      },
      error: error => {
        this.deletingCalendar.set(false);
        console.error('Erro ao excluir agenda:', error);
        const message = typeof error?.error?.error === 'string'
          ? error.error.error
          : 'Não foi possível excluir a agenda. Verifique as permissões e tente novamente.';
        this.showCalendarMessage(message, 'error');
      }
    });
  }

  private showCalendarMessage(message: string, type: 'success' | 'error'): void {
    this.snackBar.open(message, 'Fechar', {
      duration: 5000,
      panelClass: type === 'success' ? ['success-snackbar'] : ['error-snackbar']
    });
  }
}
