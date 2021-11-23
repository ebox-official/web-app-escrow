import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ModalsService } from '../../modals.service';
import { TokenSelectorService } from '../token-selector.service';

@Component({
  selector: 'app-token-selector-read',
  templateUrl: './token-selector-read.component.html',
  styleUrls: ['./token-selector-read.component.css']
})
export class TokenSelectorReadComponent implements OnInit, AfterViewInit {

  selectedToken;
  tokens$;

  // modals service stuff
  @Input("service") service;
  @Input("data") data;
  @ViewChild("modal") modal: ElementRef;

  ngAfterViewInit() {
    this.service.init(this.modal.nativeElement);
  }
  // /modals service stuff

  constructor(
    private ms: ModalsService,
    private tokenSelector: TokenSelectorService,
    private tokenSelectorService: TokenSelectorService
  ) { }

  ngOnInit(): void {
    this.tokens$ = this.tokenSelector.tokens$;
  }

  confirmToken() {
    this.service.resolve(this.selectedToken);
  }

  async addToken() {
    await this.ms.close(TokenSelectorReadComponent);
    this.ms.open(this.ms.modals.TOKEN_SELECTOR_CREATE);
  }

  async deleteToken(evt, token) {
    evt.stopPropagation();

    await this.ms.close(TokenSelectorReadComponent);

    let accepted = await this.ms.openWithPromise(this.ms.modals.ARE_YOU_SURE);
    if (accepted) {
      this.tokenSelectorService.delete(token);
    }

    this.ms.open(TokenSelectorReadComponent);
  }

  trackByFn(_, item) {
    return item.address;
  }

}
