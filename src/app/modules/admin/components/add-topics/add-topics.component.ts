import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { topic } from 'src/app/models/topic';
import { TopicService } from 'src/app/services/topic.service';

@Component({
  selector: 'app-add-topics',
  templateUrl: './add-topics.component.html',
  styleUrls: ['./add-topics.component.css'],
})
export class AddTopicsComponent implements OnInit {
  constructor(private _topicService : TopicService) {}
  @Input() topics: topic[];
  @Output() removeTopicEvent = new EventEmitter<topic>();
  @Output() addTopicEvent = new EventEmitter<topic>();
  topicAdd: topic = {
    id: 0,
    name: '',
  };
  addTopicBtn: boolean = false;

  ngOnInit(): void {}

  addTopicClick() {
    this.addTopicBtn = !this.addTopicBtn;
  }
  addTopic() {
    this.addTopicEvent.emit(this.topicAdd);
    this.addTopicClick();
  }
  removeTopic(value: topic) {
    this.removeTopicEvent.emit(value);
  }
}
