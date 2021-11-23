import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[dclHost]'
})
export class DclHostDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
