import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'tabs/home',
    pathMatch: 'full',
  },
  {
    path: 'tabs',
    loadComponent: () => import('./tabs/tabs.page').then((m) => m.TabsPage),
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('./pages/home/home.page').then((m) => m.HomePage),
      },
      {
        path: 'todo',
        loadComponent: () =>
          import('./pages/todo/todo.page').then((m) => m.TodoPage),
      },
      {
        path: 'weather',
        loadComponent: () =>
          import('./pages/weather/weather.page').then((m) => m.WeatherPage),
      },
      {
        path: 'notes',
        loadComponent: () =>
          import('./pages/notes/notes.page').then((m) => m.NotesPage),
      },
      {
        path: 'schedule',
        loadComponent: () =>
          import('./pages/schedule/schedule.page').then((m) => m.SchedulePage),
      },
      {
        path: '',
        redirectTo: '/tabs/home', // Rota padrão ao abrir as tabs
        pathMatch: 'full',
      },
    ],
  },
];
