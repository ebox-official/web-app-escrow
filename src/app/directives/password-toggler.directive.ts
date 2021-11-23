import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appPasswordToggler]'
})
export class PasswordTogglerDirective {

  @Input("myToggleTarget") myToggleTarget;

  state = false;

  constructor(private elRef: ElementRef) { }

  @HostListener("click")
  toggleState() {
    if (this.state === false) {
      this.myToggleTarget.type = "text";
      this.elRef.nativeElement.classList.add("password-visible");
    }
    else {
      this.myToggleTarget.type = "password";
      this.elRef.nativeElement.classList.remove("password-visible");
    }
    this.state = !this.state;
  }

}
