import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgendaComponent } from './agenda.component';
import { CalendarService } from '../../services/calendar.service';
import { of } from 'rxjs';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { provideRouter } from '@angular/router';

class MockCalendarService {
  getEvents() {
    return of([
      {
        id: '1',
        summary: 'Reunião de Teste',
        description: 'Descrição de teste longa para validar o truncamento nos cards',
        start: { dateTime: '2026-10-01T10:00:00Z' },
        end: { dateTime: '2026-10-01T11:00:00Z' },
        location: 'Sala 1'
      }
    ]);
  }
}

describe('AgendaComponent', () => {
  let component: AgendaComponent;
  let fixture: ComponentFixture<AgendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AgendaComponent,
        CommonModule,
        MatIconModule,
        MatButtonModule
      ],
      providers: [
        provideRouter([]),
        { provide: CalendarService, useClass: MockCalendarService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AgendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load events successfully, generate calendar template link and pagination', () => {
    expect(component.loading).toBeFalsy();
    expect(component.errorMessage).toBe('');
    expect(component.eventos.length).toBe(1);

    const link = component.getGoogleCalendarLink(component.paginatedEvents[0]);
    expect(link).toContain('action=TEMPLATE');
    expect(link).toContain('Reuni%C3%A3o%20de%20Teste');

    expect(component.totalPages).toBe(1);
  });
});
