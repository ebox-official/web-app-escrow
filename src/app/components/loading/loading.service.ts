import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  ids = {};
  ids$ = new BehaviorSubject(this.ids);
  private emitIds = this.ids$.next.bind(this.ids$);

  constructor() {

    // Get rid of next so that consumers can't tamper with the data
    delete this.ids$.next;
  }

  on(id) {
    this.ids[id] = true;
    this.emitIds(this.copyOfIds());
  }

  off(id) {
    delete this.ids[id];
    this.emitIds(this.copyOfIds());
  }

  private copyOfIds() {
    return JSON.parse(JSON.stringify(this.ids));
  }
}
