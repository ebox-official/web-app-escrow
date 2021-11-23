import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { TokenSelectorService } from '../token-selector.service';
import { formToObject } from "../../../../utilities/utils";
import { ModalsService } from '../../modals.service';

@Component({
  selector: 'app-token-selector-create',
  templateUrl: './token-selector-create.component.html'
})
export class TokenSelectorCreateComponent implements OnInit, AfterViewInit {

  // modals service stuff
  @Input("service") service;
  @Input("data") data;
  @ViewChild("modal") modal: ElementRef;

  ngAfterViewInit() {
    this.service.init(this.modal.nativeElement);
  }
  // /modals service stuff

  constructor(
    private tokenSelectorService: TokenSelectorService,
    private ms: ModalsService
  ) { }

  ngOnInit(): void {
  }

  async addToken(evt) {
    let { address } = formToObject(evt.target);
    let result = await this.tokenSelectorService.create(address);
    if (result) {
      this.dismiss();
    }
  }

  async dismiss() {
    await this.ms.close(TokenSelectorCreateComponent);
    this.ms.open(this.ms.modals.TOKEN_SELECTOR_READ);
  }

}
