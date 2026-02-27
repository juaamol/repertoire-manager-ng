import { Routes } from '@angular/router';


export const routes: Routes = [
  { 
    path: 'login', 
    loadComponent: () => import('./pages/login/login').then(m => m.Login) 
  },
  { 
    path: 'repertoire-shelf', 
    loadComponent: () => import('./pages/repertoire-shelf/repertoire-shelf').then(m => m.RepertoireShelf) 
  },
  { 
    path: 'work-search', 
    loadComponent: () => import('./pages/work-search/work-search').then(m => m.WorkSearch) 
  },
  
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];