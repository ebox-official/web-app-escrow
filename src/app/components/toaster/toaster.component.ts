import { Component, OnInit } from '@angular/core';
import { Toast } from './toast/toast';
import { ToasterService } from './toaster.service';

@Component({
  selector: 'app-toaster',
  template: `
    <style>
      :host {
        position: fixed;
        z-index: 2000;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        display: grid;
        grid-gap: .5rem;
        margin-bottom: 1rem;
      }
    </style>
    <app-toast *ngFor="let t of toasts" [toast-message]="t"></app-toast>
  `
})
export class ToasterComponent implements OnInit {

  toasts: Toast[] = [];

  constructor(private toasterService: ToasterService) { }

  ngOnInit(): void {
    this.toasterService.toast$
      .subscribe(toast => this.toasts.push(toast));
  }

}
