import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ProvidersService } from 'src/app/services/connection/providers.service';

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

  constructor(providersService: ProvidersService) { }

  ngOnInit(): void {
  }

  confirm() {
    this.service.resolve(true);
  }

  cancel() {
    this.service.resolve(false);
  }

}
