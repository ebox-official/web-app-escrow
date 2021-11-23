import { Component, OnInit } from '@angular/core';
import { ConsoleMessage } from './console-message/console-message';
import { ConsoleService } from './console.service';

@Component({
  selector: 'app-console',
  template: `
    <div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="console-offcanvas">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title">Console</h5>
        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <p>Here you can read service messages from the dapp.</p>
        <app-console-message *ngFor="let m of messages" [console-message]="m"></app-console-message>
      </div>
    </div>
  `
})
export class ConsoleComponent implements OnInit {

  messages: ConsoleMessage[] = [];

  constructor(private consoleService: ConsoleService) { }
  
  ngOnInit(): void {
    this.consoleService.message$
      .subscribe(message => this.messages.unshift(message))
  }

}
