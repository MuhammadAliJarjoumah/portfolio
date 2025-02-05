import { Component, HostListener, PLATFORM_ID, AfterViewInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './main/header/header.component';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ThemeService } from './services/theme.service';
import { Theme } from './models/theme.model';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  private readonly _ThemeService= inject(ThemeService);
  title = 'Portfolio Mohammad Ali';

  themeChanged(theme: Theme){
    this._ThemeService.setTheme(theme);
  }
}