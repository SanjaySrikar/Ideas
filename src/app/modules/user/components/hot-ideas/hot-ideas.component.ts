import { Component, OnInit } from '@angular/core';
import idea from 'src/app/models/idea';
import { IdeaService } from 'src/app/services/idea.service';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-hot-ideas',
  templateUrl: './hot-ideas.component.html',
  styleUrls: ['./hot-ideas.component.css']
})
export class HotIdeasComponent implements OnInit {

  constructor(private _ideaService: IdeaService) {}
  ideas: idea[] = [];
  ngOnInit(): void {
    this.getTop3Ideas();
    // after window scroll to 1/3 of the page, make app-users-list sticky

  }
  getTop3Ideas() {
    this._ideaService.getTop3Ideas().subscribe({
      next: (data) => {
        this.ideas = data;
      },
      error: (err) => {
        console.log(err);
      },
    });

  }

}
