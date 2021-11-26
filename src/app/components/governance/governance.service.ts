import { Injectable } from '@angular/core';
import { COMMUNITY, FINISHED, LIVE, Voting } from './votings/voting';

@Injectable({
  providedIn: 'root'
})
export class GovernanceService {

  private endpoint = "https://www.ebox.io/gov/voting.php";

  constructor() { }

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
      voting.time_start = this.getUTCTime(new Date(voting.time_start * 1000));
      voting.time_end = this.getUTCTime(new Date(voting.time_end * 1000));
      voting.mode = mode;
      voting.status = voting.time_end < this.getUTCTime(new Date()) ?
        FINISHED :
        LIVE;
      voting.answers = JSON.parse(voting.answers);
    });

    return data.reverse();
  }

  // async isEligible(options) {

  //   let formData = new FormData();
  //   formData.append('action', 'is_eligible');
  //   formData.append('voting', options.votingNumber);
  //   formData.append('address', this.contractServ.selectedAccount$.getValue());

  //   if (options.isCommunity) {
  //     formData.append('community', '1');
  //   }

  //   let response = await fetch(this.endpoint, { method: 'POST', body: formData });
  //   let { result: isEligible } = await response.json();
  //   return isEligible;
  // }

  // async hasVoted(options) {

  //   let formData = new FormData();
  //   formData.append('action', 'has_voted');
  //   formData.append('voting', options.votingNumber);
  //   formData.append('address', this.contractServ.selectedAccount$.getValue());

  //   if (options.isCommunity) {
  //     formData.append('community', '1');
  //   }

  //   let response = await fetch(this.endpoint, { method: 'POST', body: formData });
  //   let { result: hasVoted } = await response.json();
  //   return hasVoted;
  // }

  // async getVotes(options) {

  //   let formData = new FormData();
  //   formData.append('action', 'get_votes');
  //   formData.append('voting', options.votingNumber);

  //   if (options.isCommunity) {
  //     formData.append('community', '1');
  //   }

  //   // I can't standardize the response into a type unless we standardize our BE API, therefore I have to cheat with : "any" in order to access it's properties without TS complaining about it
  //   let response: any = await fetch(this.endpoint, { method: 'POST', body: formData });
  //   let json = await response.json();

  //   // Be careful, those votings that haven't yet started have a the following payload: {"error":"Results not verified yet"}
  //   if (json.error === "Results not verified yet") {
  //     return { sum: null, votes: null };
  //   }

  //   let votes = json.data;
  //   return {
  //     sum: votes.reduce((a, b) => a + b.answer, 0),
  //     votes
  //   };
  // }

  // async getVoters(options) {

  //   let formData = new FormData();
  //   formData.append('action', 'get_voters');
  //   formData.append('voting', options.votingNumber);

  //   if (options.isCommunity) {
  //     formData.append('community', '1');
  //   }

  //   let response = await fetch(this.endpoint, { method: 'POST', body: formData });
  //   let { data: eligibleUsers } = await response.json();
  //   return eligibleUsers
  //     .sort((a, b) => b.voting_power - a.voting_power);
  // }

  // async getVotesDetails(options) {

  //   let formData = new FormData();
  //   formData.append('action', 'get_votes_detail');
  //   formData.append('voting', options.votingNumber);

  //   if (options.isCommunity) {
  //     formData.append('community', '1');
  //   }

  //   let response = await fetch(this.endpoint, { method: 'POST', body: formData });
  //   let { data: votesDetail } = await response.json();
  //   return votesDetail;
  // }

  // async vote(proposal, selectedChoice) {

  //   let selectedAccount = this.contractServ.selectedAccount$.getValue();

  //   let response: any = await this.contractServ
  //     .signMessage(`ethbox Vote #${proposal.n}`);
  //   let signedMessage = response.result;

  //   console.log('Signed message is', signedMessage);

  //   this.castVote(
  //     proposal,
  //     selectedChoice,
  //     selectedAccount,
  //     signedMessage);
  // }

  // private async castVote(proposal, vote, account, signedMessage) {

  //   console.log('Proposal is', proposal);
  //   console.log('Choosen vote is', vote);
  //   console.log('Connected account is', account);
  //   console.log('Signed message is', signedMessage);

  //   let formData = new FormData();
  //   formData.append('action', 'cast_vote');
  //   formData.append('voting', proposal.n);
  //   formData.append('address', account);
  //   formData.append('signed_msg', signedMessage);
  //   formData.append('vote', vote);

  //   // I have no idea what's the response looks like (json or text or both depending on the execution?)
  //   let response = await fetch(this.endpoint, { method: 'POST', body: formData });
  //   return response;
  // }
}
