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
import { ModalsService } from 'src/app/components/modals/modals.service';

let APP_NAME = "ethbox";
let INFURA_API_KEY = "b5b51030cf3e451bb523a3f2ca10e3ff";
let FORTMATIC_API_KEY = "pk_test_ADCE42E053643A95";

@Injectable({
    providedIn: 'root'
})
export class ProvidersService {

    RPCs = [
        {
            rpcUrl: "https://mainnet.infura.io/v3/" + INFURA_API_KEY,
            chainId: 1,
            networkName: "Ethereum"
        },
        {
            rpcUrl: "https://rinkeby.infura.io/v3/" + INFURA_API_KEY,
            chainId: 4,
            networkName: "Rinkeby Testnet"
        },
        {
            rpcUrl: "https://bsc-dataseed.binance.org/",
            chainId: 56,
            networkName: "Binance Smart Chain"
        },
        {
            rpcUrl: "https://data-seed-prebsc-1-s1.binance.org:8545/",
            chainId: 97,
            networkName: "BSC Testnet"
        },
        {
            rpcUrl: "https://rpc-mainnet.maticvigil.com/",
            chainId: 187,
            networkName: "Polygon"
        },
        {
            rpcUrl: "https://rpc-mumbai.matic.today/",
            chainId: 80001,
            networkName: "Polygon Testnet"
        },
        {
            rpcUrl: "https://rpc.api.moonbeam.network",
            chainId: 1284,
            networkName: "Moonbeam"
        },
        {
            rpcUrl: "https://rpc.api.moonriver.moonbeam.network",
            chainId: 1285,
            networkName: "Moonriver"
        },
        {
            rpcUrl: "https://mainnet.optimism.io/",
            chainId: 10,
            networkName: "Optimism"
        }
    ];

    dictionary = {
        INJECTED: this.InjectedProviderConnector,
        METAMASK: this.MetaMaskConnector,
        BINANCE_CHAIN: this.BinanceConnector,
        FORTMATIC: this.FortmaticConnector,
        COINBASE: this.CoinbaseConnector,
        WALLETCONNECT: this.WalletConnectConnector,
        POLKADOT: this.PolkadotConnector
    };

    constructor(private ms: ModalsService) { }

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

    // Setup of Fortmatic configurations
    private async FortmaticConnector() {

        let { rpcUrl, chainId } = await this.ms.openWithPromise(this.ms.modals.CHOOSE_NETWORK);

        let fm = new Fortmatic(FORTMATIC_API_KEY, { rpcUrl, chainId });

        // Get ethers provider and signer
        let ethersProvider = new ethers.providers.Web3Provider(fm.getProvider(), "any");
        let signer = ethersProvider.getSigner();

        return {
            provider: ethersProvider,
            signer,
            getNetwork: () => ({ chainId }),
            getAccounts: ethersProvider.listAccounts.bind(ethersProvider)
        };
    }

    // Setup of Coinbase configurations
    private async CoinbaseConnector() {

        let { rpcUrl, chainId } = await this.ms.openWithPromise(this.ms.modals.CHOOSE_NETWORK);

        let walletLink = new WalletLink({ appName: APP_NAME });
        let provider = walletLink.makeWeb3Provider(rpcUrl, chainId);
        await provider.enable();

        // Get ethers provider and signer
        let ethersProvider = new ethers.providers.Web3Provider(provider, "any");
        let signer = ethersProvider.getSigner();

        return {
            provider: ethersProvider,
            signer,
            getNetwork: () => ({ chainId }),
            getAccounts: ethersProvider.listAccounts.bind(ethersProvider)
        };
    }

    // Setup of WalletConnect configurations
    private async WalletConnectConnector() {

        let { chainId } = await this.ms.openWithPromise(this.ms.modals.CHOOSE_NETWORK);

        let RPCMapping = this.RPCs.
            reduce((obj, rpc) => (obj[rpc.chainId] = rpc.rpcUrl, obj), {});

        // Create WalletConnect Provider
        let provider = new WalletConnectProvider({
            rpc: { ...RPCMapping },
            chainId
        });

        //  Enable session (triggers QR Code modal)
        await provider.enable();

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

    // Setup of Polkadot configurations
    private async PolkadotConnector() {

        // Return an array of all the injected sources
        // (this needs to be called first)
        let allInjected = await PolkadotExtensionDapp.web3Enable(APP_NAME);
        let injected;
        if (allInjected && allInjected[0] && allInjected[0].signer) {
            injected = allInjected[0].signer;
        }

        // Return an array of { address, meta: { name, source } }
        // (meta.source contains the name of the extension)
        let accounts = await PolkadotExtensionDapp.web3Accounts();

        let { account, rpcUrl, chainId } = await this.ms.
            openWithPromise(this.ms.modals.POLKADOT_PROVIDER_MODAL, { accounts });

        let provider = new ReefDefiEvmProvider.Provider({
            provider: new PolkadotApi.WsProvider(rpcUrl)
        });

        await provider.api.isReady;

        let signer = new ReefDefiEvmProvider.Signer(
            provider,
            account,
            injected
        );

        if (!(await signer.isClaimed())) {
            console.log(
                "No claimed EVM account found -> claimed default EVM account: ",
                await signer.getAddress()
            );
            await signer.claimDefaultAccount();
        }

        let evmAddress = await signer.queryEvmAddress();

        return {
            provider,
            signer,
            getNetwork: () => ({ chainId }),
            getAccounts: () => evmAddress
        };
    }

}
