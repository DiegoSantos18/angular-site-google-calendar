import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import {
  provideHttpClientTesting,
  HttpTestingController
} from '@angular/common/http/testing';

import { CalendarService } from './calendar.service';
import { environment } from '../../environments/environment';
import {
  CalendarEvent,
  CreateCalendarEvent
} from '../models/calendar.model';

describe('CalendarService', () => {
  let service: CalendarService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    // Usar 0 para desligar, senão teste nunca termina
    environment.apiPooling = 0;

    TestBed.configureTestingModule({
      providers: [
        CalendarService,
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });

    service = TestBed.inject(CalendarService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch calendar events successfully', () => {
    const dummyEvents: CalendarEvent[] = [
      {
        id: '1',
        summary: 'Reunião de Equipe',
        start: {
          dateTime: '2026-10-01T10:00:00Z'
        },
        end: {
          dateTime: '2026-10-01T11:00:00Z'
        },
        location: 'Sala 1'
      }
    ];

    let result: CalendarEvent[] | undefined;

    service.getEvents().subscribe(events => {
      result = events;
    });

    const req = httpMock.expectOne(
      request => request.url.includes('/calendar')
    );

    expect(req.request.method).toBe('GET');

    req.flush(dummyEvents);

    expect(result).toEqual(dummyEvents);
  });

  it('should create a new event successfully via POST', () => {
    const newEventData: CreateCalendarEvent = {
      summary: 'Novo Evento',
      description: 'Discussão de projeto',
      startDateTime: '2026-10-02T14:00:00Z',
      endDateTime: '2026-10-02T15:00:00Z',
      location: 'Sala 1'
    };

    const mockResponse: CalendarEvent = {
      id: '2',
      status: 'confirmed',
      summary: 'Novo Evento',
      description: 'Discussão de projeto',
      location: 'Sala 1',
      start: {
        dateTime: '2026-10-02T14:00:00Z'
      },
      end: {
        dateTime: '2026-10-02T15:00:00Z'
      },
      htmlLink: 'https://calendar.google.com/calendar/event'
    };

    let result: CalendarEvent | undefined;

    service.addEvent(newEventData).subscribe(response => {
      result = response;
    });

    const req = httpMock.expectOne(
      request => request.url.includes('/calendar')
    );

    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(newEventData);

    req.flush(mockResponse);

    expect(result).toEqual(mockResponse);
  });
});
