import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import idea from 'src/app/models/idea';
import topics from 'src/app/mock-data/topics';
import payload from 'src/app/models/poll-payload';
@Component({
  selector: 'app-admin-idea-list',
  templateUrl: './admin-idea-list.component.html',
  styleUrls: ['./admin-idea-list.component.css'],
})
export class AdminIdeaListComponent implements OnInit {
  @Input() ideas: idea[];
  @Input() topic: any;
  @Output() pollEvent = new EventEmitter<payload>();
  test = new Map<number,boolean>();
  topic_id: number;
  payload: payload = {
    topic_id: 0,
    ideas: [],
  };
  limit: boolean = false;
  showContent: boolean = false;
  ngOnInit(): void {

    this.topic_id = topics.findIndex((ele) => ele == this.topic);
  }

  chooseIdea(idea_id: number) {
    if (this.payload.ideas.length < 2) {
      this.payload.topic_id = this.topic_id;
      this.test[idea_id] = true;
      this.payload.ideas.push(idea_id);
      console.log(this.payload);
      return;
    } else {
      this.limit = true;
      alert('Added two topics already');
    }
  }
  removeIdea(idea_id: number) {
    this.test[idea_id] = false;
    this.payload.ideas = this.payload.ideas.filter((ele) => {
       return ele != idea_id;
    });
    console.log(this.payload.ideas)
  }
  submitPoll() {
    this.pollEvent.emit(this.payload);
  }

  // createPoll(){

  // }
}
