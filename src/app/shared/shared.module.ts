import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagesSliderComponent } from './images-slider/images-slider.component';
import { ImagesModalViewerComponent } from './images-modal-viewer/images-modal-viewer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    ImagesSliderComponent,
    ImagesModalViewerComponent,
    FontAwesomeModule,
    PageNotFoundComponent,
    MatIconModule
  ],
  exports: [
    ImagesSliderComponent,
    ImagesModalViewerComponent,
    FontAwesomeModule,
    PageNotFoundComponent,
    MatIconModule
  ]
})
export class SharedModule { }
