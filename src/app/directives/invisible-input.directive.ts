import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appInvisibleInput]'
})
export class InvisibleInputDirective {

  constructor(private elRef: ElementRef) {
    let el = this.elRef.nativeElement;
    el.style.width = 0;
    el.style.height = 0;
    el.style.border = 0;
    el.style.opacity = 0;
  }
  
  @HostListener("focus", ["$event"])
  @HostListener("keydown", ["$event"])
  @HostListener("mousedown", ["$event"])
  @HostListener("paste", ["$event"])
  preventInteraction(evt) {
    if (evt.keyCode != 9) evt.preventDefault();
  }

}
