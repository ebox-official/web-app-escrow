import { Injectable } from '@angular/core';
import { ethers } from "ethers";
import detectEthereumProvider from "@metamask/detect-provider";

// For Coinbase Wallet
import WalletLink from "walletlink";

// For Fortmatic
import Fortmatic from "fortmatic";

// For WalletConnect
import WalletConnectProvider from "@walletconnect/web3-provider";

// For Polkadot Wallet
import * as PolkadotExtensionDapp from "@polkadot/extension-dapp";
import * as ReefDefiEvmProvider from "@reef-defi/evm-provider";
import * as PolkadotApi from "@polkadot/api";

let APP_NAME = "ethbox";
let INFURA_API_KEY = "b5b51030cf3e451bb523a3f2ca10e3ff";
let FORTMATIC_API_KEY = "pk_test_ADCE42E053643A95";

@Injectable({
    providedIn: 'root'
})
export class ProvidersService {

    dictionary = {
        INJECTED: this.InjectedProviderConnector,
        METAMASK: this.MetaMaskConnector,
        BINANCE_CHAIN: this.BinanceConnector,
        // COINBASE: this.CoinbaseConnector,
        // FORTMATIC: this.FortmaticConnector,
        // WALLETCONNECT: this.WalletConnectConnector,
        // POLKADOT: this.PolkadotConnector
    };

    constructor() { }

    private getRPCs(infuraKey) {
        return [
            {
                rpcUrl: "https://mainnet.infura.io/v3/" + infuraKey,
                chainId: 1,
                networkName: "Ethereum Mainnet"
            },
            {
                rpcUrl: "https://rinkeby.infura.io/v3/" + infuraKey,
                chainId: 4,
                networkName: "Ethereum Testnet"
            },
            {
                rpcUrl: "https://bsc-dataseed.binance.org/",
                chainId: 56,
                networkName: "Binance Mainnet"
            },
            {
                rpcUrl: "https://data-seed-prebsc-1-s1.binance.org:8545/",
                chainId: 97,
                networkName: "Binance Testnet"
            },
            {
                rpcUrl: "https://rpc-mainnet.maticvigil.com/",
                chainId: 187,
                networkName: "Polygon Mainnet"
            },
            {
                rpcUrl: "https://rpc-mumbai.matic.today/",
                chainId: 80001,
                networkName: "Polygon Testnet"
            }
        ];
    };

    private async InjectedProviderConnector() {
        let provider = null;
        if (typeof window.ethereum !== 'undefined') {
            provider = window.ethereum;
            try {
                await provider.request({ method: 'eth_requestAccounts' })
            } catch (error) {
                throw new Error("User Rejected");
            }
        } else if (window["web3"]) {
            provider = window["web3"].currentProvider;
        } else {
            throw new Error("No Provider found");
        }

        // Get ethers provider and signer
        let ethersProvider = new ethers.providers.Web3Provider(provider, "any");
        let signer = ethersProvider.getSigner();

        return {
            provider: ethersProvider,
            signer,
            getNetwork: ethersProvider.getNetwork.bind(ethersProvider),
            getAccounts: ethersProvider.listAccounts.bind(ethersProvider)
        };
    }

    private async MetaMaskConnector() {
        let provider = await detectEthereumProvider();
        if (!provider) {
            throw new Error("MetaMask was not found.");
        }
        try {
            await provider["request"]({ method: 'eth_requestAccounts' });
        } catch (error) {
            throw new Error("User rejected.");
        }

        // Get ethers provider and signer
        let ethersProvider = new ethers.providers.Web3Provider(provider, "any");
        let signer = ethersProvider.getSigner();

        return {
            provider: ethersProvider,
            signer,
            getNetwork: ethersProvider.getNetwork.bind(ethersProvider),
            getAccounts: ethersProvider.listAccounts.bind(ethersProvider)
        };
    }

