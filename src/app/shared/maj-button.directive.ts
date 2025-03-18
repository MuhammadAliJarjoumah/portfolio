import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[maj-button]'
})
export class MajButtonDirective implements OnInit {

  constructor(private el: ElementRef, private renderer: Renderer2) { }
  ngOnInit() {
    this.applyButtonStyles();
  }

  applyButtonStyles() {
    const button = this.el.nativeElement as HTMLButtonElement;
    this.renderer.addClass(button, 'custom-button-style-1');

  }


}
