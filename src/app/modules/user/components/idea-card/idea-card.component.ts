import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import types from 'src/app/mock-data/types';
import idea from 'src/app/models/idea';
import { IdeaService } from 'src/app/services/idea.service';
@Component({
  selector: 'app-idea-card',
  templateUrl: './idea-card.component.html',
  styleUrls: ['./idea-card.component.css'],
})
export class IdeaCardComponent implements OnInit {
  @Input() idea: idea;
  @Input() editMode: boolean;
  types: any;

  constructor(private router: Router, private _ideaService: IdeaService) {
    this.types = types;
    this.idea = {
      name: 'Sanjay',
      topic: 'Web Dev',
      title: 'ReactJS vs Svelte',
      idea: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius sit dolorum reprehenderit illum tempore obcaecati saepe tenetur autem officiis aliquid eum, maiores est accusantium id eaque ullam, totam aspernatur. Aut!',
      upVotes: 2,
      downVotes: 5,
    };
  }
  editIdea(idea_id: number) {
    this.router.navigate(['/user/idea', idea_id]);
  }
  deleteIdea(idea_id: number) {
    console.log(idea_id);
    this._ideaService.deleteIdea(idea_id).subscribe((data) => {
      alert('Idea deleted successfully.');
      this.router.navigate(['/user/my-ideas']).then(() => {window.location.reload();});
    });
  }
  ngOnInit(): void {}
}
