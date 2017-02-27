import { Directive, ElementRef, Input } from '@angular/core';

@Directive({ selector: '[bScroll]' })
export class bScrollDirective {
  constructor(el: ElementRef) {
    //el.nativeElement.style.backgroundColor = 'yellow';

  }
}
