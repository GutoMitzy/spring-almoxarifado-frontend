import { Routes } from '@angular/router';
import { LoginPageComponent } from './components/login/login-page-component';
import { Home } from './components/home/home';
import { NotificationContent } from './components/notification/notification-content/notification-content'
import { DeliveryContent } from './components/entregas/delivery-content/delivery-content'

export const routes: Routes = [
    {path: "login", component: LoginPageComponent},
    {path: "home", component: Home},
    {path: "notifications", component: NotificationContent},
    {path: "deliveries", component: DeliveryContent},
];
