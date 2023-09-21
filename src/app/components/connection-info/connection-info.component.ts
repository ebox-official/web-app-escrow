import { Component, OnInit } from '@angular/core';
import { ConnectionService } from 'src/app/services/connection/connection.service';

@Component({
	selector: 'app-connection-info',
	//   template: `
	//     <ng-container *ngIf="connection.networkInfo() as netInfo">
	//       <span class="fw-bold">Chain: </span> {{ netInfo?.name }}
	//     </ng-container>
	//   `
	template: `
		<ng-container *ngIf="connection.networkInfo() as netInfo">
			<div style="text-align: right; font-size: 14px; display: inline-block; width: 100%;">
				<span style="opacity: 0.6;">connected to</span> {{ netInfo?.name }} <img src="{{ netInfo?.thumb }}" style="height: 18px; transform: translate(0px, -1px); margin-left: 2px;">
			</div>
		</ng-container>
	`
})
export class ConnectionInfoComponent implements OnInit {

	constructor(public connection: ConnectionService) { }

	ngOnInit(): void {
	}

}
