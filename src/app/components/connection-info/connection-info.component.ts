import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConnectionService } from 'src/app/services/connection/connection.service';

@Component({
  selector: 'app-connection-info',
  template: `
    <div *ngIf="connection.networkInfo() as netInfo" class="d-flex justify-content-between align-items-center">
      <div>
        <span class="fw-bold">Chain:</span> {{ netInfo?.name }}
      </div>
      <button *ngIf="connection.isConnected$ | async" class="btn btn-sm btn-outline-primary" (click)="disconnect();">disconnect</button>
    </div>
  `
})
export class ConnectionInfoComponent implements OnInit {

  constructor(
    public connection: ConnectionService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  disconnect() {
    this.connection.disconnect();
    this.router.navigate([""], { queryParams: { returnUrl: this.router.url } });
  }

}
