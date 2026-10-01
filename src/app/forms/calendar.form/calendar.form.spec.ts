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

    vi.spyOn(calendarService, 'getEvents').mockReturnValue(of([]));

    fixture = TestBed.createComponent(CalendarForm);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
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
});
