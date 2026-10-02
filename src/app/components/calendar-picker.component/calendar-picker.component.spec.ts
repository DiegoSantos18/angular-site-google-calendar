import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CalendarPickerComponent } from './calendar-picker.component';
import { DateRange } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';

describe('CalendarPickerComponent', () => {
  let component: CalendarPickerComponent;
  let fixture: ComponentFixture<CalendarPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalendarPickerComponent],
      providers: [provideNativeDateAdapter()]
    }).compileComponents();

    fixture = TestBed.createComponent(CalendarPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle showTimeSelection state', () => {
    expect(component.showTimeSelection()).toBe(false);
    component.toggleTimeSelection();
    expect(component.showTimeSelection()).toBe(true);
    component.toggleTimeSelection();
    expect(component.showTimeSelection()).toBe(false);
  });

  it('should emit rangeChange when selecting a start date', () => {
    const spy = vi.spyOn(component.rangeChange, 'emit');
    const testDate = new Date(2026, 8, 30);

    component.onSelectedChange(testDate);

    expect(spy).toHaveBeenCalled();
    const emittedRange = spy.mock.calls[0][0] as DateRange<Date>;
    expect(emittedRange.start).toEqual(testDate);
    expect(emittedRange.end).toBeNull();
  });

  it('should emit activeDateChange when active date changes', () => {
    const spy = vi.spyOn(component.activeDateChange, 'emit');
    const testDate = new Date(2026, 9, 1);

    component.onActiveDateChange(testDate);

    expect(spy).toHaveBeenCalledWith(testDate);
  });

  it('should emit startTimeChange when start time input changes', () => {
    const spy = vi.spyOn(component.startTimeChange, 'emit');
    const mockEvent = {
      target: { value: '10:30' }
    } as unknown as Event;

    component.onStartTimeChange(mockEvent);

    expect(spy).toHaveBeenCalledWith('10:30');
  });

  it('should emit endTimeChange when end time input changes', () => {
    const spy = vi.spyOn(component.endTimeChange, 'emit');
    const mockEvent = {
      target: { value: '11:30' }
    } as unknown as Event;

    component.onEndTimeChange(mockEvent);

    expect(spy).toHaveBeenCalledWith('11:30');
  });

  it('should return occupied-date CSS class if event exists on that date', () => {
    const targetDate = new Date(2026, 9, 1);
    component.existingEvents = [
      {
        id: '1',
        summary: 'Reunião',
        start: { dateTime: '2026-10-01T09:00:00' },
        end: { dateTime: '2026-10-01T10:00:00' },
        location: 'Sala 1'
      }
    ];

    const cssClass = component.dateClass(targetDate);
    expect(cssClass).toEqual('occupied-date');
  });
});
