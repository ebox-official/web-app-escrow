import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBsPopover]'
})
export class BsPopoverDirective {

  constructor(private elRef: ElementRef) { }

  ngOnInit() {
    new window["bootstrap"].Popover(this.elRef.nativeElement);
  }

}
