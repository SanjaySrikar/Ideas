import { Component, Input, OnInit } from '@angular/core';
import Ideas from 'src/app/mock-data/ideas';
import types from '../../../../mock-data/types';
import { Router } from '@angular/router';
@Component({
  selector: 'app-idea-feed',
  templateUrl: './idea-feed.component.html',
  styleUrls: ['./idea-feed.component.css'],
})
export class IdeaFeedComponent implements OnInit {
  @Input() name: string;
  @Input() editMode: boolean;
  ideas: any;
  types!: string[];
  value!: string;

  constructor(private router: Router) {

    this.value = 'name';
  }

  createIdea() {
    this.router.navigateByUrl('user/idea');
  }

  upVote() {}
  downVote() {}

  ngOnInit(): void {

    this.ideas = Ideas;
    this.types = types;
  }
}
