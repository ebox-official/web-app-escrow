import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Toast } from './toast/toast';

@Injectable({
  providedIn: 'root'
})
export class ToasterService {

  private _toast$ = new Subject<Toast>();
  toast$ = this._toast$.asObservable();

  constructor() { }

  addToaster(toast: Toast) {
    this._toast$.next(toast);
  }
}
