import { Component, OnInit } from '@angular/core';
import { ConnectionService } from 'src/app/services/connection/connection.service';
import { EboxService } from 'src/app/services/ebox.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(
    public eboxService: EboxService,
    private connection: ConnectionService
  ) { }

  ngOnInit(): void {
  }

  isTestnet(): boolean {
    return /testnet/i.test(this.connection.networkInfo()?.name);
  }
}
