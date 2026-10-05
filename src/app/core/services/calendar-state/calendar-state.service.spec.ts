import { TestBed } from '@angular/core/testing';
import { CalendarStateService } from './calendar-state.service';

describe('CalendarStateService', () => {
  let service: CalendarStateService;
  const STORAGE_KEY = 'selected_calendar_id';

  beforeEach(() => {
    localStorage.removeItem(STORAGE_KEY);

    TestBed.configureTestingModule({});
    service = TestBed.inject(CalendarStateService);
  });

  afterEach(() => {
    localStorage.removeItem(STORAGE_KEY);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should wait for the available calendar list before selecting a default', () => {
    expect(service.selectedCalendarId()).toBeNull();
    expect(service.initialized()).toBe(false);
  });

  it('should select the first non-primary calendar when no calendar is saved', () => {
    service.setCalendars([
      { id: 'primary', summary: 'Principal', primary: true },
      { id: 'community', summary: 'Comunidade', backgroundColor: '#4986e7' },
      { id: 'private', summary: 'Pessoal' }
    ]);

    expect(service.calendars().map(calendar => calendar.id)).toEqual(['community', 'private']);
    expect(service.selectedCalendarId()).toBe('community');
    expect(service.selectedCalendar()?.summary).toBe('Comunidade');
    expect(localStorage.getItem(STORAGE_KEY)).toBe('community');
  });

  it('should update the signal and save to localStorage when setCalendarId is called', () => {
    const newCalendarId = 'custom-calendar-id-123@group.calendar.google.com';

    service.setCalendarId(newCalendarId);

    expect(service.selectedCalendarId()).toBe(newCalendarId);
    expect(localStorage.getItem(STORAGE_KEY)).toBe(newCalendarId);
  });

  it('should load calendar id from localStorage during initialization if present', () => {
    const cachedCalendarId = 'cached-calendar-id-999@group.calendar.google.com';
    localStorage.setItem(STORAGE_KEY, cachedCalendarId);

    const freshService = TestBed.runInInjectionContext(() => new CalendarStateService());

    expect(freshService.selectedCalendarId()).toBe(cachedCalendarId);
  });

  it('should replace a stale saved calendar with the first available one', () => {
    localStorage.setItem(STORAGE_KEY, 'primary');
    const freshService = TestBed.runInInjectionContext(() => new CalendarStateService());

    freshService.setCalendars([{ id: 'community', summary: 'Comunidade' }]);

    expect(freshService.selectedCalendarId()).toBe('community');
    expect(localStorage.getItem(STORAGE_KEY)).toBe('community');
  });

  it('should clear the saved selection when there are no non-primary calendars', () => {
    service.setCalendars([{ id: 'primary', summary: 'Principal', primary: true }]);

    expect(service.selectedCalendarId()).toBeNull();
    expect(service.calendars()).toEqual([]);
    expect(localStorage.getItem(STORAGE_KEY)).toBeNull();
  });
});
