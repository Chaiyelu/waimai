import { Directive, ElementRef, Input, AfterViewInit } from '@angular/core';
import * as IScroll from 'iscroll/build/iscroll';

@Directive({
  selector: '[iscroll]'
})
export class Iscroll implements AfterViewInit {
  iscroll: IScroll
  constructor(
    private elementRef: ElementRef
  ) {}

  ngAfterViewInit() {
    let iscrollOptions: any = {
      mouseWheel: true,
      scrollbars: true
    };
    this.iscroll = new IScroll(this.elementRef.nativeElement, iscrollOptions);
  }
}
