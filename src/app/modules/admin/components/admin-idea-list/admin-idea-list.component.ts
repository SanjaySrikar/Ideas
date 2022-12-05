import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import idea from 'src/app/models/idea';
import payload from 'src/app/models/poll-payload';
import { topic } from 'src/app/models/topic';
@Component({
  selector: 'app-admin-idea-list',
  templateUrl: './admin-idea-list.component.html',
  styleUrls: ['./admin-idea-list.component.css'],
})
export class AdminIdeaListComponent implements OnInit {
  @Input() ideas: idea[];
  @Input() topic: topic;
  @Output() pollEvent = new EventEmitter<payload>();
  test = new Map<number,boolean>();
  payload: payload = {
    topic: undefined,
    ideas: [],
    votes: []
  };
  limit: boolean = false;
  showContent: boolean = false;
  ngOnInit(): void {
    // this.topic_id = topics.findIndex((ele) => ele == this.topic);
  }

  chooseIdea(idea : idea) {
    if (this.payload.ideas.length < 2) {
      this.payload.topic = this.topic;
      this.test[idea.id] = true;
      this.payload.ideas.push(idea);
      return;
    } else {
      this.limit = true;
      alert('Added two topics already');
    }
  }
  removeIdea(idea: idea) {
    this.test[idea.id] = false;
    this.payload.ideas = this.payload.ideas.filter((ele) => {
       return ele.id != idea.id;
    });

  }
  submitPoll() {
    this.pollEvent.emit(this.payload);
  }

  // createPoll(){

  // }
}
