import { Component, OnInit, ViewChild } from '@angular/core';
import { ConnectionService } from 'src/app/services/connection/connection.service';
import { EboxService } from 'src/app/services/ebox.service';
import { StakingService } from './staking.service';

@Component({
  selector: 'app-staking',
  templateUrl: './staking.component.html',
  styleUrls: ['./staking.component.css']
})
export class StakingComponent implements OnInit {

  @ViewChild("netChoiceCheck") netChoiceCheck;

  pageDate: any = "--";
  monthsNames = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];
  pageMonth;
  userRewardsObject;
  userPayout;
  userRewardsFromContract;

  private numberOfDaysInMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  private minMonth;
  private minDate;
  private maxMonth;
  private maxDate;
  private fetchedRewards;

  constructor(
    public stakingService: StakingService,
    private connection: ConnectionService,
    private eboxService: EboxService
  ) { }

  async ngOnInit() {

    let dateLimits = await this.stakingService.getDateLimits();

    this.minMonth = dateLimits.min_month - 1;
    this.minDate = +dateLimits.min_day;
    this.maxMonth = dateLimits.max_month - 1;
    this.maxDate = +dateLimits.max_day;

    this.pageMonth = this.maxMonth;
    this.pageDate = this.maxDate;

    this.eboxService.dappReady$.
      subscribe(async (isReady) => {
        if (isReady) {
          this.userRewardsFromContract = await this.eboxService.getReward();
          await this.fetchRewards();
          await this.updateUserPayout();
        }
      });
  }

  ngAfterViewInit() {
    this.eboxService.dappReady$.
      subscribe(async (isReady) => {
        this.stakingService.setSelectedNetwork(this.netChoiceCheck)
      });
  }

  async previous() {

    if (this.pageDate <= this.minDate && this.pageMonth <= this.minMonth) {
      return;
    }
    if (this.pageDate < 2) {
      if (this.pageMonth == 0) {
        this.pageMonth = this.monthsNames.length - 1;
      }
      else {
        this.pageMonth--;
      }
      this.pageDate = this.numberOfDaysInMonths[this.pageMonth];
    }
    else {
      this.pageDate--;
    }
    await this.fetchRewards();
  }

  async next() {

    if (this.pageDate >= this.maxDate && this.pageMonth >= this.maxMonth) {
      return;
    }
    if (this.pageDate == this.numberOfDaysInMonths[this.pageMonth]) {
      if (this.pageMonth == this.monthsNames.length - 1) {
        this.pageMonth = 0;
      }
      else {
        this.pageMonth++;
      }
      this.pageDate = 1;
    }
    else {
      this.pageDate++;
    }
    await this.fetchRewards();
  }

  private async fetchRewards() {

    let results = await this.stakingService.getData(this.pageMonth, this.pageDate);
    this.fetchedRewards = results
      .map(result => ({
        ...result,
        apy: (100 * ((1 + result.reward / result.balance) ** 12 - 1)).toFixed(2)
      }));

    this.userRewardsObject = this.fetchedRewards
      .find(item => {
        let selectedAccount = this.connection.selectedAccount$.getValue();
        return item.address.toLowerCase() == selectedAccount.toLowerCase();
      });
  }

  async updateUserPayout() {

    let getPayoutRewardResponse = await this.stakingService
      .getPayoutReward(
        this.connection.selectedAccount$.getValue()
      );
    if (getPayoutRewardResponse.result) {
      this.userPayout = getPayoutRewardResponse.result;
    }
  }

  async claimRewards() {

    await this.eboxService.claimReward();
    await this.stakingService.
      setPayoutReward(
        this.connection.selectedAccount$.getValue()
      );
    await this.updateUserPayout();
    this.userRewardsFromContract = await this.eboxService.getReward();
  }

}