    private async BinanceConnector() {
        let provider = null;
        if (window["BinanceChain"]) {
            provider = window["BinanceChain"];
            try {
                await provider.request({ method: 'eth_requestAccounts' });
            } catch (error) {
                throw new Error("User rejected.");
            }
        } else {
            throw new Error("Binance Wallet was not found.");
        }

        // Get ethers provider and signer
        let ethersProvider = new ethers.providers.Web3Provider(provider, "any");
        let signer = ethersProvider.getSigner();

        return {
            provider: ethersProvider,
            signer,
            getNetwork: ethersProvider.getNetwork.bind(ethersProvider),
            getAccounts: ethersProvider.listAccounts.bind(ethersProvider)
        };
    }

    // // Setup of Coinbase configurations
    // private async CoinbaseConnector() {

    //     // Spawn a modal and ask the user to which network to connect
    //     let prompt = await new SmartPrompt();

    //     let rpcOptionsTemplate = getRPCs(INFURA_API_KEY)
    //         .map(({ rpcUrl, chainId, networkName }) =>
    //             `<option value="${rpcUrl};${chainId}">${networkName}</option>`
    //         )
    //         .join("");

    //     prompt.init({
    //         figureColor: "#2d2f31",
    //         groundColor: "#fafafa",
    //         title: "WalletLink - Choose a network",
    //         template: `<div style="display: grid; grid-gap: 1rem;">
    // <div>
    //     <p>
    //         <label>Network</label>
    //     </p>
    //     <select name="networkString" required="true">
    //         ${rpcOptionsTemplate}
    //     </select>
    // </div>
    // </div>`
    //     });

    //     let result = await prompt.spawn();

    //     let [networkUrl, chainId] = result.networkString.split(";");

    //     let walletLink = new WalletLink({ appName: APP_NAME });
    //     let provider = walletLink.makeWeb3Provider(networkUrl, chainId);
    //     await provider.enable();

    //     // Get ethers provider and signer
    //     let ethersProvider = new ethers.providers.Web3Provider(provider, "any");
    //     let signer = ethersProvider.getSigner();

    //     return {
    //         provider: ethersProvider,
    //         signer,
    //         getNetwork: () => ({ chainId }),
    //         getAccounts: ethersProvider.listAccounts.bind(ethersProvider)
    //     };
    // }

    // // Setup of Fortmatic configurations
    // private async FortmaticConnector() {

    //     // Spawn a modal and ask the user to which network to connect
    //     let prompt = await new SmartPrompt();

    //     let rpcOptionsTemplate = getRPCs(INFURA_API_KEY)
    //         .map(({ rpcUrl, chainId, networkName }) =>
    //             `<option value="${rpcUrl};${chainId}">${networkName}</option>`
    //         )
    //         .join("");

    //     prompt.init({
    //         figureColor: "#2d2f31",
    //         groundColor: "#fafafa",
    //         title: "Fortmatic - Choose a network",
    //         template: `<div style="display: grid; grid-gap: 1rem;">
    // <div>
    //     <p>
    //         <label>Network</label>
    //     </p>
    //     <select name="networkString" required="true">
    //         ${rpcOptionsTemplate}
    //     </select>
    // </div>
    // </div>`
    //     });

    //     let result = await prompt.spawn();

    //     let [rpcUrl, chainId] = result.networkString.split(";");

    //     let fm = new Fortmatic(FORTMATIC_API_KEY, { rpcUrl, chainId });

    //     // Get ethers provider and signer
    //     let ethersProvider = new ethers.providers.Web3Provider(fm.getProvider(), "any");
    //     let signer = ethersProvider.getSigner();

    //     return {
    //         provider: ethersProvider,
    //         signer,
    //         getNetwork: () => ({ chainId }),
    //         getAccounts: ethersProvider.listAccounts.bind(ethersProvider)
    //     };
    // }

    // // Setup of WalletConnect configurations
    // private async WalletConnectConnector() {

    //     // Spawn a modal and ask the user to which network to connect
    //     let prompt = await new SmartPrompt();

    //     let rpcOptionsTemplate = getRPCs(INFURA_API_KEY)
    //         .map(({ rpcUrl, chainId, networkName }) =>
    //             `<option value="${rpcUrl};${chainId}">${networkName}</option>`
    //         )
    //         .join("");

