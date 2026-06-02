import { Routes } from '@angular/router';

import { routeAuthGuard } from './core/auth/route-auth.guard';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('./features/auth/login/login.page').then((module) => module.LoginPage),
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./features/auth/register/register.page').then((module) => module.RegisterPage),
  },
  {
    path: 'app',
    canActivate: [routeAuthGuard],
    loadComponent: () =>
      import('./features/protected-home/protected-home.page').then(
        (module) => module.ProtectedHomePage,
      ),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'app',
  },
  {
    path: '**',
    redirectTo: 'app',
  },
];
