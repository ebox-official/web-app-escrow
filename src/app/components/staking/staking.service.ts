import { Injectable } from '@angular/core';
import { ConnectionService } from 'src/app/services/connection/connection.service';

@Injectable({
  providedIn: 'root'
})
export class StakingService {

  fetchDataEndpoint = "https://www.ebox.io/staking/fetch_data.php";
  payoutEndpoint = "https://www.ebox.io/api/payout.php";
  setChainEndpoint = "https://www.ebox.io/app/set_chain.php";

  constructor(private connection: ConnectionService) { }

  async getDateLimits() {

    let payload = new FormData();
    payload.append("action", "get_date_limits_new");

    let response = await fetch(this.fetchDataEndpoint, { method: "POST", body: payload });
    let { data } = await response.json();
    return data;
  }

  async getData(pageYear, pageMonth, pageDate) {

    let payload = new FormData();
    payload.append("action", "get_data_new");
    payload.append("year", pageYear);
    payload.append("month", pageMonth + 1);
    payload.append("day", pageDate);

    let response = await fetch(this.fetchDataEndpoint, { method: "POST", body: payload });
    let { data } = await response.json();
    return data;
  }

  async getPayoutReward(address) {

    let payload = new FormData();
    payload.append("action", "payout_get_unclaimed");
    payload.append("address", address);

    let response = await fetch(this.payoutEndpoint, { method: "POST", body: payload });
    let result = await response.json();
    return result;
  }

  async setPayoutReward(address) {

    let payload = new FormData();
    payload.append("action", "payout_set_claimed");
    payload.append("address", address);

    let response = await fetch(this.payoutEndpoint, { method: "POST", body: payload });
    let result = await response.json();
    return result;
  }

  async setSelectedNetwork(checkbox) {

    // Send the signed message to the backend
    let payload = new FormData();
    payload.append("action", "get_chain");
    payload.append("address", this.connection.selectedAccount$.getValue());

    let response = await fetch(this.setChainEndpoint, { method: 'POST', body: payload });
    let status = await response.json();

    console.log("Status is", status);

    return checkbox.nativeElement.checked = !status.result;
  }

  async changeChainRewards(checkbox) {

    // chainIndex is NOT the chainId
    let chainIndex = checkbox.checked ? "0" : "1";

    let newNetwork = ["Ethereum", "Binance Smart Chain"][chainIndex];

    // Build a magic string as message
    let msg = `Staking - Set default chain:\r\n${newNetwork}`;

    let signature;
    try {
      signature = await this.connection.signMessage(msg);
    } catch (err) {

      // Revert the checkbox
      checkbox.checked = !checkbox.checked;
      throw err;
    }

    console.log("Signature is", signature);

    // Send the signed message to the backend
    let payload = new FormData();
    payload.append("action", "set_chain");
    payload.append("address", this.connection.selectedAccount$.getValue());
    payload.append("signed_msg", signature);
    payload.append("chain", chainIndex);

    let response = await fetch(this.setChainEndpoint, { method: 'POST', body: payload });
    let status = await response.json();

    console.log("Status is", status);

    if ("error" in status && status.error !== 0) {

      // Revert the checkbox
      checkbox.checked = !checkbox.checked;
    }
  }
}
