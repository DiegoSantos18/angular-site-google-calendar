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
    const input = {
      value: '10:30',
      selectionStart: 5,
      setSelectionRange: vi.fn()
    };
    const mockEvent = {
      target: input
    } as unknown as Event;

    component.onStartTimeChange(mockEvent);

    expect(spy).toHaveBeenCalledWith('10:30');
  });

  it('should emit endTimeChange when end time input changes', () => {
    const spy = vi.spyOn(component.endTimeChange, 'emit');
    const input = {
      value: '11:30',
      selectionStart: 5,
      setSelectionRange: vi.fn()
    };
    const mockEvent = {
      target: input
    } as unknown as Event;

    component.onEndTimeChange(mockEvent);

    expect(spy).toHaveBeenCalledWith('11:30');
  });

  it('should normalize typed digits to 24-hour HH:mm format', () => {
    const spy = vi.spyOn(component.startTimeChange, 'emit');
    const input = {
      value: '1730',
      selectionStart: 4,
      setSelectionRange: vi.fn()
    };
    const event = { target: input } as unknown as Event;

    component.onStartTimeChange(event);

    expect(input.value).toBe('17:30');
    expect(spy).toHaveBeenCalledWith('17:30');
    expect(input.setSelectionRange).toHaveBeenCalledWith(5, 5);
  });

  it('should provide 24-hour and minute options and update the selected time parts', () => {
    const startSpy = vi.spyOn(component.startTimeChange, 'emit');
    const endSpy = vi.spyOn(component.endTimeChange, 'emit');

    expect(component.hours).toHaveLength(24);
    expect(component.hours[0]).toBe('00');
    expect(component.hours[23]).toBe('23');
    expect(component.minutes).toHaveLength(60);
    expect(component.minutes[59]).toBe('59');

    component.startTime = '08:15';
    component.endTime = '09:30';
    component.selectStartHour('17');
    component.selectEndMinute('45');

    expect(startSpy).toHaveBeenCalledWith('17:15');
    expect(endSpy).toHaveBeenCalledWith('09:45');
  });

  it('should use the event color for occupied date markers', () => {
    const targetDate = new Date(2026, 9, 1);
    component.existingEvents = [
      {
        id: '1',
        summary: 'Reunião',
        colorId: '4',
        start: { dateTime: '2026-10-01T09:00:00' },
        end: { dateTime: '2026-10-01T10:00:00' },
        location: 'Sala 1'
      }
    ];

    const cssClass = component.dateClass(targetDate);
    expect(cssClass).toEqual('occupied-date occupied-color-4');
  });

  it('should fall back to the agenda color when an occupied event has no colorId', () => {
    component.existingEvents = [{
      id: '1',
      summary: 'Reunião',
      start: { dateTime: '2026-10-01T09:00:00' },
      end: { dateTime: '2026-10-01T10:00:00' }
    }];

    expect(component.dateClass(new Date(2026, 9, 1))).toBe('occupied-date');
  });
});
