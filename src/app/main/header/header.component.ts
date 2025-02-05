import { CommonModule, isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements AfterViewInit {
prevScrollPos: number = 0;
  isScrolledDown: boolean = false;
  isTopPosition: boolean = true;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

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
      }else{
        this.isTopPosition = false;
      }
    }
  }
}
