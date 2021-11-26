import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConnectionService } from 'src/app/services/connection/connection.service';
import { EboxService } from 'src/app/services/ebox.service';
import { LoadingService } from '../../../loading/loading.service';
import { COMPLETE, ONE_WAY, OTC_TRADE, PENDING } from '../box';

@Component({
  selector: 'app-box-details',
  templateUrl: './box-details.component.html',
  styleUrls: ['./box-details.component.css']
})
export class BoxDetailsComponent implements OnInit {

  ONE_WAY = ONE_WAY;
  OTC_TRADE = OTC_TRADE;
  PENDING = PENDING;
  COMPLETE = COMPLETE;

  locationHref = window.location.href;
  mode;
  box;

  constructor(
    public connection: ConnectionService,
    public eboxService: EboxService,
    private route: ActivatedRoute,
    private loadingService: LoadingService
  ) { }

  ngOnInit(): void {
    this.mode = this.route.snapshot.data.mode;
    let boxId = this.route.snapshot.paramMap.get("boxId");
    this.eboxService['boxes_' + this.mode + '$']
      .subscribe(boxes => {
        if (boxes)
          this.box = boxes.find(b => b.id === boxId) || null;
      });
  }

  unbox(passphrase) {
    this.eboxService.acceptBox(this.box, passphrase);
  }

}
