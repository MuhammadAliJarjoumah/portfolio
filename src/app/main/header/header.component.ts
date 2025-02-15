import { CommonModule, isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, EventEmitter, HostListener, inject, Inject, OnDestroy, Output, PLATFORM_ID } from '@angular/core';
import { Theme } from '../../models/theme.model';
import { SharedModule } from '../../shared/shared.module';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { SharedService } from '../../shared/services/shared.service';

@Component({
  standalone: true,
  selector: 'app-header',
  imports: [SharedModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  providers: [SharedService]
})
export class HeaderComponent implements AfterViewInit, OnDestroy {
  private sharedService = inject(SharedService);
  prevScrollPos: number = 0;
  isScrolledDown: boolean = false;
  isTopPosition: boolean = true;
  Theme = Theme;
  isMenuOpened: boolean = false;
  currentScreenSize: string;
  destroyed = new Subject<void>();
  displayNameMap = new Map([
    [Breakpoints.XSmall, 'XSmall'],
    [Breakpoints.Small, 'Small'],
    [Breakpoints.Medium, 'Medium'],
    [Breakpoints.Large, 'Large'],
    [Breakpoints.XLarge, 'XLarge'],
  ]);
  @Output() themeChanged: EventEmitter<Theme> = new EventEmitter<Theme>();
  @Output() menuToggled: EventEmitter<boolean> = new EventEmitter<boolean>();
  private breakpointObserver = inject(BreakpointObserver); // Inject BreakpointObserver

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
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

  toggleMenu(message: string) {//message is not used, you can delete it.
    this.isMenuOpened = !this.isMenuOpened;
    // console.log("Menu Toggled ", message, this.isMenuOpened);
    // this.sharedService.setBodyOverflowHidden(this.isMenuOpened);
  }
}
