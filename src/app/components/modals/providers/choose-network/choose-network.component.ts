import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ProvidersService } from 'src/app/services/connection/providers.service';

@Component({
  selector: 'app-choose-network',
  templateUrl: './choose-network.component.html'
})
export class ChooseNetworkComponent implements OnInit, AfterViewInit {

  // modals service stuff
  @Input("service") service;
  @Input("data") data;
  @ViewChild("modal") modal: ElementRef;

  ngAfterViewInit() {
    this.service.init(this.modal.nativeElement);
  }
  // /modals service stuff

  constructor(public providersService: ProvidersService) { }

  ngOnInit(): void {
  }

  confirm(selector) {
    this.service.resolve(this.providersService.RPCs[selector.selectedIndex]);
  }

  cancel() {
    this.service.reject("User rejected.");
  }

}
