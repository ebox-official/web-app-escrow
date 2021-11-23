import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { AddressbookService } from '../addressbook.service';
import { formToObject } from "../../../../utilities/utils";
import { ModalsService } from '../../modals.service';
import { ConnectionService } from 'src/app/services/connection/connection.service';

@Component({
  selector: 'app-addressbook-create',
  templateUrl: './addressbook-create.component.html'
})
export class AddressbookCreateComponent implements OnInit, AfterViewInit {

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

  createContact(evt) {

    // Extract fields from form
    let contact = formToObject(evt.target);

    // Add to the addressbook. If successful, then dismiss
    if (this.addressbookService.create(contact)) {
      this.dismiss();
    }
  }

  async dismiss() {
    await this.ms.close(AddressbookCreateComponent);
    this.ms.open(this.ms.modals.ADDRESSBOOK_READ);
  }

}
