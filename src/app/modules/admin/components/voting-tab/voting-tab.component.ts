import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import payload from 'src/app/models/poll-payload';
import { PollService } from 'src/app/services/poll.service';
@Component({
  selector: 'app-voting-tab',
  templateUrl: './voting-tab.component.html',
  styleUrls: ['./voting-tab.component.css'],
})
export class VotingTabComponent implements OnInit {
  constructor(private _pollService: PollService) {}
  polls: payload[];
  ngOnInit(): void {
    this.getPolls();
  }
  getPolls() {
    this._pollService.getPolls().subscribe((data) => {
      this.polls = data;
    });
  }


}
