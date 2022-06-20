import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalsService } from 'src/app/components/modals/modals.service';
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
  disabled = true;
  voted = false;

  now = this.governanceService.getUTCTime(new Date());
  timer;

  constructor(
    private route: ActivatedRoute,
    private governanceService: GovernanceService,
    private connection: ConnectionService,
    private ms: ModalsService
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

  ngOnDestroy() {
    clearInterval(this.timer);
  }

  async vote() {

    // Get selected choice index as 1-based and send it, then update the UI
    let radios = Array.from(
      document.querySelectorAll(`[name="radios-voting-${this.votingId}"]`)
    );
    let selectedChoice = radios.findIndex(radio => radio["checked"]) + 1;
    await this.governanceService.vote(this.votingId, selectedChoice.toString());
    this.updateInterface();
  }

  openVotingDetails() {
    this.ms.open(this.ms.modals.VOTING_DETAILS, { votingId: this.votingId, mode: this.mode });
  }

  openVoters() {
    this.ms.open(this.ms.modals.VOTERS, { votingId: this.votingId, mode: this.mode });
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
    let [ votingDetails, hasVoted, isEligible ] = await Promise.all([
      await this.governanceService.getVotingDetails(this.votingId, this.mode),
      await this.governanceService.hasVoted(this.votingId, this.mode),
      await this.governanceService.isEligible(this.votingId, this.mode)
    ]);

    // If the user has voted, then check his/her choice
    if ((votingDetails.length != 0) && hasVoted) {
      let vote = votingDetails.
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
	this.voted = hasVoted;
  }

  private updateNow() {
    this.now = this.governanceService.getUTCTime(new Date());
  }

}
