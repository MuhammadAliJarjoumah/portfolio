import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, EventEmitter, HostListener, inject, Inject, Input, OnDestroy, Output, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Theme } from '../../models/theme.model';
import { PrimaryColors } from '../../shared/primary-colors';

@Component({
  standalone: false,
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements AfterViewInit, OnDestroy {
  prevScrollPos: number = 0;
  isScrolledDown: boolean = false;
  isTopPosition: boolean = true;
  @Output() onTopPosition: EventEmitter<boolean> = new EventEmitter<boolean>();
  primaryColors = PrimaryColors;
  Theme = Theme;
  @Input() isMenuOpened: boolean = false;
  currentScreenSize: string;
  destroyed = new Subject<void>();
  displayNameMap = new Map([
    [Breakpoints.XSmall, 'XSmall'],
    [Breakpoints.Small, 'Small'],
    [Breakpoints.Medium, 'Medium'],
    [Breakpoints.Large, 'Large'],
    [Breakpoints.XLarge, 'XLarge'],
  ]);
  @Input() isBigHeader: boolean;
  @Output() themeChanged: EventEmitter<Theme> = new EventEmitter<Theme>();
  @Output() menuToggled: EventEmitter<boolean> = new EventEmitter<boolean>();
  private breakpointObserver = inject(BreakpointObserver); // Inject BreakpointObserver

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private _Router: Router) {
    inject(BreakpointObserver)
      .observe(['min-width: 768px'
      ])
      .subscribe(result => {
        if (result.matches) {
          console.log('result', result);
        }
      });

  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.prevScrollPos = window.scrollY;
    }
    // this.onTopPosition.emit(this.isTopPosition);
  }

  ngOnDestroy() {
    this.destroyed.next();
    this.destroyed.complete();
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
      this.onTopPosition.emit(this.isTopPosition);
    }
  }

  toggleTheme() {

    // this.themeChanged.emit(Theme.DARK);
  }

  toggleMenu() {
    this.isMenuOpened = !this.isMenuOpened;
    this.menuToggled.emit(this.isMenuOpened);
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  onClickHome() {
    this._Router.navigate(['/']);
  }
}
