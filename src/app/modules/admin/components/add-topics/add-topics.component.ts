import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-topics',
  templateUrl: './add-topics.component.html',
  styleUrls: ['./add-topics.component.css'],
})
export class AddTopicsComponent implements OnInit {
  constructor() {}
  @Input() topics: any[];
  @Output() removeTopicEvent = new EventEmitter<string>();
  topicAdd: string;
  addTopicBtn: boolean = false;

  ngOnInit(): void {}

  addTopicClick() {
    this.addTopicBtn = !this.addTopicBtn;
  }
  addTopic() {
    this.topics.push(this.topicAdd);
    this.topicAdd = '';
    this.addTopicBtn = false;
  }
  removeTopic(value: string) {
    this.removeTopicEvent.emit(value);
  }
}
