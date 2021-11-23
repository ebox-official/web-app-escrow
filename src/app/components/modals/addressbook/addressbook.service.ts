import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ToasterService } from 'src/app/components/toaster/toaster.service';
import { Contact } from './contact';
import { UUID } from "../../../utilities/utils";
import { ConnectionService } from 'src/app/services/connection/connection.service';

@Injectable({
  providedIn: 'root'
})
export class AddressbookService {

  contacts$ = new BehaviorSubject([]);
  private emitContacts = this.contacts$.next.bind(this.contacts$);
  
  private localStorageKey = "ebox-addressbook";

  constructor(
    private toasterService: ToasterService,
    private connection: ConnectionService
  ) {
    this.contacts$.next(this.read());

    // Get rid of next so that consumers can't tamper with the data
    delete this.contacts$.next;
  }

  create(contact: Contact): Contact|false {

    this.checkAddress(contact.address);

    contact.uuid = UUID();
    let contacts = this.read();
    contacts.push(contact);
    this.emitContacts(contacts);
    localStorage.setItem(this.localStorageKey, JSON.stringify(contacts));
    return contact;
  }

  whois(address: string): Contact|false {
    let all = this.read();
    let found = all.find(c => c.address === address);
    if (found) {
      return found;
    }
    return false;
  }

  read(): Contact[] {
    let results = [];
    if (localStorage.getItem(this.localStorageKey)) {
      results = JSON.parse(localStorage.getItem(this.localStorageKey));
    }
    return results;
  }

  update(contact: Contact, newContact: Contact): Contact|false {

    this.checkAddress(newContact.address);

    let contacts = this.read();
    let index = contacts.findIndex(_contact => contact.uuid === _contact.uuid);
    if (index < 0) {
      let errTxt = "Contact not found, refresh and try again.";
      this.toasterService.addToaster({ color: "danger", message: errTxt });
      throw errTxt;
    }
    Object.assign(contact, newContact);
    contacts.splice(index, 1, contact);
    this.emitContacts(contacts);
    localStorage.setItem(this.localStorageKey, JSON.stringify(contacts));
    return contact;
  }

  delete(contact: Contact) {
    let contacts = this.read();
    let index = contacts.findIndex(_contact => contact.uuid === _contact.uuid);
    if (index < 0) {
      this.toasterService.addToaster({ color: "danger", message: "Contact not found." });
      return;
    }
    contacts.splice(index, 1);
    this.emitContacts(contacts);
    localStorage.setItem(this.localStorageKey, JSON.stringify(contacts));
    return contact;
  }

  private checkAddress(address: string) {
    if(!this.connection.isAddressValid(address)) {
      let errTxt = "Invalid address, please try again."
      this.toasterService.addToaster({ color: "danger", message: errTxt });
      throw errTxt;
    }
  }
}
