import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import {
  provideHttpClientTesting,
  HttpTestingController
} from '@angular/common/http/testing';

import { CalendarService } from './calendar.service';
import { CalendarStateService } from '../calendar-state/calendar-state.service';
import { environment } from '../../../../environments/environment';
import {
  CalendarEvent,
  CreateCalendarEvent
} from '../../models/calendar-event/calendar-event.model';
import { CreateCalendar } from '../../models/calendar/calendar.model';

describe('CalendarService', () => {
  let service: CalendarService;
  let httpMock: HttpTestingController;
  let stateService: CalendarStateService;

  const mockCalendarId = 'test-calendar-id@group.calendar.google.com';

  beforeEach(() => {
    environment.apiPooling = 0;

    TestBed.configureTestingModule({
      providers: [
        CalendarService,
        CalendarStateService,
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });

    service = TestBed.inject(CalendarService);
    httpMock = TestBed.inject(HttpTestingController);
    stateService = TestBed.inject(CalendarStateService);

    stateService.setCalendars([{ id: mockCalendarId, summary: 'Teste' }]);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch calendars without sending a selected calendar header', () => {
    let result: unknown;

    service.getCalendars().subscribe(calendars => {
      result = calendars;
    });

    const req = httpMock.expectOne(request => request.url.includes('action=get-calendars'));
    expect(req.request.headers.has('x-google-calendar-id')).toBe(false);
    req.flush([{ id: mockCalendarId, summary: 'Teste' }]);

    expect(result).toEqual([{ id: mockCalendarId, summary: 'Teste' }]);
  });

  it('should create a calendar without requiring an existing calendar selection', () => {
    const calendarData = {
      summary: 'Minha agenda',
      description: 'Agenda pessoal',
      timeZone: 'America/Sao_Paulo'
    } satisfies CreateCalendar;
    const createdCalendar = { id: 'new-calendar-id', summary: 'Minha agenda' };
    let result: unknown;

    service.createCalendar(calendarData).subscribe(calendar => {
      result = calendar;
    });

    const req = httpMock.expectOne(request => request.url.includes('action=create-calendar'));
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(calendarData);
    expect(req.request.headers.has('x-google-calendar-id')).toBe(false);
    req.flush(createdCalendar);

    expect(result).toEqual(createdCalendar);
  });

  it('should delete a calendar using its ID without requiring an event ID', () => {
    const calendarId = 'calendar-to-delete@group.calendar.google.com';
    const response = { message: 'Agenda e todos os seus eventos foram excluídos.' };
    let result: unknown;

    service.deleteCalendar(calendarId).subscribe(value => {
      result = value;
    });

    const req = httpMock.expectOne(request => request.url.includes('action=delete-calendar'));
    expect(req.request.method).toBe('DELETE');
    expect(req.request.headers.get('x-google-calendar-id')).toBe(calendarId);
    expect(req.request.url).not.toContain('id=');
    req.flush(response);

    expect(result).toEqual(response);
  });

  it('should reject attempts to delete the primary or an unspecified calendar', () => {
    service.deleteCalendar('primary').subscribe({ error: () => undefined });
    service.deleteCalendar(null).subscribe({ error: () => undefined });

    httpMock.expectNone(request => request.url.includes('action=delete-calendar'));
  });

  it('should fetch calendar events successfully with skip, take and header', () => {
    const dummyEvents: CalendarEvent[] = [
      {
        id: '1',
        summary: 'Reunião de Equipe',
        start: { dateTime: '2026-10-01T10:00:00Z' },
        end: { dateTime: '2026-10-01T11:00:00Z' },
        location: 'Sala 1'
      }
    ];

    let result: CalendarEvent[] | undefined;

    service.getEvents(0, 30).subscribe(events => {
      result = events;
    });

    const req = httpMock.expectOne(
      request => request.url.includes('/calendar') && request.url.includes('skip=0') && request.url.includes('take=30')
    );

    expect(req.request.method).toBe('GET');
    expect(req.request.headers.get('x-google-calendar-id')).toBe(mockCalendarId);
    req.flush(dummyEvents);

    expect(result).toEqual(dummyEvents);
  });

  it('should create a new event successfully via POST with header', () => {
    const newEventData: CreateCalendarEvent = {
      summary: 'Novo Evento',
      description: 'Discussão de projeto',
      startDateTime: '2026-10-02T14:00:00Z',
      endDateTime: '2026-10-02T15:00:00Z',
      location: 'Sala 1'
    };

    const mockResponse = {
      message: 'Evento criado com sucesso!',
      event: {
        id: '2',
        status: 'confirmed',
        summary: 'Novo Evento',
        start: { dateTime: '2026-10-02T14:00:00Z' },
        end: { dateTime: '2026-10-02T15:00:00Z' }
      }
    };

    let result: { message: string; event: CalendarEvent } | undefined;

    service.addEvent(newEventData).subscribe(response => {
      result = response;
    });

    const req = httpMock.expectOne(request => request.url.includes('/calendar'));

    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(newEventData);
    expect(req.request.headers.get('x-google-calendar-id')).toBe(mockCalendarId);

    req.flush(mockResponse);
    expect(result).toEqual(mockResponse);
  });

  it('should delete an event successfully via DELETE with header', () => {
    const eventId = '2';
    const mockResponse = { message: 'Evento deletado com sucesso!' };

    let result: { message: string } | undefined;

    service.deleteEvent(eventId).subscribe(response => {
      result = response;
    });

    const req = httpMock.expectOne(
      request => request.url.includes('/calendar') && request.method === 'DELETE'
    );

    expect(req.request.method).toBe('DELETE');
    expect(req.request.headers.get('x-google-calendar-id')).toBe(mockCalendarId);

    req.flush(mockResponse);
    expect(result).toEqual(mockResponse);
  });
});
