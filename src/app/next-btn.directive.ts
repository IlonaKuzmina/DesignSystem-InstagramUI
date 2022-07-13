import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNextBtn]',
})
export class NextBtnDirective {
  constructor(private el: ElementRef) {}

  @HostListener('click') nextClickHandler() {
    const elm = this.el.nativeElement.parentElement.parentElement.children[0];
    const item = elm.getElementsByClassName('item');
    elm.append(item[0]);
  }
}
