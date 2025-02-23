import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { MainModule } from './main/main.module';
import { Theme } from './models/theme.model';
import { ThemeService } from './services/theme.service';


@Component({
  selector: 'app-root',
  imports: [MainModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  private readonly _ThemeService = inject(ThemeService);
  title = 'Portfolio Mohammad Ali';
  isBigHeader: boolean;
  menuOpened: boolean = false;
  @ViewChild('sidenav') sidenav!: MatSidenav;
  @ViewChild('sidenav', { read: ElementRef }) sidenavElement!: ElementRef;

  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas, far, fab);
  }

  themeChanged(theme: Theme) {
    this._ThemeService.setTheme(theme);
  }

  menuToggled($event: boolean) {
    console.log('toggleeeee' , $event)
    this.menuOpened = $event;
    if (!this.menuOpened)
      document.body.style.overflowY = 'visible';
    else
      document.body.style.overflowY = 'hidden';

  }
}