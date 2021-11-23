import { Component, ViewChild, OnInit } from '@angular/core';
import { DclHostDirective } from '../../directives/dcl-host.directive';
import { ModalsService } from './modals.service';

@Component({
  selector: 'app-modals',
  template: '<div dclHost></div>'
})
export class ModalsComponent implements OnInit {

  // This is just a shell that will append all the modals declared in ModalsService

  @ViewChild(DclHostDirective, { static: true }) dclHost: DclHostDirective;

  constructor(private ms: ModalsService) { }

  ngOnInit(): void {

    // Walk through all the registered modals and add them to the template
    for (let modalName in this.ms.modals) {
      this.ms.add(this.dclHost, modalName);
    }
  }

}
