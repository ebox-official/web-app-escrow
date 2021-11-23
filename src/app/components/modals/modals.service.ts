import { Injectable } from '@angular/core';
import { ComponentFactoryResolver } from '@angular/core';
import { DclHostDirective } from 'src/app/directives/dcl-host.directive';
import { AddressbookCreateComponent } from './addressbook/addressbook-create/addressbook-create.component';
import { AddressbookReadComponent } from './addressbook/addressbook-read/addressbook-read.component';
import { AddressbookUpdateComponent } from './addressbook/addressbook-update/addressbook-update.component';
import { AllowContractComponent } from './allow-contract/allow-contract.component';
import { AreYouSureComponent } from './are-you-sure/are-you-sure.component';
import { TokenSelectorCreateComponent } from './token-selector/token-selector-create/token-selector-create.component';
import { TokenSelectorReadComponent } from './token-selector/token-selector-read/token-selector-read.component';

@Injectable({
  providedIn: 'root'
})
export class ModalsService {

  // To add a new modal follow the following steps:
  // 1. Make a new component with boostrap's markup for a modal
  // 2. Mark .modal.fade with #modal
  // 3. Inside you new component class put the following:
  //   @Input("service") service;
  //   @Input("data") data;
  //   @ViewChild("modal") modal: ElementRef;
  //
  //   ngAfterViewInit() {
  //     this.service.init(this.modal.nativeElement);
  //   }
  // 4. Add to modalsService.modals the entry for your new modal

  // Public dictionary with all the available modals
  modals = {
    ARE_YOU_SURE: AreYouSureComponent,
    TOKEN_SELECTOR_CREATE: TokenSelectorCreateComponent,
    TOKEN_SELECTOR_READ: TokenSelectorReadComponent,
    ADDRESSBOOK_CREATE: AddressbookCreateComponent,
    ADDRESSBOOK_READ: AddressbookReadComponent,
    ADDRESSBOOK_UPDATE: AddressbookUpdateComponent,
    ALLOW_CONTRACT: AllowContractComponent,
    // Add new modal entries here (4.)
  };

  private _modals = {};

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  // Open a modal with promise (has to be resolved in the component, on resolve it will close)
  // await this.modalsService.openWithPromise(
  //   this.modalsService.modals.ARE_YOU_SURE,
  //   { text: "Are you sure" }
  // );
  openWithPromise(component, newData = {}): Promise<any> {

    let componentName = this.getComponentName(component);
    if (!componentName) return;

    let { data, service } = this._modals[componentName];

    // Inject data into the component and show modal
    Object.assign(data, newData);
    service.bootstrapModal.show();

    // Return a promoise that the modal can resolve
    return new Promise(resolve =>
      service.resolve = (data) => {
        this.close(component, () => resolve(data));
      }
    );
  }

  // Open a modal
  // this.modalsService.open({ text: "Are you sure" });
  open(component, newData = {}): void {

    let componentName = this.getComponentName(component);
    if (!componentName) return;

    let { data, service } = this._modals[componentName];

    // Inject data into the component and show modal
    Object.assign(data, newData);
    service.bootstrapModal.show();
  }

  // Close a modal
  // await this.modalsService.close();
  close(component, callback?) {

    let componentName = this.getComponentName(component);
    if (!componentName) return;

    let { service } = this._modals[componentName];

    // Return a promise that will resolve on hidden
    return new Promise(resolve => {
      let evtListener = () => {
        if (callback) {
          callback();
        }
        resolve("Bootstrap modal hidden.");
        service.nativeElement.removeEventListener("hidden.bs.modal", evtListener);
      };
      service.nativeElement.addEventListener("hidden.bs.modal", evtListener);
      service.bootstrapModal.hide();
    });
  }

  add(dclHost: DclHostDirective, componentName: string) {

    // Search for the modal requested
    let modalComponent = this.modals[componentName];
    if (!modalComponent) {
      console.error("Modal component not found.");
      return;
    }

    // If already instatiated, then do nothing
    let found = this._modals[componentName];
    if (found) {
      console.error("Modal already exists.");
      return;
    }

    // Instance the component and save references to params and data for later use
    const factory = this.componentFactoryResolver.resolveComponentFactory(modalComponent);
    const componentRef = dclHost.viewContainerRef.createComponent(factory);
    let instance = {
      service: {
        init: function (nativeElement) {
          this.nativeElement = nativeElement;
          this.bootstrapModal = new window["bootstrap"].Modal(nativeElement);
        },
        nativeElement: undefined,
        bootstrapModal: undefined,
      },
      data: {}
    };
    Object.assign(componentRef.instance, instance);
    this._modals[componentName] = componentRef.instance;
  }

  private getComponentName(component) {
    let componentName = Object.entries(this.modals).find(entry => entry[1] === component)[0];
    if (!componentName) {
      console.error("Modal not found.");
      return false;
    }
    return componentName;
  }

}
