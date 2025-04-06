import { Component } from '@angular/core';
import { ImagePlaceholderDirective } from '../directives/image-place-holder.directive';

@Component({
  selector: 'app-page-not-found',
  imports: [ImagePlaceholderDirective],
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.scss'
})
export class PageNotFoundComponent {
}
