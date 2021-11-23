import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { LoadingService } from './loading.service';

@Component({
  selector: 'app-loading',
  template: `
    <style>
      div {
        background-color: #0008;
      }
      div::after {
        content: "";
        position: absolute;
        top: calc(50% - 85px);
        left: calc(50% - 85px);
        width: 170px;
        height: 170px;
        border: 3rem solid var(--bs-primary);
        animation: Rotate 3s linear infinite;
      }
      @keyframes Rotate {
        100% {
          transform: rotateZ(360deg);
        }
      }
    </style>
    <div *ngIf="loadingService.ids$ | async as ids" class="my-loading position-absolute top-0 start-0 w-100 h-100"
    [ngClass]="{
      'd-none': !ids[id],
      'd-block': ids[id]
    }" style="z-index: 18; overflow: hidden;"></div>
  `
})
export class LoadingComponent implements OnInit {

  @Input("id") id;

  constructor(
    private elRef: ElementRef,
    public loadingService: LoadingService
  ) { }

  ngOnInit(): void {

    // If no ID was provided, then stop here
    if (!this.id) {
      throw new Error("No ID provided to LoadingComponent.");
    }

    // If this loading indicator is on, then set overflow of its parent to hidden
    let el = this.elRef.nativeElement;
    let parent = el.parentElement;
    let prevScroll;
    this.loadingService.ids$.
      subscribe(ids => {
        if (ids[this.id] && !parent.classList.contains("overflow-hidden")) {
          prevScroll = parent.scrollTop;
          parent.scrollTop = 0;
          parent.classList.add("overflow-hidden");
        }
        if (!ids[this.id] && parent.classList.contains("overflow-hidden")) {
          parent.classList.remove("overflow-hidden");
          parent.scrollTop = prevScroll;
        }
      });
  }

}
