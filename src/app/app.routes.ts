import { Routes } from '@angular/router';
import { LoginPageComponent } from './components/login/login-page-component';
import { Home } from './components/home/home';

export const routes: Routes = [
    {path: "login", component: LoginPageComponent},
    {path: "home", component: Home},
];
