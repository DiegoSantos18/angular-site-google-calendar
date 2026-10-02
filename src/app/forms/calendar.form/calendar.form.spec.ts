import { CalendarForm } from './calendar.form';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideRouter } from '@angular/router';
import { DateRange } from '@angular/material/datepicker';
import { of } from 'rxjs';

import { CalendarService } from '../../services/calendar.service';

describe('CalendarForm', () => {
  let component: CalendarForm;
  let fixture: ComponentFixture<CalendarForm>;
  let calendarService: CalendarService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalendarForm],
      providers: [
        CalendarService,
        provideRouter([]),
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    }).compileComponents();

    calendarService = TestBed.inject(CalendarService);

    vi.spyOn(calendarService, 'getEvents').mockReturnValue(of([
      {
        id: '1',
        summary: 'Evento Outubro',
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

    vi.spyOn(calendarService, 'deleteEvent').mockReturnValue(of({}));

    fixture = TestBed.createComponent(CalendarForm);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
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

  it('should remove event from existingEvents when deleteEvent is called and confirmed', () => {
    vi.spyOn(window, 'confirm').mockReturnValue(true);

    expect(component.existingEvents().length).toBe(2);

    component.deleteEvent('1');

    expect(component.existingEvents().length).toBe(1);
    expect(component.existingEvents()[0].id).toBe('2');
  });
});
