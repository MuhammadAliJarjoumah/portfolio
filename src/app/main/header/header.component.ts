import { CommonModule, isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, EventEmitter, HostListener, inject, Inject, Input, OnDestroy, Output, PLATFORM_ID } from '@angular/core';
import { Theme } from '../../models/theme.model';
import { SharedModule } from '../../shared/shared.module';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Router } from '@angular/router';

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
      .observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Large,
        Breakpoints.XLarge,
      ])
      .pipe(takeUntil(this.destroyed))
      .subscribe(result => {
        for (const query of Object.keys(result.breakpoints)) {
          if (result.breakpoints[query]) {

            this.currentScreenSize = this.displayNameMap.get(query) ?? 'Unknown';
            console.log(`Matched breakpoint: ${query}`, this.currentScreenSize);
          }
        }
      });

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
