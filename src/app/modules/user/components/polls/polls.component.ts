import { Component, OnInit } from '@angular/core';
import payload from 'src/app/models/poll-payload';
import { LoginService } from 'src/app/services/login.service';
import { PollService } from 'src/app/services/poll.service';

@Component({
  selector: 'app-polls',
  templateUrl: './polls.component.html',
  styleUrls: ['./polls.component.css'],
})
export class PollsComponent implements OnInit {
  constructor(
    private _pollService: PollService,
    private _loginService: LoginService
  ) {}
  polls: payload[];
  test: Map<number, boolean> = new Map<number, boolean>();
  count: Map<number, number> = new Map<number, number>();
  hasVoted: Map<number, boolean> = new Map<number, boolean>();
  glowing: boolean = false;
  ngOnInit(): void {
    this.getPolls();
  }
  getPolls() {
    this._pollService.getPolls().subscribe((data: payload[]) => {
      this.polls = data;
      this.polls.forEach((poll) => {
        this.count[poll.id] = 0;
        poll.ideas.forEach((idea) => {
          this.test[idea.id] = false;
        });
      });
      this.userHasVoted();
    });
  }
  userHasVoted() {
    const user_id: number = JSON.parse(this._loginService.getUserId());
    this.polls.forEach((poll) => {
      this._pollService.userHasVoted(poll.id, user_id).subscribe((data) => {
        this.hasVoted[poll.id] = data;
        console.log(this.hasVoted)
      });
    });
  }
  vote(poll_id: number, idea_id: number) {
    if (this.test[idea_id] == true && this.count[poll_id] == 1) {
      this.test[idea_id] = false;
      this.count[poll_id] = 0;
    } else if (this.test[idea_id] == true && this.count[poll_id] == 0) {
      this.test[idea_id] = false;
      this.count[poll_id] = 0;
    } else if (this.test[idea_id] == false && this.count[poll_id] == 0) {
      this.test[idea_id] = true;
      this.count[poll_id] = 1;
    } else if (this.count[poll_id] == 1) {
      alert('You can only vote for one idea');
    }

    const user_id: number = JSON.parse(this._loginService.getUserId());

    this._pollService.votePoll(poll_id, idea_id, user_id).subscribe((data) => {
      this.getPolls();
    });
  }
}
