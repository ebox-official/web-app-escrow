import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FiltersService {

  touched = false;
  sortBy$ = new BehaviorSubject(undefined);
  filterDict$ = new BehaviorSubject(undefined);

  constructor() { }
}
