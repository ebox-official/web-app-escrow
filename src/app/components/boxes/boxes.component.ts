import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EboxService } from 'src/app/services/ebox.service';
import { FiltersService } from '../offcanvases/filters/filters.service';
import { map } from 'rxjs/operators';
import { combineLatest } from 'rxjs';
import { AppBox } from './box';

@Component({
  selector: 'app-boxes',
  template: `
    <div class="skeletonized">
      <ng-container *ngIf="boxes$ | async | listSearch: (filterDict$ | async) as boxes">
        <ng-container *ngIf="boxes.length === 0 else boxesFound">
          <div class="p-3">No boxes found</div>
        </ng-container>
        <ng-template #boxesFound>
          <app-box-list-item *ngFor="let b of boxes; trackBy: boxId" [box]="b" [mode]="mode"></app-box-list-item>
        </ng-template>
      </ng-container>
    </div>
  `
})
export class BoxesComponent implements OnInit {

  boxes$;
  filterDict$;

  mode;

  constructor(
    private route: ActivatedRoute,
    private eboxService: EboxService,
    private filtersService: FiltersService
  ) { }
  
  ngOnInit() {
    this.mode = this.route.snapshot.data.mode;

    // Sort boxes based on the value of sortBy from FiltersService
    this.boxes$ = combineLatest([
      this.eboxService['boxes_' + this.mode + '$'],
      this.filtersService.sortBy$
    ]).
      pipe(
        map(([boxes, sortBy]) => {

          if (!boxes || !sortBy) return boxes;

          // Use a copy of the boxes to not mess up with Angular CD
          let copy = JSON.parse(JSON.stringify(boxes));
          if (sortBy === "dateDesc") {
            copy["sort"]((a, b) => Number(a.timestamp) - Number(b.timestamp));
            return copy;
          }
          if (sortBy === "dateAsc") {
            copy["sort"]((a, b) => Number(b.timestamp) - Number(a.timestamp));
            return copy;
          }
        })
      );
    
    this.filterDict$ = this.filtersService.filterDict$;
  }

  // This piece of code tells Angular how to track boxes efficiently
  boxId(_, box) {
    return box.id;
  }

}
