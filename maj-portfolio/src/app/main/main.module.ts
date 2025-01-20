import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

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
    CommonModule,
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainModule { }
