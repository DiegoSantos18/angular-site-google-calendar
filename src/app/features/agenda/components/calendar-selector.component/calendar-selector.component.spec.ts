import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CalendarSelectorComponent } from './calendar-selector.component';
import { CalendarStateService } from '../../../../core/services/calendar-state/calendar-state.service';
import { signal } from '@angular/core';

class MockCalendarStateService {
  calendars = signal([
    { id: 'secondary_id', summary: 'Comunidade', backgroundColor: '#4986e7' }
  ]);
  selectedCalendarId = signal<string | null>('secondary_id');
  selectedCalendar = signal({
    id: 'secondary_id',
    summary: 'Comunidade',
    backgroundColor: '#4986e7'
  });
  setCalendarId(id: string | null | undefined) {
    if (id) {
      this.selectedCalendarId.set(id);
    }
  }
}

describe('CalendarSelectorComponent', () => {
  let component: CalendarSelectorComponent;
  let fixture: ComponentFixture<CalendarSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalendarSelectorComponent],
      providers: [
        { provide: CalendarStateService, useClass: MockCalendarStateService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CalendarSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show the available calendars from shared state', () => {
    expect(component.calendars().length).toBe(1);
    expect(component.selectedId()).toBe('secondary_id');
    expect(component.getCalendarColor('#4986e7')).toBe('#4986e7');
    expect(component.getCalendarTint('#4986e7')).toContain('#4986e7');
  });

  it('should apply each calendar color to its menu item accent', async () => {
    fixture.nativeElement.querySelector('button').click();
    fixture.detectChanges();
    await fixture.whenStable();

    const menuItem = document.querySelector('.mat-mdc-menu-item') as HTMLElement;
    expect(menuItem.style.getPropertyValue('--calendar-color')).toBe('#4986e7');
  });

});
