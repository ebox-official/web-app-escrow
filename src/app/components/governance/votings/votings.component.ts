import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GovernanceService } from '../governance.service';
import { Voting } from './voting';

@Component({
  selector: 'app-votings',
  template: `
  <div class="skeletonized">
    <ng-container *ngIf="votings | async as _votings">
      <ng-container *ngIf="votings.length === 0 else votingsFound">
        <div class="p-3">No votings found</div>
      </ng-container>
      <ng-template #votingsFound>
        <app-voting-list-item *ngFor="let v of _votings; trackBy: votingId" [voting]="v" [mode]="mode"></app-voting-list-item>
      </ng-template>
    </ng-container>
  </div>
  `
})
export class VotingsComponent implements OnInit {

  votings;

  constructor(
    private route: ActivatedRoute,
    private governanceService: GovernanceService
  ) { }
  
  ngOnInit() {
    this.votings = this.governanceService.getVotings(this.route.snapshot.data.mode);
  }

  // This piece of code tells Angular how to track votings efficiently
  votingId(_, voting) {
    return voting.n;
  }

}
