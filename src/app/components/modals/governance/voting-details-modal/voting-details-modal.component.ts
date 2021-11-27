import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { GovernanceService } from 'src/app/components/governance/governance.service';
import { ConnectionService } from 'src/app/services/connection/connection.service';

@Component({
  selector: 'app-voting-details-modal',
  templateUrl: './voting-details-modal.component.html'
})
export class VotingDetailsModalComponent implements AfterViewInit {

  // modals service stuff
  @Input("service") service;
  @Input("data") data;
  @ViewChild("modal") modal: ElementRef;

  ngAfterViewInit() {
    this.service.init(this.modal.nativeElement);
  }
  // /modals service stuff

  votingDetails;

  constructor(
    private governanceService: GovernanceService,
    public connection: ConnectionService  
  ) { }

  onOpen() {
    this.votingDetails = this.governanceService.
      getVotingDetails(this.data.votingId, this.data.mode);
  }

  onClose() {
    this.votingDetails = null;
  }

}
