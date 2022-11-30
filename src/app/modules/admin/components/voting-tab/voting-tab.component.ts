import { Component, OnInit } from '@angular/core';
import polls from 'src/app/mock-data/poll';
@Component({
  selector: 'app-voting-tab',
  templateUrl: './voting-tab.component.html',
  styleUrls: ['./voting-tab.component.css'],
})
export class VotingTabComponent implements OnInit {
  constructor() {
    this.polls = polls;
  }
  polls: any;
  ngOnInit(): void {}
}
