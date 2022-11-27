import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import types from 'src/app/mock-data/types';
import idea from 'src/app/models/idea';
@Component({
  selector: 'app-idea-card',
  templateUrl: './idea-card.component.html',
  styleUrls: ['./idea-card.component.css'],
})
export class IdeaCardComponent implements OnInit {
  @Input () idea : idea
  @Input () editMode : boolean
  types: any;

  constructor(private router : Router) {
    this.types = types;
    this.idea =   {
    name: 'Sanjay',
    topic: 'Web  bDev',
    title: 'ReactJS vs Svelte',
    idea: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius sit dolorum reprehenderit illum tempore obcaecati saepe tenetur autem officiis aliquid eum, maiores est accusantium id eaque ullam, totam aspernatur. Aut!',
    upVotes: 2,
    downVotes: 5
  }
}

  ngOnInit(): void {

  }
}
