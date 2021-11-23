import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ConsoleMessage } from './console-message/console-message';

@Injectable({
  providedIn: 'root'
})
export class ConsoleService {

  private _message$ = new Subject<ConsoleMessage>();
  message$ = this._message$.asObservable();

  constructor() { }

  addMessage(message: ConsoleMessage) {
    message.timestamp = new Date();
    this._message$.next(message);
  }
}
