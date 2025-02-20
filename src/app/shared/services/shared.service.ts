import { Injectable, Renderer2, Inject, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document) { }

  setBodyOverflowHidden(enable: boolean) {
    if (enable) {
      this.renderer.addClass(this.document.body, 'overflow-hidden');
      console.log("suiiiiiii ", enable)
    } else {
      this.renderer.removeClass(this.document.body, 'overflow-hidden');
      console.log("suiiiiiii ", enable)

    }
  }
}
