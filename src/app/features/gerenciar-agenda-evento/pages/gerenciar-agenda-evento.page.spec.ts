import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { provideRouter, RouterLink } from '@angular/router';
import { provideNativeDateAdapter } from '@angular/material/core';
import { GerenciarAgendaEventoPage } from './gerenciar-agenda-evento.page';

describe('GerenciarAgendaEventoPage', () => {
  let component: GerenciarAgendaEventoPage;
  let fixture: ComponentFixture<GerenciarAgendaEventoPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GerenciarAgendaEventoPage],
      providers: [
        provideRouter([]),
        provideNativeDateAdapter()
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(GerenciarAgendaEventoPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(GerenciarAgendaEventoPage);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should use a router link to return to the agenda', () => {
    fixture.detectChanges();
    const backButton = fixture.debugElement.query(By.css('.btn-close'));

    expect(backButton.injector.get(RouterLink)).toBeTruthy();
  });

  it('should keep a stable iframe URL between change-detection reads', () => {
    const iframeUrl = component.iframeSRC();

    fixture.detectChanges();

    expect(component.iframeSRC()).toBe(iframeUrl);
  });

});
