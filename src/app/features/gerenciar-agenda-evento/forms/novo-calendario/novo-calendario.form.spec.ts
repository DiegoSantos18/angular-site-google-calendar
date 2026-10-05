import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NovoCalendarioForm } from './novo-calendario.form';
import { CreateCalendar } from '../../../../core/models/calendar/calendar.model';

describe('NovoCalendarioForm', () => {
  let component: NovoCalendarioForm;
  let fixture: ComponentFixture<NovoCalendarioForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NovoCalendarioForm]
    }).compileComponents();

    fixture = TestBed.createComponent(NovoCalendarioForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create and keep submission disabled while the name is empty', () => {
    expect(component).toBeTruthy();
    expect(component.calendarForm.invalid).toBe(true);
    expect(fixture.nativeElement.querySelector('button[type="submit"]').disabled).toBe(true);
  });

  it('should emit trimmed calendar details and the configured time zone', () => {
    const submitSpy = vi.fn();
    component.submitCalendar.subscribe(submitSpy);
    component.calendarForm.setValue({
      summary: '  Minha agenda  ',
      description: '  Compromissos pessoais  ',
      backgroundColor: '#f691b2'
    });

    component.submit();

    expect(submitSpy).toHaveBeenCalledWith({
      summary: 'Minha agenda',
      description: 'Compromissos pessoais',
      timeZone: 'America/Sao_Paulo',
      backgroundColor: '#f691b2'
    } satisfies CreateCalendar);
  });

  it('should not emit a whitespace-only calendar name', () => {
    const submitSpy = vi.fn();
    component.submitCalendar.subscribe(submitSpy);
    component.calendarForm.controls.summary.setValue('   ');

    component.submit();

    expect(submitSpy).not.toHaveBeenCalled();
    expect(component.calendarForm.controls.summary.hasError('required')).toBe(true);
  });

  it('should allow public calendar creation without authentication', () => {
    const submitSpy = vi.fn();
    component.submitCalendar.subscribe(submitSpy);
    component.calendarForm.controls.summary.setValue('Minha agenda');

    component.submit();

    expect(submitSpy).toHaveBeenCalledWith({
      summary: 'Minha agenda',
      description: undefined,
      timeZone: 'America/Sao_Paulo',
      backgroundColor: '#4986e7'
    } satisfies CreateCalendar);
  });

  it('should offer the complete Google calendar color palette', () => {
    expect(component.calendarColors).toHaveLength(24);
    expect(fixture.nativeElement.querySelectorAll('.calendar-color-options .color-swatch')).toHaveLength(24);
  });
});
