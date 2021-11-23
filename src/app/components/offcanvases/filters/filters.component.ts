import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalsService } from 'src/app/components/modals/modals.service';
import { Token } from 'src/app/components/modals/token-selector/token';
import { formToObject } from 'src/app/utilities/utils';
import { COMPLETE, ONE_WAY, OTC_TRADE, PENDING } from '../../boxes/box';
import { FiltersService } from './filters.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  @ViewChild("form") form;

  // These are generic because I only need them for reset
  @ViewChild("defaultSortBy") defaultSortBy;
  @ViewChild("status1") status1;
  @ViewChild("status2") status2;
  @ViewChild("type1") type1;
  @ViewChild("type2") type2;

  PENDING = PENDING;
  COMPLETE = COMPLETE;
  ONE_WAY = ONE_WAY;
  OTC_TRADE = OTC_TRADE;

  filterDict = {
    status: [],
    mode: [],
    sendTokenInfo: undefined,
    requestTokenInfo: undefined
  }

  constructor(
    private ms: ModalsService,
    private filtersService: FiltersService
  ) { }

  ngOnInit(): void {
    this.filtersService.sortBy$.next("dateAsc"); // Emit the default value of sortBy
  }

  private addFilter(property, condition, value) {
    let foundIndex = this.filterDict[property].findIndex(x => x === value);
    if (condition) {
      if (foundIndex === -1) {
        this.filterDict[property].push(value);
      }
    }
    else {
      if (foundIndex > -1) {
        this.filterDict[property].splice(foundIndex, 1);
      }
    }
  }

  reset() {
    
    // Remove tokens
    this.filterDict.sendTokenInfo = undefined;
    this.filterDict.requestTokenInfo = undefined;

    // Reset inputs
    this.defaultSortBy.nativeElement.checked = true;
    this.status1.nativeElement.checked = true;
    this.status2.nativeElement.checked = true;
    this.type1.nativeElement.checked = true;
    this.type2.nativeElement.checked = true;

    // Apply the reset
    this.apply(true);
  }

  removeToken(what: "send"|"request", token: Token) {
    let foundIndex = this.filterDict[what + "TokenInfo"].find(t => t.address === token.address);
    this.filterDict[what + "TokenInfo"].splice(foundIndex, 1);
    if (!this.filterDict[what + "TokenInfo"].length) this.filterDict[what + "TokenInfo"] = null;
  }

  async spawnTokenSelector(what: "send"|"request") {
    let token: Token = await this.ms.openWithPromise(this.ms.modals.TOKEN_SELECTOR_READ);
    if (!this.filterDict[what + "TokenInfo"]) this.filterDict[what + "TokenInfo"] = [];
    let found = this.filterDict[what + "TokenInfo"].find(t => t.address === token.address);
    if (!found) this.filterDict[what + "TokenInfo"].push(token);
  }

  apply(fromReset?: boolean) {

    // Set touched state
    this.filtersService.touched = !fromReset;

    // Parse the data from the form and add filters
    let formObject = formToObject(this.form.nativeElement);
    this.addFilter("status", formObject[PENDING] === "on", PENDING);
    this.addFilter("status", formObject[COMPLETE] === "on", COMPLETE);
    this.addFilter("mode", formObject[ONE_WAY] === "on", ONE_WAY);
    this.addFilter("mode", formObject[OTC_TRADE] === "on", OTC_TRADE);

    // Emit the value of sortBy
    this.filtersService.sortBy$.next(formObject.sortBy);

    // If filters have changed, then emit a copy
    let oldString = JSON.stringify(this.filtersService.filterDict$.getValue());
    let newString = JSON.stringify(this.filterDict);
    if (newString !== oldString) {
      this.filtersService.filterDict$.next(JSON.parse(newString));
    }
  }

}
