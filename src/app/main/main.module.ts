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
import { FontAwesomeIconsModule } from '../shared/font-awesome-icons/font-awesome-icons.module';
import { AboutMeComponent } from './about-me/about-me.component';

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
    FooterComponent,
    SidenavComponent,
    AboutMeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    FontAwesomeIconsModule

  ],
  exports: [
    RouterModule,
    HeaderComponent,
    SharedModule,
    FooterComponent,
    ContactFormComponent,
    SidenavComponent,
    AboutMeComponent
  ]
})
export class MainModule { }
