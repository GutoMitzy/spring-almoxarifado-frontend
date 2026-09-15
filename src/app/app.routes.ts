import { Routes } from '@angular/router';
import { Header } from './components/header/header';
import { Content } from './components/content/content';

export const routes: Routes = [
    {path: "header", component: Header},
    {path: "content", component: Content}
];
