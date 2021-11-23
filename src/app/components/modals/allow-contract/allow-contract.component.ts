import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-allow-contract',
  templateUrl: './allow-contract.component.html',
  styleUrls: ['./allow-contract.component.css']
})
export class AllowContractComponent implements OnInit, AfterViewInit {

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

  allow() {
    this.service.resolve(true);
  }

  cancel() {
    this.service.resolve(false);
  }

}
