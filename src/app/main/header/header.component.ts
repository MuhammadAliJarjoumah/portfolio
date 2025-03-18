import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, EventEmitter, HostListener, inject, Inject, Input, OnDestroy, OnInit, Output, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Theme } from '../../models/theme.model';
import { PrimaryColors } from '../../shared/primary-colors';

@Component({
  standalone: false,
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements AfterViewInit, OnInit, OnDestroy {
  prevScrollPos: number = 0;
  isScrolledDown: boolean = false;
  isTopPosition: boolean = true;
  disableHideHeader: boolean = false;
  @Output() onTopPosition: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() blendMode: EventEmitter<boolean> = new EventEmitter<boolean>();
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
  private breakpointObserver = inject(BreakpointObserver);

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

  ngOnInit() {
      this.onscroll();
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.prevScrollPos = window.scrollY;
    }
  }

  ngOnDestroy() {
    this.destroyed.next();
    this.destroyed.complete();
  }

  @HostListener('window:scroll')
  onscroll() {
    if (isPlatformBrowser(this.platformId) && !this.isMenuOpened) {
      this.disableHideHeader = false;
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
    if (this.isMenuOpened) {
      this.toggleMenu();
    }
    this._Router.navigate(['/']);
  }

  onBlendMode($event: boolean) {
    if ($event) {
      this.blendMode.emit(true);
    } else {
      this.blendMode.emit(false);
    }
  }
}
