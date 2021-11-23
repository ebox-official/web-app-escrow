import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { AddressbookService } from '../addressbook.service';
import { formToObject } from "../../../../utilities/utils";
import { ModalsService } from '../../modals.service';

@Component({
  selector: 'app-addressbook-update',
  templateUrl: './addressbook-update.component.html'
})
export class AddressbookUpdateComponent implements OnInit, AfterViewInit {

  // modals service stuff
  @Input("service") service;
  @Input("data") data;
  @ViewChild("modal") modal: ElementRef;

  ngAfterViewInit() {
    this.service.init(this.modal.nativeElement);
  }
  // /modals service stuff

  constructor(
    private addressbookService: AddressbookService,
    private ms: ModalsService
  ) { }

  ngOnInit(): void {
  }

  updateContact(evt, contact) {
    let newContact = formToObject(evt.target);
    contact = this.addressbookService.update(contact, newContact);
    if (!contact) {
      return;
    }
    this.dismiss();
  }

  async dismiss() {
    await this.ms.close(AddressbookUpdateComponent);
    this.ms.open(this.ms.modals.ADDRESSBOOK_READ);
  }

}
