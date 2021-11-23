import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appWidthAsValueLength]'
})
export class WidthAsValueLengthDirective {

  constructor(private el: ElementRef) { }

  @HostListener("input")
  adjustWidth() {
    let el = this.el.nativeElement;
    let pl = window.getComputedStyle(el, null).getPropertyValue('padding-right');
    let pr = window.getComputedStyle(el, null).getPropertyValue('padding-left');
    el.style.fontFamily = "monospace";
    el.style.width = `calc(2px + ${pl} + ${pr} + ${el.value.length}ch)`;
  }

  ngOnInit() {
    this.adjustWidth();
  }

}
