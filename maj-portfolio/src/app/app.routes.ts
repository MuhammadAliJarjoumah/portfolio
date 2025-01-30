import { Routes } from '@angular/router';
import { HomeComponent } from './main/home/home.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
        title: 'Home page',
    },
    {
        path: '**',
        component: PageNotFoundComponent,//This should be replaced with page not found component
    }
];
