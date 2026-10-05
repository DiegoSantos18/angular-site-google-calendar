import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideNativeDateAdapter } from '@angular/material/core';
import { provideRouter, RouterLink } from '@angular/router';
import { DateRange } from '@angular/material/datepicker';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { throwError, of } from 'rxjs';

import { CalendarService } from '../../../../core/services/calendar/calendar.service';
import { CalendarStateService } from '../../../../core/services/calendar-state/calendar-state.service';
import { NovoEventoForm } from './novo-evento.form';

describe('NovoEventoForm', () => {
  let component: NovoEventoForm;
  let fixture: ComponentFixture<NovoEventoForm>;
  let calendarService: CalendarService;
  let dialogOpen: ReturnType<typeof vi.fn>;
  let snackbarOpen: ReturnType<typeof vi.fn>;

  beforeEach(async () => {
    dialogOpen = vi.fn().mockReturnValue({ afterClosed: () => of(true) });
    snackbarOpen = vi.fn();
    await TestBed.configureTestingModule({
      imports: [NovoEventoForm],
      providers: [
        CalendarService,
        provideRouter([]),
        provideHttpClient(),
        provideHttpClientTesting(),
        provideNativeDateAdapter(),
        { provide: MatDialog, useValue: { open: dialogOpen } },
        { provide: MatSnackBar, useValue: { open: snackbarOpen } }
      ]
    }).compileComponents();

    calendarService = TestBed.inject(CalendarService);
    TestBed.inject(CalendarStateService).setCalendars([
      { id: 'test-calendar-id', summary: 'Teste' }
    ]);

    vi.spyOn(calendarService, 'getEvents').mockReturnValue(of([
      {
        id: '1',
        summary: 'Evento Outubro',
        eventColor: '#b7c55c',
        start: { dateTime: '2026-10-10T10:00:00' },
        end: { dateTime: '2026-10-10T11:00:00' }
      },
      {
        id: '2',
        summary: 'Evento Novembro',
        start: { dateTime: '2026-11-15T10:00:00' },
        end: { dateTime: '2026-11-15T11:00:00' }
      }
    ]));

    vi.spyOn(calendarService, 'deleteEvent').mockReturnValue(of({ message: 'Evento deletado com sucesso!' }));
    vi.spyOn(calendarService, 'addEvent').mockReturnValue(of({
      message: 'Evento criado com sucesso!',
      event: { id: 'created' }
    }));

    fixture = TestBed.createComponent(NovoEventoForm);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not request event availability when there is no calendar', () => {
    const getEvents = vi.mocked(calendarService.getEvents);
    getEvents.mockClear();
    TestBed.inject(CalendarStateService).setCalendars([]);
    fixture.detectChanges();

    expect(getEvents).not.toHaveBeenCalled();
    expect(component.existingEvents()).toEqual([]);
    expect(component.availabilityError()).toContain('Cadastre uma agenda');
    const createCalendarLink = fixture.debugElement.query(By.css('.availability-error-actions a'));
    expect(createCalendarLink.injector.get(RouterLink).queryParams).toEqual({
      tab: 'visualizar',
      create: 'true'
    });
    expect(fixture.nativeElement.querySelector('.availability-error-actions button')).toBeNull();
  });

  it('should filter events based on current active calendar month', () => {
    component.onActiveDateChange(new Date(2026, 9, 1));
    expect(component.filteredEventsForMonth.length).toBe(1);
    expect(component.filteredEventsForMonth[0].summary).toBe('Evento Outubro');

    component.onActiveDateChange(new Date(2026, 10, 1));
    expect(component.filteredEventsForMonth.length).toBe(1);
    expect(component.filteredEventsForMonth[0].summary).toBe('Evento Novembro');
  });

  it('should patch dateRange group when onRangeChange is called', () => {
    const startDate = new Date(2026, 8, 24);
    const range = new DateRange<Date>(startDate, null);

    component.onRangeChange(range);

    expect(component.selectedRange?.start).toEqual(startDate);

    expect(
      component.eventForm.get('dateRange')?.get('start')?.value
    ).toEqual(startDate);
  });

  it('should validate form when required fields and selectedRange are filled', () => {
    const startDate = new Date(2026, 8, 24);
    const endDate = new Date(2026, 8, 25);

    component.selectedRange = new DateRange<Date>(
      startDate,
      endDate
    );

    component.eventForm.patchValue({
      summary: 'Reunião de Alinhamento',
      description: 'Discussão de arquitetura',
      dateRange: {
        start: startDate,
        end: endDate
      },
      startTime: '08:00',
      endTime: '09:00',
      location: 'Sala 1'
    });

    expect(component.eventForm.valid).toBeTruthy();
  });

  it('should accept only valid 24-hour HH:mm times', () => {
    const startTimeControl = component.eventForm.get('startTime');
    const endTimeControl = component.eventForm.get('endTime');

    startTimeControl?.setValue('08:00 AM');
    endTimeControl?.setValue('24:00');
    expect(startTimeControl?.valid).toBe(false);
    expect(endTimeControl?.valid).toBe(false);

    startTimeControl?.setValue('08:00');
    endTimeControl?.setValue('23:59');
    expect(startTimeControl?.valid).toBe(true);
    expect(endTimeControl?.valid).toBe(true);
  });

  it('should format event times without AM or PM suffixes', () => {
    expect(component.formatEventDate('2026-10-10T17:30:00')).toBe('10/10/2026 às 17:30');
  });

  it('should tint scheduled event cards with event color and agenda accent', () => {
    TestBed.inject(CalendarStateService).setCalendars([
      { id: 'community', summary: 'Comunidade', backgroundColor: '#f691b2' }
    ]);
    fixture.detectChanges();

    const eventCard = fixture.nativeElement.querySelector('.form-slots-list li') as HTMLElement;

    expect(eventCard.style.getPropertyValue('--calendar-color')).toBe('#f691b2');
    expect(eventCard.style.getPropertyValue('--event-color')).toBe('#b7c55c');
  });

  it('should offer event colors and include the selected color in the create request', () => {
    expect(component.eventColors).toHaveLength(11);
    expect(fixture.nativeElement.querySelectorAll('.event-color-options .event-color-swatch')).toHaveLength(12);

    const startDate = new Date(2026, 9, 10);
    component.selectedRange = new DateRange(startDate, startDate);
    component.eventForm.patchValue({
      summary: 'Evento colorido',
      dateRange: { start: startDate, end: startDate },
      colorId: '4'
    });

    component.onSubmit();

    expect(calendarService.addEvent).toHaveBeenCalledWith(expect.objectContaining({
      summary: 'Evento colorido',
      colorId: '4'
    }));
  });

  it('should show an icon with the confirm-scheduling action', () => {
    const submitButton = fixture.nativeElement.querySelector('.form-btn-submit') as HTMLElement;

    expect(submitButton.textContent).toContain('Confirmar Agendamento');
    expect(submitButton.querySelector('mat-icon')?.textContent?.trim()).toBe('event_available');
  });

  it('should confirm before deleting an event, then remove it and show success feedback', () => {
    expect(component.existingEvents().length).toBe(2);

    component.onDeleteEvent('1', 'Evento Outubro');

    expect(component.existingEvents().length).toBe(1);
    expect(component.existingEvents()[0].id).toBe('2');
    expect(dialogOpen).toHaveBeenCalledWith(
      expect.anything(),
      expect.objectContaining({
        data: expect.objectContaining({
          title: 'Excluir evento?',
          message: expect.stringContaining('Evento Outubro'),
          confirmLabel: 'Excluir evento'
        })
      })
    );
    expect(snackbarOpen).toHaveBeenCalledWith(
      'Evento excluído da agenda.',
      'Fechar',
      expect.objectContaining({
        politeness: 'polite',
        panelClass: ['app-snackbar-success']
      })
    );
  });

  it('should not delete an event when the confirmation dialog is cancelled', () => {
    dialogOpen.mockReturnValue({ afterClosed: () => of(false) });

    component.onDeleteEvent('1', 'Evento Outubro');

    expect(calendarService.deleteEvent).not.toHaveBeenCalled();
    expect(component.existingEvents()).toHaveLength(2);
  });

  it('should show actionable error feedback when event creation fails', () => {
    vi.spyOn(calendarService, 'addEvent').mockReturnValue(throwError(() => ({ status: 0 })));
    component.selectedRange = new DateRange(new Date(2026, 9, 10), new Date(2026, 9, 10));
    component.eventForm.patchValue({
      summary: 'Reunião',
      dateRange: { start: new Date(2026, 9, 10), end: new Date(2026, 9, 10) }
    });

    component.onSubmit();

    expect(snackbarOpen).toHaveBeenCalledWith(
      'Não foi possível conectar à API. Verifique sua conexão e tente novamente.',
      'Fechar',
      expect.objectContaining({
        politeness: 'assertive',
        panelClass: ['app-snackbar-error']
      })
    );
  });

  it('should offer retry and block scheduling if event availability cannot be loaded', () => {
    vi.spyOn(calendarService, 'getEvents').mockReturnValue(throwError(() => new Error('network error')));

    component.loadOccupiedSlots();
    fixture.detectChanges();

    expect(component.availabilityError()).toContain('Tente novamente');
    expect(fixture.nativeElement.querySelector('.form-btn-submit').disabled).toBe(true);
    const retryButton = fixture.nativeElement.querySelector('.availability-error-actions button') as HTMLButtonElement;
    expect(retryButton.getAttribute('aria-label')).toBe('Tentar novamente');
    expect(retryButton.querySelector('mat-icon')?.textContent.trim()).toBe('refresh');
    expect(fixture.nativeElement.querySelector('.availability-error-actions a[aria-label="Criar nova agenda"]')).toBeTruthy();
  });
});
