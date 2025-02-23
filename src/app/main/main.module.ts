import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from '../shared/shared.module';
import { FooterComponent } from './footer/footer.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SidenavComponent } from './sidenav/sidenav.component';

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
  declarations: [
    HomeComponent,
    ContactFormComponent,
    HeaderComponent,
    SidenavComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FooterComponent,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule,
    HeaderComponent,
    SharedModule,
    FooterComponent,
    ContactFormComponent,
    SidenavComponent
  ]
})
export class MainModule { }
