import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-are-you-sure',
  templateUrl: './are-you-sure.component.html'
})
export class AreYouSureComponent implements OnInit, AfterViewInit {

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

  confirm() {
    this.service.resolve(true);
  }

  cancel() {
    this.service.resolve(false);
  }

}
