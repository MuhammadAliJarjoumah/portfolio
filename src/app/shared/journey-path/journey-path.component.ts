import { Component, Input } from '@angular/core';
import { IJourneyPath } from '../models/journey-path.interface';

@Component({
  selector: 'journey-path',
  standalone: false,
  templateUrl: './journey-path.component.html',
  styleUrl: './journey-path.component.scss'
})
export class JourneyPathComponent {
  @Input({ required: true }) journeys: IJourneyPath[];
}
