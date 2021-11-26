import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FINISHED, LIVE } from '../voting';

@Component({
  selector: 'app-voting-list-item',
  templateUrl: './voting-list-item.component.html',
  styleUrls: ['./voting-list-item.component.css']
})
export class VotingListItemComponent implements OnInit {

  LIVE = LIVE;
  FINISHED = FINISHED;

  @Input("voting") voting;
  @Input("mode") mode;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  goToDetails() {
    this.router.navigate(["./", this.voting.n], { relativeTo: this.route });
  }

}
