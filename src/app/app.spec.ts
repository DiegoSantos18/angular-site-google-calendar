import { TestBed } from '@angular/core/testing';
import { App } from './app';
import { MatIconModule } from '@angular/material/icon';
import { provideRouter } from '@angular/router';
import { provideNativeDateAdapter } from '@angular/material/core';
import { CalendarService } from './core/services/calendar/calendar.service';
import { CalendarStateService } from './core/services/calendar-state/calendar-state.service';
import { of } from 'rxjs';

class MockCalendarService {
  getCalendars() {
    return of([]);
  }
}

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App, MatIconModule],
      providers: [
        provideRouter([]),
        provideNativeDateAdapter(),
        { provide: CalendarService, useClass: MockCalendarService }
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render the community title in header', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.site-header h1')?.textContent).toContain('Comunidade');
  });

  it('should render current year in footer', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const currentYear = new Date().getFullYear();
    expect(compiled.querySelector('.site-footer')?.textContent).toContain(currentYear.toString());
  });

  it('should use the selected calendar color for the header accent and keep GitHub white', () => {
    const fixture = TestBed.createComponent(App);
    const calendarState = TestBed.inject(CalendarStateService);
    calendarState.setCalendars([
      { id: 'community', summary: 'Comunidade', backgroundColor: '#f691b2' }
    ]);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const header = compiled.querySelector('.site-header') as HTMLElement;
    const githubLink = compiled.querySelector('.github-link') as HTMLElement;

    expect(header.style.getPropertyValue('--calendar-color')).toBe('#f691b2');
    expect(githubLink).toBeTruthy();
  });
});