    //     prompt.init({
    //         figureColor: "#2d2f31",
    //         groundColor: "#fafafa",
    //         title: "WalletConnect - Choose a network",
    //         template: `<div style="display: grid; grid-gap: 1rem;">
    // <div>
    //     <p>
    //         <label>Network</label>
    //     </p>
    //     <select name="networkString" required="true">
    //         ${rpcOptionsTemplate}
    //     </select>
    // </div>
    // </div>`
    //     });

    //     let result = await prompt.spawn();

    //     let [_, chainId] = result.networkString.split(";");

    //     let RPCMapping = getRPCs(INFURA_API_KEY)
    //         .reduce((obj, rpc) => (obj[rpc.chainId] = rpc.rpcUrl, obj), {});

    //     // Create WalletConnect Provider
    //     let provider = new WalletConnectProvider({
    //         rpc: { ...RPCMapping },
    //         chainId
    //     });

    //     //  Enable session (triggers QR Code modal)
    //     await provider.enable();

    //     // Get ethers provider and signer
    //     let ethersProvider = new ethers.providers.Web3Provider(provider, "any");
    //     let signer = ethersProvider.getSigner();

    //     return {
    //         provider: ethersProvider,
    //         signer,
    //         getNetwork: ethersProvider.getNetwork.bind(ethersProvider),
    //         getAccounts: ethersProvider.listAccounts.bind(ethersProvider)
    //     };
    // }

    // // Setup of Polkadot configurations
    // private async PolkadotConnector() {

    //     // Return an array of all the injected sources
    //     // (this needs to be called first)
    //     let allInjected = await PolkadotExtensionDapp.web3Enable(APP_NAME);
    //     let injected;
    //     if (allInjected && allInjected[0] && allInjected[0].signer) {
    //         injected = allInjected[0].signer;
    //     }

    //     // Return an array of { address, meta: { name, source } }
    //     // (meta.source contains the name of the extension)
    //     let allAccounts = await PolkadotExtensionDapp.web3Accounts();
    //     let accountOpts = allAccounts
    //         .map(acc => `<option value="${acc.address}">${acc.address}</option>`)
    //         .join("");

    //     // Spawn a modal and ask the user to which account to connect
    //     let prompt = await new SmartPrompt();

    //     prompt.init({
    //         figureColor: "#2d2f31",
    //         groundColor: "#fafafa",
    //         title: "Polkadot{.js} - Choose account & network",
    //         template: `<div style="display: grid; grid-gap: 1rem;">
    // <span>To connect to the Reef chain you need to pair your Polkadot address. If you didn't bind already, then follow the tutorial <a href="https://freddycorly.medium.com/create-your-reef-chain-account-6b06ad323c6" target="_blank">Create your Reef chain account</a></span>
    // <div>
    //     <p>
    //         <label>Account</label>
    //     </p>
    //     <select name="account" required="true">
    //         ${accountOpts}
    //     </select>
    // </div>
    // <div>
    //     <p>
    //         <label>Network</label>
    //     </p>
    //     <select name="networkString" required="true">
    //         <option value="wss://rpc-testnet.reefscan.com/ws;reef-testnet">Reef Testnet</option>
    //         <option value="wss://rpc.reefscan.com/ws;reef-mainnet">Reef Mainnet</option>
    //     </select>
    // </div>
    // </div>`
    //     });

    //     let { account, networkString } = await prompt.spawn();
    //     let [networkUrl, chainId] = networkString.split(";");

    //     let provider = new ReefDefiEvmProvider.Provider({
    //         provider: new PolkadotApi.WsProvider(networkUrl)
    //     });

    //     await provider.api.isReady;

    //     let signer = new ReefDefiEvmProvider.Signer(
    //         provider,
    //         account,
    //         injected
    //     );

    //     if (!(await signer.isClaimed())) {
    //         console.log(
    //             "No claimed EVM account found -> claimed default EVM account: ",
    //             await signer.getAddress()
    //         );
    //         await signer.claimDefaultAccount();
    //     }

    //     let evmAddress = await signer.queryEvmAddress();

    //     return {
    //         provider,
    //         signer,
    //         getNetwork: () => ({ chainId }),
    //         getAccounts: () => evmAddress
    //     };
    // }

}
