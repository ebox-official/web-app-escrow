import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { ethers } from "ethers";
import { isNotNullOrUndefined } from '../../utilities/utils';
import { ProvidersService } from './providers.service';
import { BigNumber } from '@ethersproject/bignumber';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  NOT_SUPPORTED = "Not supported.";

  ethers = ethers;
  provider$ = new BehaviorSubject(undefined);
  signer$ = new BehaviorSubject(undefined);
  chainId$ = new BehaviorSubject(undefined);
  selectedAccount$ = new BehaviorSubject(undefined);
  baseTokenBalance$ = new BehaviorSubject(undefined);
  isConnected$ = new BehaviorSubject(false);
  networkChangeNotification$ = new Subject();

  private LS_KEY = "EBOX_CACHED_PROVIDER";
  private syncRate = 1000;
  private cacheProvider = true;
  private updateVarsTimer;

  constructor(private providers: ProvidersService) {

    // Tweak the state of connection based on provider, signer, chainId, selectedAccount and baseTokenBalance
    let isConnectedMonitor = [
      this.provider$,
      this.signer$,
      this.chainId$,
      this.selectedAccount$,
      this.baseTokenBalance$
    ];
    isConnectedMonitor.
      forEach(obs =>
        obs.subscribe(() => {
          let isConnected = isConnectedMonitor.every(obs =>
            isNotNullOrUndefined(obs.getValue())
          );

          // Update its value only when has changed
          if (this.isConnected$.getValue() !== isConnected) {
            this.isConnected$.next(isConnected);
          }
        })
      );

    // Tweak the state of the network based on chainId and selectedAccount
    let networkChangeNotificationMonitor = [
      this.chainId$,
      this.selectedAccount$
    ];
    networkChangeNotificationMonitor.
      forEach((obs, i) =>
        obs.subscribe((value) => {
          this.networkChangeNotification$.next({
            topic: (i === 0) ? "chainId" : "selectedAccount",
            value
          });
        })
      );

    this.isConnected$.subscribe((isConnected) => {

      // The first time isConnected is false, so stop here
      if (!isConnected) {
        return;
      }
      this.checkNetworkSupport();

      this.networkChangeNotification$.subscribe(({ topic, value }) => {

        // Value is null when the user has disconneted, in this case do nothing
        if (value === null) {
          return;
        }
        if (topic === "selectedAccount") {
          window.location.reload();
          return;
        }
        this.checkNetworkSupport(true);
      });

    });
  }

  private unsupportedShown = false;
  private checkNetworkSupport(refresh?: boolean) {
    
    let netInfo = this.networkInfo();
    if (netInfo.name === this.NOT_SUPPORTED) {

      // Add a banner to tell the user the current network is unsupported
      if (!this.unsupportedShown) {
        let div = document.createElement("DIV");
        div.innerHTML = `
          <div class="position-fixed top-0 start-0 w-100 h-100" style="z-index: 99999; background-color: #000d;">
            <div class="position-absolute bottom-0 w-100 px-3 py-5 bg-danger text-white text-center text-lg-start">
              <div class="display-6">Unsupported network.</div>
              <div class="fs-4">Use Ethereum mainnet, Rinkeby, Binance mainnet | testnet, Matic mainnet, Mumbai, Reef mainnet | testnet.</div>
          </div>
        `;
        document.body.appendChild(div.firstElementChild);
        this.unsupportedShown = true;
        return;
      }
    }
    
    // If network has changed from unsupported to supported, then refresh
    if (refresh) {
      window.location.reload();
    }
  }

  // Check if the given address is valid
  isAddressValid(address: string): boolean {
    return this.ethers.utils.isAddress(address);
  }

  networkInfo() {
    switch ((this.chainId$.getValue() || -1).toString()) {
      case "reef-mainnet":
        return {
          name: "Reef Testnet",
          thumb: "https://assets.coingecko.com/coins/images/13504/small/Group_10572.png?1610534130",
          accountScannerUrl: (address) => `https://reefscan.com/account/${address}`
        };
      case "reef-testnet":
        return {
          name: "Reef Testnet",
          thumb: "https://assets.coingecko.com/coins/images/13504/small/Group_10572.png?1610534130",
          accountScannerUrl: (address) => `https://testnet.reefscan.com/account/${address}`
        };
      case "1":
        return {
          name: "Ethereum Mainnet",
          thumb: "https://assets.coingecko.com/coins/images/279/thumb/ethereum.png",
          accountScannerUrl: (address) => `https://etherscan.io/address/${address}`
        };
      case "4":
        return {
          name: "Ethereum Testnet",
          thumb: "https://assets.coingecko.com/coins/images/279/thumb/ethereum.png",
          accountScannerUrl: (address) => `https://rinkeby.etherscan.io/address/${address}`
        };
      case "56":
        return {
          name: "Binance Mainnet",
          thumb: "https://v1exchange.pancakeswap.finance/images/coins/bnb.png",
          accountScannerUrl: (address) => `https://bscscan.com/address/${address}`
        };
      case "97":
        return {
          name: "Binance Testnet",
          thumb: "https://v1exchange.pancakeswap.finance/images/coins/bnb.png",
          accountScannerUrl: (address) => `https://testnet.bscscan.com/address/${address}`
        };
      case "137":
        return {
          name: "Matic Mainnet",
          thumb: "https://assets.coingecko.com/coins/images/4713/thumb/matic___polygon.jpg",
          accountScannerUrl: (address) => `https://polygonscan.com/address/${address}`
        };
      case "80001":
        return {
          name: "Matic Testnet",
          thumb: "https://assets.coingecko.com/coins/images/4713/thumb/matic___polygon.jpg",
          accountScannerUrl: (address) => `https://mumbai.polygonscan.com/address/${address}`
        };
      default:
        return {
          name: this.NOT_SUPPORTED,
          thumb: null,
          accountScannerUrl: () => ``
        };
    }
  }

  // ethers.utils.formatUnits(wei, decimals)
  weiToDecimal(wei: BigNumber|string, decimals: string|number): string {
    return this.ethers.utils.formatUnits(wei, decimals);
  }

  // ethers.utils.parseUnits(decimalString , decimals)
  decimalToWei(decimalString: string, decimals: string|number): BigNumber {
    return this.ethers.utils.parseUnits(decimalString , decimals);
  }

  private async _connect(resolve, reject, providerName) {

    // Get the provider selected by the user
    let providerConnector = this.providers.dictionary[providerName];
    if (!this.providers.dictionary[providerName]) {
      reject("Provider name not found.");
    }

    let result;
    try {

      // Await the evaluation of the connector
      result = await providerConnector();
    }
    catch (err) {

      // Clear the cache because it can be that the user dismissed the modal on resumed connection
      this.clearCachedProvider();
      reject(err);
      return;
    }

    this.provider$.next(result.provider);
    this.signer$.next(result.signer);

    // Sync variables
    await this.syncingIntervals(result.getNetwork, result.getAccounts);

    // Cache the current provider
    if (this.cacheProvider) {
      localStorage.setItem(this.LS_KEY, providerName);
    }

    resolve(true);
  }

  connect(providerName?) {

    // Return a promise so that it can be awaited by the consumer
    return new Promise(async (resolve, reject) => {

      if (providerName) {
        this._connect(resolve, reject, providerName);
        return;
      }

      // Load the cached provider straight away
      if (this.cacheProvider) {
        this._connect(resolve, reject, localStorage.getItem(this.LS_KEY));
      }
    });
  }

  clearCachedProvider() {
    localStorage.removeItem(this.LS_KEY);

    // Manually removing leftovers from wallet providers
    Object.keys(localStorage).forEach(key => {
      if (/(walletlink|walletconnect)/i.test(key)) {
        localStorage.removeItem(key);
      }
    });
  };

  disconnect() {
    this.provider$.next(null);
    this.signer$.next(null);

    this.resetVariables();

    if (this.updateVarsTimer) {
      clearTimeout(this.updateVarsTimer);
      this.updateVarsTimer = null;
    }

    this.clearCachedProvider();
  }

  resetVariables() {
    this.chainId$.next(null);
    this.selectedAccount$.next(null);
    this.baseTokenBalance$.next(null);
  }

  syncingIntervals(getNetwork, getAccounts) {

    let updateVars = async () => {

      // Chain id
      let chainId;
      try {
        let network = await getNetwork();
        chainId = network.chainId;
      }
      catch (err) {
        console.error("Chain id doesn't seem available...", err);

        // If it was impossible to get, then emit it as null and return
        if (this.chainId$.getValue() !== null) {
          this.chainId$.next(null);
        }
        return;
      }
      if (this.chainId$.getValue() !== chainId) {
        this.chainId$.next(chainId);
      }

      // Selected account
      let selectedAccount;
      let response;
      try {
        response = await getAccounts();
      }
      catch (err) {
        console.error("Selected account doesn't seem available...", err);

        // If user denied the request (e.g. Fortmatic), then disconnect
        if (err.code == "-32603") {
          this.disconnect();
          throw err;
        }

        // If it was impossible to get, then emit it as null and return
        if (this.selectedAccount$.getValue() !== null) {
          this.selectedAccount$.next(null);
        }
        return;
      }
      if (Array.isArray(response)) {
        selectedAccount = response[0];
      }
      else {
        selectedAccount = response;
      }
      if (this.selectedAccount$.getValue() !== selectedAccount) {
        this.selectedAccount$.next(selectedAccount);
      }

      // Base token balance
      let signer = this.signer$.getValue();
      if (isNotNullOrUndefined(signer)) {
        let balance;
        try {
          balance = await signer.getBalance();
        }
        catch (err) {
          console.error("Base token amount doesn't seem available...", err);

          // If it was impossible to get, then emit it as null and return
          if (this.baseTokenBalance$.getValue() !== null) {
            this.baseTokenBalance$.next(null);
          }
          return;
        }
        let ether = ethers.utils.formatEther(balance);
        if (this.baseTokenBalance$.getValue() !== ether) {
          this.baseTokenBalance$.next(ether);
        }
      }
    };

    let loop = async () => {
      await updateVars();
      this.updateVarsTimer = setTimeout(() => loop(), this.syncRate);
    }

    // Call the above immediately
    if (!this.updateVarsTimer) loop();
  };

}
