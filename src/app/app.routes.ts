import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {
        path: '',
        title: 'Home',
        loadComponent: () => import('./home/home.component').then(c => c.HomeComponent)
    },
    {
        path: 'login',
        title: 'Connexion',
        loadComponent: () => import('./login/login.component').then(c => c.LoginComponent)
    }
];
