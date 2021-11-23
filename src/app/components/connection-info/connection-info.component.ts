import { Component, OnInit } from '@angular/core';
import { ConnectionService } from 'src/app/services/connection/connection.service';

@Component({
  selector: 'app-connection-info',
  template: `
    <ng-container *ngIf="connection.networkInfo() as netInfo">
      <span class="fw-bold">Chain:</span> {{ netInfo?.name }}
      <!-- <img height="16" [src]="netInfo?.thumb"> -->
    </ng-container>
  `
})
export class ConnectionInfoComponent implements OnInit {

  constructor(public connection: ConnectionService) { }

  ngOnInit(): void {
  }

}
