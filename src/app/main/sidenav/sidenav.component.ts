import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  standalone: false,
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {
  @Input({ required: true }) menuOpened: boolean;
  @Output() closeMenu: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() blendMode: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private _Router: Router) {

  }
  onClickLink(route: string) {
    this._Router.navigate([route]);
    this.onCloseMenu();
  }

  checkScrollingAbility(sectionId: string) {
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
    this.onCloseMenu();
  }

  onCloseMenu() {
    this.closeMenu.emit(true);
  }

  onBlendMode($event: boolean) {
    if ($event) {
      this.blendMode.emit(true);
    } else {
      this.blendMode.emit(false);
    }
  }
}
