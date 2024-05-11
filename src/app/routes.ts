import { Routes } from '@angular/router';
import { DashboardEstudianteComponent } from './core/dashboard-estudiante/dashboard-estudiante.component';


export const routes: Routes = [
  {
    path: 'auth',
    loadComponent: () => import('./auth/auth.component'),
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      },
      {
        path: 'login',
        loadComponent: () => import('./auth/login/login.component')
      },
    ]
  },
  {
    path: 'dashboard-estudiante',
    component: DashboardEstudianteComponent,
    children: [
      {
        path: 'home',
        loadComponent: () => import('./core/dashboard-estudiante/home/home.component')
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'cita',
        children :[
          {
            path: 'creacion-cita',
            loadComponent: () => import('./core/dashboard-estudiante/cita/creacion-cita/creacion-cita.component')
          },
          {
            path: 'lista-cita',
            loadComponent: () => import('./core/dashboard-estudiante/cita/lista-cita/lista-cita.component')
          },
        ]
        //loadComponent: () => import('./core/dashboard-estudiante/cita/cita.component')
      },
    ]
  },
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  }
];
