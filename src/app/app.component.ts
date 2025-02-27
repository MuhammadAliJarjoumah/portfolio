import { Component, ElementRef, HostListener, Inject, inject, OnInit, PLATFORM_ID, Renderer2, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { MainModule } from './main/main.module';
import { Theme } from './models/theme.model';
import { ThemeService } from './services/theme.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [MainModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  private readonly _ThemeService = inject(ThemeService);
  title = 'Portfolio Mohammad Ali';
  isBigHeader: boolean;
  menuOpened: boolean = false;
  isOnTop: boolean = true;
  @ViewChild('sidenav') sidenav!: MatSidenav;
  @ViewChild('sidenav', { read: ElementRef }) sidenavElement!: ElementRef;
  effectElement: HTMLElement;

  constructor(library: FaIconLibrary, private _El: ElementRef, private _Renderer: Renderer2,@Inject(PLATFORM_ID) private platformId: Object) {
    library.addIconPacks(fas, far, fab);
  }

  // @HostListener('document:mousemove', ['$event'])
  // onMouseMove(event: MouseEvent) {
  //   if (isPlatformBrowser(this.platformId)) {
  //     this._Renderer.setStyle(this.effectElement, 'left', `${event.clientX}px`);
  //     this._Renderer.setStyle(this.effectElement, 'top', `${event.clientY}px`);
  //   }
  // }

  ngOnInit() {
    // if (isPlatformBrowser(this.platformId)) {
    //   console.log("browser code running");

    //   this.effectElement = this._Renderer.createElement('div');
    //   this._Renderer.addClass(this.effectElement, 'cursor-effect');
    //   this._Renderer.appendChild(document.body, this.effectElement);
    // }
  }


  themeChanged(theme: Theme) {
    this._ThemeService.setTheme(theme);
  }

  menuToggled($event: boolean) {
    console.log('toggleeeee', $event)
    this.menuOpened = $event;
    if (!this.menuOpened)
      document.body.style.overflowY = 'visible';
    else
      document.body.style.overflowY = 'hidden';
  }

  onTopPosition($event: boolean){
    this.isOnTop = $event;
  }
}