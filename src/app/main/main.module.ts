import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from '../shared/shared.module';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
  {
    path: '', // This is the root path for this module
    // component: YourFeatureComponent,
    children: [
      // { path: 'subroute1', component: Subroute1Component },
      // { path: 'subroute2', component: Subroute2Component } 
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    HomeComponent,
    HeaderComponent,
    CommonModule,
    SharedModule,
    FooterComponent,
    RouterModule.forChild(routes)],
  exports: [
    RouterModule,
    HeaderComponent,
    SharedModule,
    FooterComponent
  ]
})
export class MainModule { }
