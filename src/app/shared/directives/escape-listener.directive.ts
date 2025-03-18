import { Directive, EventEmitter, HostListener, Output } from '@angular/core';


@Directive({
    selector: '[closeByEscape]',
  })
  export class EscapeListenerDirective {
    @Output() readonly escapeAction: EventEmitter<void> = new EventEmitter<void>();
  
    @HostListener('document:keydown.escape', ['$event']) handleKeyEvent(event: KeyboardEvent): void {
      this.escapeAction.emit();
    }
  }