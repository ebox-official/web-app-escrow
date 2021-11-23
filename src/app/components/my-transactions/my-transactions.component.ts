import { Component, OnInit } from '@angular/core';
import { FiltersService } from '../offcanvases/filters/filters.service';

@Component({
  selector: 'app-my-transactions',
  templateUrl: './my-transactions.component.html',
  styleUrls: ['./my-transactions.component.css']
})
export class MyTransactionsComponent implements OnInit {

  constructor(public filtersService: FiltersService) { }

  ngOnInit(): void {
  }

}
