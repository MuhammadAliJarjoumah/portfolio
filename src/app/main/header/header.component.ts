import { CommonModule, isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, EventEmitter, HostListener, Inject, Output, PLATFORM_ID } from '@angular/core';
import { Theme } from '../../models/theme.model';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { SharedModule } from '../../shared/shared.module';

@Component({
  standalone: true,
  selector: 'app-header',
  imports: [SharedModule ,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements AfterViewInit {
  prevScrollPos: number = 0;
  isScrolledDown: boolean = false;
  isTopPosition: boolean = true;
  Theme = Theme;
  @Output() themeChanged: EventEmitter<Theme> = new EventEmitter<Theme>();

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.prevScrollPos = window.scrollY;
    }
  }

  @HostListener('window:scroll')
  onscroll() {
    if (isPlatformBrowser(this.platformId)) {
      const currentScrollPos = window.scrollY;
      if (this.prevScrollPos > currentScrollPos) {
        this.isScrolledDown = false;
      } else if (this.prevScrollPos < currentScrollPos && currentScrollPos > 150) {
        this.isScrolledDown = true;
      }
      this.prevScrollPos = currentScrollPos;
      if (currentScrollPos === 0) {
        this.isTopPosition = true;
      } else {
        this.isTopPosition = false;
      }
    }
  }

  toggleTheme() {

    // this.themeChanged.emit(Theme.DARK);
  }
}
