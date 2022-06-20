import { Injectable } from '@angular/core';
import { ConnectionService } from 'src/app/services/connection/connection.service';
import { COMMUNITY, FINISHED, LIVE, NOT_STARTED, Voting } from './votings/voting';

@Injectable({
  providedIn: 'root'
})
export class GovernanceService {

  private endpoint = "https://www.ebox.io/gov/voting.php";

  constructor(private connection: ConnectionService) { }

  getUTCTime(now: Date) {
    let utc = new Date(now. getTime() + now. getTimezoneOffset() * 60000)
    return utc.getTime();
  }

  async getVotings(mode: string): Promise<Voting[]> {

    let payload = new FormData();
    payload.append("action", "get_votings");

    if (mode === COMMUNITY) {
      payload.append("community", "1");
    }

    let response = await fetch(this.endpoint, { method: "POST", body: payload });
    let { data } = await response.json();

    data.forEach(voting => {

      // UTCify the timestamps
      voting.time_start = this.getUTCTime(new Date(voting.time_start * 1000));
      voting.time_end = this.getUTCTime(new Date(voting.time_end * 1000));

      voting.mode = mode;

      // Set the status
      if (this.getUTCTime(new Date()) > voting.time_start && this.getUTCTime(new Date()) < voting.time_end) {
        voting.status = LIVE;
      }
      else if (this.getUTCTime(new Date()) < voting.time_start) {
        voting.status = NOT_STARTED;
      }
      else {
        voting.status = FINISHED;
      }
      voting.answers = JSON.parse(voting.answers);

      // Set a dummy percentage property to 0
      voting.answers.forEach(answer => answer.percentage = 0);
    });

    return data.reverse();
  }

  async getVotes(votingNumber: string, mode: string) {

    let payload = new FormData();
    payload.append("action", "get_votes");
    payload.append("voting", votingNumber);

    if (mode === COMMUNITY) {
      payload.append("community", "1");
    }

    let response = await fetch(this.endpoint, { method: "POST", body: payload });
    let json = await response.json();

    if (json.error === "Results not verified yet") {
      return { sum: null, votes: null };
    }

    let votes = json.data;
    return {
      sum: votes.reduce((a, b) => a + b.answer, 0),
      votes
    };
  }

  async isEligible(votingNumber: string, mode: string): Promise<boolean> {

    let payload = new FormData();
    payload.append("action", "is_eligible");
    payload.append("voting", votingNumber);
    payload.append("address", this.connection.selectedAccount$.getValue());

    if (mode === COMMUNITY) {
      payload.append("community", "1");
    }

    let response = await fetch(this.endpoint, { method: "POST", body: payload });
    let { result } = await response.json();
    return result;
  }

  async hasVoted(votingNumber: string, mode: string): Promise<boolean> {

    let payload = new FormData();
    payload.append("action", "has_voted");
    payload.append("voting", votingNumber);
    payload.append("address", this.connection.selectedAccount$.getValue());

    if (mode === COMMUNITY) {
      payload.append("community", "1");
    }

    let response = await fetch(this.endpoint, { method: "POST", body: payload });
    let { result } = await response.json();
    return result;
  }

  async getVotingDetails(votingNumber: string, mode: string) {

    let payload = new FormData();
    payload.append("action", "get_votes_detail");
    payload.append("voting", votingNumber);

    if (mode === COMMUNITY) {
      payload.append("community", "1");
    }

    let response = await fetch(this.endpoint, { method: "POST", body: payload });
	let json = await response.json();

	if (json.error === "Results not verified yet")
		return [];
		
    return json.data;
  }

  async getVoters(votingNumber: string, mode: string) {

    let payload = new FormData();
    payload.append("action", "get_voters");
    payload.append("voting", votingNumber);

    if (mode === COMMUNITY) {
      payload.append("community", "1");
    }

    let response = await fetch(this.endpoint, { method: "POST", body: payload });
    let { data } = await response.json();
    return data.sort((a, b) => b.voting_power - a.voting_power);
  }

  async vote(votingNumber: string, voteIndex: string) {

    let signedMessage = await this.connection.signMessage(`ethbox Vote #${votingNumber}`);

    let payload = new FormData();
    payload.append("action", "cast_vote");
    payload.append("voting", votingNumber);
    payload.append("address", this.connection.selectedAccount$.getValue());
    payload.append("signed_msg", signedMessage);
    payload.append("vote", voteIndex);

    await fetch(this.endpoint, { method: "POST", body: payload });
  }
}
