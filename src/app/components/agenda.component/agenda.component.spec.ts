import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgendaComponent } from './agenda.component';
import { CalendarService } from '../../services/calendar.service';
import { of } from 'rxjs';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { provideRouter } from '@angular/router';

class MockCalendarService {
  getEvents() {
    return of([
      {
        id: '1',
        summary: 'Reunião de Teste',
        description: 'Descrição de teste',
        start: { dateTime: '2026-10-01T10:00:00Z' },
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
        MatIconModule
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

  it('should load events successfully from the mock service', () => {
    expect(component.loading).toBeFalsy();
    expect(component.errorMessage).toBe('');
    expect(component.eventos.length).toBe(1);
    expect(component.eventos[0].summary).toBe('Reunião de Teste');
  });
});
