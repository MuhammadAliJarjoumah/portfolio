import { Component, Input } from '@angular/core';
import { IImageLayout } from '../models/image-layout.interface';

@Component({
  standalone: false,
  selector: 'image-layout-one',
  templateUrl: './image-layout-one.component.html',
  styleUrl: './image-layout-one.component.scss'
})
export class ImageLayoutOneComponent {
  @Input({ required: true }) layoutsData: IImageLayout[];
}
