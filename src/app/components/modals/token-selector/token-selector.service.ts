import { Injectable } from '@angular/core';
import { ToasterService } from 'src/app/components/toaster/toaster.service';
import { Token } from './token';
import { chainTokenDict } from 'src/app/data/tokens';
import { ConnectionService } from 'src/app/services/connection/connection.service';
import { ERC20_ABI } from 'src/app/data/abis';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenSelectorService {

  tokens$ = new BehaviorSubject([]);
  private emitTokens = this.tokens$.next.bind(this.tokens$);

  tokenLookup;

  private localStorageKey = "ebox-custom-tokens";

  constructor(
    private toasterService: ToasterService,
    private connection: ConnectionService
  ) {

    // Optimize the search with a lookup object
    this.tokens$.subscribe(tokens => {
      this.tokenLookup = {};
      tokens.forEach(token => this.tokenLookup[token.address] = token);
    });

    // Emit tokens on connection
    this.connection.isConnected$.subscribe((isConnected) => {
      if (!isConnected) {
        this.emitTokens([]);
        return;
      }
      this.emitTokens(this.read());
    });

    // Get rid of next so that consumers can't tamper with the data
    delete this.tokens$.next;
  }

  // Read only query
  async getTokenInfo(address: string): Promise<Token> {

    let result: Token = {
      address: this.connection.checksumAddress(address),
      name: undefined,
      symbol: undefined,
      decimals: undefined,
      thumb: "assets/img/unknown-icon.png"
    };

    let provider = this.connection.provider$.getValue();
    let contract = new this.connection.ethers.Contract(address, ERC20_ABI, provider);

    // Get name, symbol, decimals and thumb
    let found = this.tokenLookup[address];
    if (found) { // If the token is in the curated list, then take the data from there
      Object.assign(result, found);
    }
    else { // Otherwise take the data from the blockchain
      let [ name, symbol, decimals ] = await Promise.all([
        contract.name(),
        contract.symbol(),
        contract.decimals()
      ]);
      result.name = name;
      result.symbol = symbol;
      result.decimals = decimals;
    }

    return result;
  }

  async create(address: string): Promise<Token|false> {

    let chainId = this.connection.chainId$.getValue();

    let token;
    try {
      token = await this.getTokenInfo(address);
    }
    catch (err) {
      this.toasterService.addToaster({ color: "danger", message: "The address provided is incorrect." });
      return;
    }

    // Mark the token as custom (to have the delete button in the UI later)
    token.isCustom = true;

    let tokens = this.read(true);

    // Check if a token with this address already exists
    let found = this.read().find(_token => _token.address === token.address);
    if (found) {
      this.toasterService.addToaster({ color: "danger", message: "A token with this address already exists." });
      return false;
    }
    tokens.push(token);
    localStorage.setItem(this.localStorageKey + chainId, JSON.stringify(tokens));
    this.emitTokens(this.read());
    return token;
  }

  read(onlyCustom?): Token[] {

    let chainId = this.connection.chainId$.getValue();

    // Custom tokens
    let customTokens = [];
    if (localStorage.getItem(this.localStorageKey + chainId)) {
      customTokens = JSON.parse(localStorage.getItem(this.localStorageKey + chainId));
    }

    // Curated tokens
    let curatedTokens = onlyCustom ? [] : chainTokenDict[chainId] || [];

    return [
      ...customTokens,
      ...curatedTokens
    ];
  }

  delete(token: Token) {

    let chainId = this.connection.chainId$.getValue();

    let tokens = this.read(true);

    let index = tokens.findIndex(_token => token.address === _token.address);
    if (index < 0) {
      this.toasterService.addToaster({ color: "danger", message: "Token not found." });
      return;
    }
    tokens.splice(index, 1);
    localStorage.setItem(this.localStorageKey + chainId, JSON.stringify(tokens));
    this.emitTokens(this.read());
    return token;
  }
}
