import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-polkadot-provider-modal',
  templateUrl: './polkadot-provider-modal.component.html'
})
export class PolkadotProviderModalComponent implements OnInit, AfterViewInit {

  // modals service stuff
  @Input("service") service;
  @Input("data") data;
  @ViewChild("modal") modal: ElementRef;

  ngAfterViewInit() {
    this.service.init(this.modal.nativeElement);
  }
  // /modals service stuff

  constructor() { }

  ngOnInit(): void {
  }

  confirm(accountSelector, networkSelector) {
    let account = accountSelector.value;
    let [ rpcUrl, chainId ] = networkSelector.value.split(";");
    this.service.resolve({ account, rpcUrl, chainId });
  }

  cancel() {
    this.service.reject("User rejected.");
  }

}
