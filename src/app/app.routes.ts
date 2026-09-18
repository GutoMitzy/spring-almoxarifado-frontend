import { Routes } from '@angular/router';
import { LoginPageComponent } from './components/pages/login/login-page-component';
import { Home } from './components/pages/home/home';
import { Notification } from './components/pages/notification/notification'
import { Delivery } from './components/pages/delivery/delivery'
import { Setting } from './components/pages/setting/setting'
import { MainInterface } from './components/layout/main-interface/main-interface';
import { Company } from './components/pages/company/company';
import { RegisterItem } from './components/pages/register-item/register-item';

export const routes: Routes = [
    {path: "login", component: LoginPageComponent},
    {path: "home", component: MainInterface, children: [
        {path: '', component: Home},
        {path: 'register-item', component: RegisterItem},
        {path: "notifications", component: Notification},
        {path: "deliveries", component: Delivery},
        {path: "configurations", component: Setting},
        {path: "companies", component: Company},
    ]},
    
];
