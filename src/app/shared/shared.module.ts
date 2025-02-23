import { CommonModule, NgClass } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ImagesModalViewerComponent } from './images-modal-viewer/images-modal-viewer.component';
import { ImagesSliderComponent } from './images-slider/images-slider.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FontAwesomeIconsModule } from './font-awesome-icons/font-awesome-icons.module';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    ImagesSliderComponent,
    ImagesModalViewerComponent,
    PageNotFoundComponent,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    NgClass,
    FontAwesomeIconsModule,
    MatToolbarModule
  ],
  exports: [
    ImagesSliderComponent,
    ImagesModalViewerComponent,
    PageNotFoundComponent,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    NgClass,
    FontAwesomeIconsModule,
    MatToolbarModule
  ]
})
export class SharedModule { }
