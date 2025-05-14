import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'gh-button',
  templateUrl: './gh-button.component.html',
  styleUrl: './gh-button.component.scss',
  standalone: false,
})
export class GhButtonComponent {
  @Input({ required: true }) button: any;

  constructor(private _Router: Router) {
  }


  checkScrollingAbility(sectionPageRoute: string, sectionId: string) {
    if (this._Router.url === '/') {
      this.scrollToSection(sectionId);
    } else {
      this._Router.navigate(['/']).then(() => {
        setTimeout(() => {
          this.scrollToSection(sectionId);
        }, 150);
      });
    }
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
