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
import { ProjectCardComponent } from './project-card/project-card.component';
import { SkillDetailsComponent } from './skill-details/skill-details.component';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { ImagePlaceholderDirective } from './directives/image-place-holder.directive';
import { EscapeListenerDirective } from './directives/escape-listener.directive';
import { MajButtonDirective } from './maj-button.directive';
import { GhButtonComponent } from './gh-button/gh-button.component';
@NgModule({
  declarations: [
    SkillDetailsComponent,
    ProjectCardComponent,
    GhButtonComponent
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
    MatToolbarModule,
    MatCardModule,
    MatChipsModule,
    ImagePlaceholderDirective,
    EscapeListenerDirective,
    MajButtonDirective
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
    MatToolbarModule,
    SkillDetailsComponent,
    ProjectCardComponent,
    MatCardModule,
    MatChipsModule,
    EscapeListenerDirective,
    MajButtonDirective,
    GhButtonComponent,
    ImagePlaceholderDirective
  ]
})
export class SharedModule { }
