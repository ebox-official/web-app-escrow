import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConnectionService } from 'src/app/services/connection/connection.service';
import { GovernanceService } from '../../governance.service';
import { LIVE } from '../voting';

@Component({
  selector: 'app-voting-details',
  templateUrl: './voting-details.component.html',
  styleUrls: ['./voting-details.component.css']
})
export class VotingDetailsComponent implements OnInit {

  mode;
  votingId;
  voting;
  eligibleVoters;
  votingDetails;
  disabled = true;

  now = this.governanceService.getUTCTime(new Date());
  timer;

  constructor(
    private route: ActivatedRoute,
    private governanceService: GovernanceService,
    private connection: ConnectionService
  ) { }

  async ngOnInit() {

    // Update UTC time every second
    this.timer = setInterval(() => {
      this.updateNow();
    }, 1000);

    this.mode = this.route.snapshot.data.mode;
    this.votingId = this.route.snapshot.paramMap.get("votingId");
  }

  ngAfterViewInit() {
    this.updateInterface();
  }

  private async updateInterface() {

    // Get the voting out of all the votings
    let votings = await this.governanceService.getVotings(this.mode);
    this.voting = votings.find(voting => voting.n === this.votingId);

    // Calculate the percentage of voters for each answer
    let votes = await this.governanceService.getVotes(this.votingId, this.mode);
    this.voting.answers.forEach((answer, i) => {
      if (votes.sum === null) {
        answer.percentage = 0;
      }
      else {
        answer.percentage = Math.round(100 * votes.votes[i].answer / votes.sum);
      }
    });

    // Get eligible voters and voting details
    let [ eligibleVotes, votingDetails, hasVoted, isEligible ] = await Promise.all([
      await this.governanceService.getVoters(this.votingId, this.mode),
      await this.governanceService.getVotingDetails(this.votingId, this.mode),
      await this.governanceService.hasVoted(this.votingId, this.mode),
      await this.governanceService.isEligible(this.votingId, this.mode)
    ]);
    this.eligibleVoters = eligibleVotes;
    this.votingDetails = votingDetails;

    // If the user has voted, then check his/her choice
    if (hasVoted) {
      let vote = this.votingDetails.
        find(vd => {
          let userAddress = this.connection.selectedAccount$.getValue();
          if (userAddress) {
            return vd.address.toLowerCase() === userAddress.toLowerCase();
          }
          return false;
        });
      let radios = Array.from(
        document.querySelectorAll(`[name="radios-voting-${this.votingId}"]`)
      );
      radios[vote.vote - 1]["checked"] = true;
    }

    // Check if the user can vote
    this.disabled = !isEligible || hasVoted || this.voting.status !== LIVE;
  }

  ngOnDestroy() {
    clearInterval(this.timer);
  }

  private updateNow() {
    this.now = this.governanceService.getUTCTime(new Date());
  }

}
