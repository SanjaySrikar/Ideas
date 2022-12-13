import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import types from 'src/app/mock-data/types';
import idea from 'src/app/models/idea';
import { IdeaService } from 'src/app/services/idea.service';
import { VotingService } from 'src/app/services/voting.service';
@Component({
  selector: 'app-idea-card',
  templateUrl: './idea-card.component.html',
  styleUrls: ['./idea-card.component.css'],
})
export class IdeaCardComponent implements OnInit {
  @Input() idea: idea;
  @Input() editMode: boolean;
  types: any;
  hasVoted: boolean = false;
  user_id: number = JSON.parse(localStorage.getItem('user_id'));
  constructor(
    private router: Router,
    private _ideaService: IdeaService,
    private _votingService: VotingService
  ) {
    this.types = types;
    this.idea = {
      name: '',
      topic: '',
      title: '',
      idea: '',
      upVotes: 0,
      downVotes: 0,
    };
  }
  editIdea(idea_id: number) {
    this.router.navigate(['/user/idea', idea_id]);
  }
  deleteIdea(idea_id: number) {
    this._ideaService.deleteIdea(idea_id).subscribe((data) => {
      alert('Idea deleted successfully.');
      this.router.navigate(['/user/my-ideas']).then(() => {
        window.location.reload();
      });
    });
  }
  userHasVoted(idea_id: number) {
    // toggle test based on this
    this._votingService
      .userHasVoted(idea_id, this.user_id)
      .subscribe((data: boolean) => {
        this.hasVoted = data;
      });
  }
  upVote(idea_id: number) {
    this._votingService.upVote(idea_id, this.user_id).subscribe((data) => {
      this.hasVoted = true;
    });
    if (this.hasVoted == true) {
      this._votingService
        .removeVote(idea_id, this.user_id)
        .subscribe((data) => {
          this.hasVoted = false;
        });
    }
  }
  download(id : number){
    this._ideaService.downloadIdea(id).subscribe((data) => {
      console.log(data);
    });
  }
  ngOnInit(): void {
    this.userHasVoted(this.idea.id);
  }
}
