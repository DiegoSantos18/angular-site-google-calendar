import { Routes } from '@angular/router';
import { AgendaPage } from './features/agenda/pages/agenda.page';

export const routes: Routes = [
  { path: '', component: AgendaPage, data: { title: '' } },
  {
    path: 'gerenciar-agenda',
    loadComponent: () => import('./features/gerenciar-agenda-evento/pages/gerenciar-agenda-evento.page')
      .then(module => module.GerenciarAgendaEventoPage),
    data: { title: 'Gerenciar Agenda' }
  },
  {
    path: '**',
    redirectTo: '',
  }
];
