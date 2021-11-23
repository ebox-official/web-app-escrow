import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ModalsService } from '../../modals.service';
import { AddressbookService } from '../addressbook.service';

@Component({
  selector: 'app-addressbook-read',
  templateUrl: './addressbook-read.component.html',
  styleUrls: ['./addressbook-read.component.css']
})
export class AddressbookReadComponent implements OnInit, AfterViewInit {

  selectedContact;
  contacts$;

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
    this.contacts$ = this.addressbookService.contacts$;
  }

  async updateContact(evt, contact) {
    evt.stopPropagation();

    await this.ms.close(AddressbookReadComponent);
    this.ms.open(this.ms.modals.ADDRESSBOOK_UPDATE, contact);
  }

  confirmContact() {
    this.service.resolve(this.selectedContact);
  }

  async createContact() {
    await this.ms.close(AddressbookReadComponent);
    this.ms.open(this.ms.modals.ADDRESSBOOK_CREATE);
  }

  async deleteContact(evt, contact) {
    evt.stopPropagation();

    await this.ms.close(AddressbookReadComponent);

    let accepted = await this.ms.openWithPromise(this.ms.modals.ARE_YOU_SURE);
    if (accepted) {
      this.addressbookService.delete(contact);
    }

    this.ms.open(AddressbookReadComponent);
  }

  trackByFn(_, item) {
    return item.uuid;
  }

}
