import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appCustomValidationMessage]'
})
export class CustomValidationMessageDirective {

  el;
  timer;
  syncRate = 450;
  prevValue;

  @Input("validationMessage") validationMessage;
  @Input("checkForChange") checkForChange;

  constructor(private elRef: ElementRef) {
  }

  ngOnInit() {
    this.el = this.elRef.nativeElement;
    if (this.checkForChange) {
      this.timer = setInterval(this.checkChange.bind(this), this.syncRate);
    }
  }

  ngOnDestroy() {
    if (this.checkForChange) {
      clearInterval(this.timer);
    }
  }

  // Used to trigger set/reset when the code changes the value
  checkChange() {
    if (this.prevValue !== this.el.value) {
      this.prevValue = this.el.value;
      this.el.dispatchEvent(new Event("change"));
    }
  }

  @HostListener("invalid")
  setValidity() {
    this.el.setCustomValidity(this.validationMessage);
  }
  
  @HostListener("blur")
  @HostListener("change")
  @HostListener("input")
  @HostListener("valid")
  resetValidity() {
    this.el.setCustomValidity("");
  }
}
