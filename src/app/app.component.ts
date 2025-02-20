import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainModule } from './main/main.module';
import { Theme } from './models/theme.model';
import { ThemeService } from './services/theme.service';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-root',
  imports: [MainModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  private readonly _ThemeService = inject(ThemeService);
  title = 'Portfolio Mohammad Ali';

  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas, far, fab);

  }
  themeChanged(theme: Theme) {
    this._ThemeService.setTheme(theme);
  }
}