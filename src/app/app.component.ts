import { isPlatformBrowser } from '@angular/common';
import { Component, ElementRef, Inject, inject, OnInit, PLATFORM_ID, Renderer2, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fromEvent, Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { MainModule } from './main/main.module';
import { Theme } from './models/theme.model';
import { ThemeService } from './services/theme.service';
import { PrimaryColors } from './shared/primary-colors';

@Component({
  selector: 'app-root',
  imports: [MainModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  private readonly _ThemeService = inject(ThemeService);
  title = "Mohammad Ali's Portfolio";
  isBigHeader: boolean;
  menuOpened: boolean = false;
  isOnTop: boolean = true;
  private blendModeSubject = new Subject<boolean>();
  primaryColors = PrimaryColors;
  @ViewChild('sidenav') sidenav!: MatSidenav;
  @ViewChild('sidenav', { read: ElementRef }) sidenavElement!: ElementRef;
  effectElement: HTMLElement;

  constructor(library: FaIconLibrary, private _El: ElementRef, private _Renderer: Renderer2, @Inject(PLATFORM_ID) private platformId: Object) {
    library.addIconPacks(fas, far, fab);
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      const bg = document.getElementById('cursor-bg');
      const circle = document.getElementById('cursor-circle');
      const dot = document.getElementById('cursor-dot');

      if (bg && circle && dot) {
        fromEvent<MouseEvent>(document, 'pointermove')
          .subscribe((e) => this.animateCursor(e, bg, circle, dot));
        this.transformCircle(circle, false);
      }
    }

    this.blendModeSubject
      .subscribe((event) => this.debouncedBlendMode(event));
  }

  animateCursor(e: MouseEvent, bg: HTMLElement, circle: HTMLElement, dot: HTMLElement) {
    const x = e.pageX;
    const y = e.pageY;

    requestAnimationFrame(() => {
      this._Renderer.setStyle(circle, 'top', `${y}px`);
      this._Renderer.setStyle(circle, 'left', `${x}px`);
      this._Renderer.setStyle(circle, 'transform', `translate(-50%, -50%`);
      this._Renderer.setStyle(dot, 'top', `${y}px`);
      this._Renderer.setStyle(dot, 'left', `${x}px`);
      this._Renderer.setStyle(dot, 'transform', `translate(-50%, -50%`);
      this._Renderer.setStyle(bg, 'top', `${y}px`);
      this._Renderer.setStyle(bg, 'left', `${x}px`);
      this._Renderer.setStyle(bg, 'transform', `translate(-50%, -50%`);
    });
  }

  transformCircle(element: HTMLElement, isBlendMode: boolean = false) {
    if (isBlendMode === true) {
      document.addEventListener('mousedown', () => {
        this._Renderer.removeClass(element, 'scale-default');
        this._Renderer.removeClass(element, 'scale-2');
        this._Renderer.addClass(element, 'scale-4');
      });
      document.addEventListener('mouseup', () => {
        this._Renderer.removeClass(element, 'scale-default');
        this._Renderer.removeClass(element, 'scale-4');
        this._Renderer.addClass(element, 'scale-2');
      });
      document.addEventListener('mouseover', () => {
        this._Renderer.removeClass(element, 'scale-default');
        this._Renderer.removeClass(element, 'scale-4');
        this._Renderer.addClass(element, 'scale-2');
      });
    } else {
      document.addEventListener('mousedown', () => {
        this._Renderer.removeClass(element, 'scale-default');
        this._Renderer.removeClass(element, 'scale-4');
        this._Renderer.addClass(element, 'scale-2');
      });
      document.addEventListener('mouseup', () => {
        this._Renderer.removeClass(element, 'scale-2');
        this._Renderer.removeClass(element, 'scale-4');
        this._Renderer.addClass(element, 'scale-default');
      });
      document.addEventListener('mouseover', () => {
        this._Renderer.removeClass(element, 'scale-2');
        this._Renderer.removeClass(element, 'scale-4');
        this._Renderer.addClass(element, 'scale-default');
      });
    }
  }

  blendMode(event: boolean) {
    this.blendModeSubject.next(event);
  }

  debouncedBlendMode(event: boolean) {
    const circle = document.getElementById('cursor-circle');
    const dot = document.getElementById('cursor-dot');
    if (circle && dot) {
      if (event) {
        this._Renderer.addClass(circle, 'blend-mode');
        this._Renderer.addClass(dot, 'hide');
        this.transformCircle(circle, true);
      }
      else {
        this._Renderer.removeClass(circle, 'blend-mode');
        this._Renderer.removeClass(dot, 'hide');
        this.transformCircle(circle, false);
      }
    }
  }

  menuToggled($event: boolean) {
    this.menuOpened = $event;
    if (!this.menuOpened)
      document.body.style.overflowY = 'visible';
    else
      document.body.style.overflowY = 'hidden';
  }

  themeChanged(theme: Theme) {
    this._ThemeService.setTheme(theme);
  }

  onTopPosition($event: boolean) {
    this.isOnTop = $event;
  }
}