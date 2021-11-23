import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-console-message',
  template: `
    <div #shell class="mb-2 p-2 border">
      <small class="text-muted">{{ consoleMessage.timestamp | dateFormatter }}</small>
      <p #message class="mb-0 font-monospace">{{ consoleMessage.message }}</p>
    </div>
  `
})
export class ConsoleMessageComponent implements OnInit, AfterViewInit {

  @Input("console-message") consoleMessage;

  @ViewChild("shell") shell;
  @ViewChild("message") message;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.shell.nativeElement.classList.add("border-" + this.consoleMessage.color);
    this.message.nativeElement.classList.add("text-" + this.consoleMessage.color);
  }

}
