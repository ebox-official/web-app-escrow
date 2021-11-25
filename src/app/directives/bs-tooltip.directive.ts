import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBsTooltip]'
})
export class BsTooltipDirective {

  constructor(private elRef: ElementRef) { }

  ngOnInit() {
    new window["bootstrap"].Tooltip(this.elRef.nativeElement);
  }

}
