import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagesSliderComponent } from './images-slider/images-slider.component';
import { ImagesModalViewerComponent } from './images-modal-viewer/images-modal-viewer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    ImagesSliderComponent,
    ImagesModalViewerComponent,
    FontAwesomeModule,
  ],
  exports: [
    ImagesSliderComponent,
    ImagesModalViewerComponent,
    FontAwesomeModule
  ]
})
export class SharedModule { }
