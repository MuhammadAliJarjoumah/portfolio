import { inject, Injectable } from '@angular/core';
import { Theme } from '../models/theme.model';
import { DOCUMENT } from '@angular/common';


@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly document = inject(DOCUMENT);
  constructor() { }

  setTheme(theme: Theme) {
    switch (theme) {
      case Theme.DARK:
        this.document.documentElement.classList.add('dark-mode');
        break;
      case Theme.LIGHT:
        this.document.documentElement.classList.remove('dark-mode');//should be replaced with another class name and instead of remove it should be add('class-name')
        break;
      default:
        throw Error('Unknown theme');
    }
  }
}
