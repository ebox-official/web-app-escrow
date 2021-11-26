import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GovernanceService } from '../../governance.service';

@Component({
  selector: 'app-voting-details',
  templateUrl: './voting-details.component.html',
  styleUrls: ['./voting-details.component.css']
})
export class VotingDetailsComponent implements OnInit {

  mode;
  voting;

  now = this.governanceService.getUTCTime(new Date());
  timer;

  constructor(
    private route: ActivatedRoute,
    private governanceService: GovernanceService
  ) { }

  async ngOnInit() {

    // Update UTC time every second
    this.timer = setInterval(() => {
      this.updateNow();
    }, 1000);

    this.mode = this.route.snapshot.data.mode;
    let votingId = this.route.snapshot.paramMap.get("votingId");
    let votings = await this.governanceService.getVotings(this.mode);
    this.voting = votings.find(voting => voting.n === votingId);
    console.log(this.voting);
  }

  ngOnDestroy() {
    clearInterval(this.timer);
  }

  private updateNow() {
    this.now = this.governanceService.getUTCTime(new Date());
  }

}
