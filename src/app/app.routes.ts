import { Routes } from '@angular/router';
import { AgendaComponent } from './components/agenda.component/agenda.component';
import { CalendarForm } from './forms/calendar.form/calendar.form';

export const routes: Routes = [
  { path: '', component: AgendaComponent, data: { title: '' } },
  { path: 'novo-evento', component: CalendarForm, data: { title: 'Novo Evento' } }
];

