import { Component, Input } from '@angular/core';

@Component({
  selector: 'skill-details',
  standalone: false,
  templateUrl: './skill-details.component.html',
  styleUrl: './skill-details.component.scss'
})
export class SkillDetailsComponent {
  @Input({ required: true }) skill: any;
}
