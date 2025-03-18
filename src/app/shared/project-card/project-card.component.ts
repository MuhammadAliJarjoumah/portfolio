import { Component, Input } from '@angular/core';
export interface IProject {
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  link: string;
  tags: string[];
}
@Component({
  selector: 'project-card',
  standalone: false,
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent {
  @Input({ required: true }) project: IProject;

  onClickLink(url: string) {
    window.open(url, '_blank');
  }
}