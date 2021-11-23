import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  template: `
    <style>
      :host {
        display: flex;
        align-items: center;
        height: 100%;
        width: 100%;
      }
    </style>
    <div class="py-5 container-lg">
      <div class="py-5 text-center">
        <h2 class="display-1 fw-bolder text-primary">404</h2>
        <p class="mb-1 lead fw-bold">Not found</p>
        <p><small>The resource could not be found.</small></p>
      </div>
    </div>
  `
})
export class NotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
