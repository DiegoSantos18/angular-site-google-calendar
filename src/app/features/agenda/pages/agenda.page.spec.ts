import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgendaPage } from './agenda.page';
import { CalendarService } from '../../../core/services/calendar/calendar.service';
import { of } from 'rxjs';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { CommonModule } from '@angular/common';
import { provideRouter } from '@angular/router';
import { CalendarStateService } from '../../../core/services/calendar-state/calendar-state.service';

class MockCalendarService {
  watchEvents(skip: number, take: number) {
    return of([
      {
        id: '1',
        summary: 'Reunião de Teste',
        description: 'Descrição de teste longa para validar o truncamento nos cards',
        colorId: '4',
        start: { dateTime: '2026-10-01T10:00:00Z' },
        end: { dateTime: '2026-10-01T11:00:00Z' },
        location: 'Sala 1'
      }
    ]);
  }

  getCalendars() {
    return of([
      { id: 'primary_id', summary: 'Principal', primary: true },
      { id: 'secondary_id', summary: 'Comunidade', primary: false }
    ]);
  }
}

describe('AgendaPage', () => {
  let component: AgendaPage;
  let fixture: ComponentFixture<AgendaPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AgendaPage,
        CommonModule,
        MatIconModule,
        MatButtonModule,
        MatMenuModule
      ],
      providers: [
        provideRouter([]),
        { provide: CalendarService, useClass: MockCalendarService }
      ]
    }).compileComponents();

    TestBed.inject(CalendarStateService).setCalendars([
      { id: 'secondary_id', summary: 'Comunidade', primary: false }
    ]);
    fixture = TestBed.createComponent(AgendaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load events successfully using skip and take parameters', () => {
    expect(component.loading).toBeFalsy();
    expect(component.errorMessage).toBe('');
    expect(component.eventos.length).toBe(1);

    const link = component.getGoogleCalendarLink(component.paginatedEvents[0]);
    expect(link).toContain('action=TEMPLATE');
    expect(link).toContain('Reuni%C3%A3o%20de%20Teste');
  });

  it('should expose event and calendar colors for the card background and accent', () => {
    const card = fixture.nativeElement.querySelector('.event-card') as HTMLElement;

    expect(card.style.getPropertyValue('--event-color')).toBe('#ff887c');
    expect(card.style.getPropertyValue('--calendar-color')).toBe('var(--mat-sys-primary)');
    const event = {
      id: 'colored',
      colorId: '4',
      start: { dateTime: '2026-10-01T10:00:00Z' }
    };

    expect(component.getCalendarColor()).toBe('var(--mat-sys-primary)');
    expect(component.getEventColor(event)).toBe('#ff887c');
    expect(component.getEventColor({ ...event, eventColor: '#b7c55c' })).toBe('#b7c55c');
    expect(component.getEventColor({ ...event, colorId: undefined })).toBeNull();
    expect(component.getEventColor({ ...event, eventColor: 'invalid-color', colorId: undefined })).toBeNull();
  });

  it('should show a create-calendar action instead of an error when no calendars exist', async () => {
    const calendarService = TestBed.inject(CalendarService);
    const watchEvents = vi.spyOn(calendarService, 'watchEvents');
    watchEvents.mockClear();

    TestBed.inject(CalendarStateService).setCalendars([]);
    await fixture.whenStable();
    fixture.detectChanges();

    expect(component.errorMessage).toBe('');
    expect(component.loading).toBe(false);
    expect(watchEvents).not.toHaveBeenCalled();
    expect(fixture.nativeElement.textContent).toContain('Nenhuma agenda cadastrada.');
    expect(fixture.nativeElement.querySelector('button[routerLink="/gerenciar-agenda"]')).toBeTruthy();
  });
});
