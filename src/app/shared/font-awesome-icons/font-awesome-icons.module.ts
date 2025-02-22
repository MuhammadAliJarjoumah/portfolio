import { NgModule } from '@angular/core';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

@NgModule({
  imports: [
    FontAwesomeModule,
  ],
  exports: [
    FontAwesomeModule,
  ]
})
export class FontAwesomeIconsModule {
  constructor(library: FaIconLibrary) { 
    library.addIconPacks(fas, far, fab);
  }
}