import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { GovernanceService } from 'src/app/components/governance/governance.service';
import { ConnectionService } from 'src/app/services/connection/connection.service';

@Component({
  selector: 'app-voters',
  templateUrl: './voters.component.html'
})
export class VotersComponent implements AfterViewInit {

  // modals service stuff
  @Input("service") service;
  @Input("data") data;
  @ViewChild("modal") modal: ElementRef;

  ngAfterViewInit() {
    this.service.init(this.modal.nativeElement);
  }
  // /modals service stuff

  voters;

  constructor(
    private governanceService: GovernanceService,
    public connection: ConnectionService  
  ) { }

  onOpen() {
    this.voters = this.governanceService.
      getVoters(this.data.votingId, this.data.mode);
  }

  onClose() {
    this.voters = null;
  }

}
