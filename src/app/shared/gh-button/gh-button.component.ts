import { Component, Input } from '@angular/core';

@Component({
  selector: 'gh-button',
  templateUrl: './gh-button.component.html',
  styleUrl: './gh-button.component.scss',
  standalone: false,
})
export class GhButtonComponent {
  @Input({ required: true }) button: any;
}
