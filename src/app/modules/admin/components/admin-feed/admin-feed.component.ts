import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import idea from 'src/app/models/idea';
import { poll } from 'src/app/models/poll';
import payload from 'src/app/models/poll-payload';
import { topic } from 'src/app/models/topic';
import { IdeaService } from 'src/app/services/idea.service';
import { PollService } from 'src/app/services/poll.service';
import { TopicService } from 'src/app/services/topic.service';

@Component({
  selector: 'app-admin-feed',
  templateUrl: './admin-feed.component.html',
  styleUrls: ['./admin-feed.component.css'],
})
export class AdminFeedComponent implements OnInit {
  constructor(
    private _topicServie: TopicService,
    private _ideaService: IdeaService,
    private _pollService: PollService,
    private router: Router
  ) {}
  ideas: idea[];
  topics: topic[];
  topicAdd: string;
  addTopicBtn: boolean = false;
  poll_payload: payload[] = [];
  polls : poll = {
    id : 0,
    ideas : []
  };

  ngOnInit(): void {
    this.getTopics();
    this.getIdeas();
  }

  getTopics() {
    this._topicServie.getTopics().subscribe((data) => {
      this.topics = data;
    });
  }
  getIdeas() {
    this._ideaService.getIdeas().subscribe((data) => {
      this.ideas = data;
    });
  }

  removeTopic(value: topic) {
    this._topicServie.removeTopic(value.id).subscribe((data) => {
      this.getTopics();
    });
  }
  addTopic(value: topic) {
    this._topicServie.addTopic(value).subscribe((data) => {
      this.getTopics();
    });
  }

  createPoll(value: payload) {
    //check if value is already present in poll_payload
    if (this.poll_payload.length == 0) {
      this.poll_payload.push(value);
    } else {
      let flag = false;
      this.poll_payload.forEach((ele) => {
        if (ele.topic.id == value.topic.id) {
          flag = true;
        }
      });
      if (!flag) {
        this.poll_payload.push(value);
      }
    }
  }

  confirmPoll() {
    // add ideas from payload to poll
    this.polls.ideas = [];
    this.poll_payload.forEach((ele) => {
      ele.ideas.forEach((idea) => {
        this.polls.ideas.push(idea);
      });
    });
    this.polls.id = this.poll_payload[0].topic.id
    this._pollService.addPoll(this.polls ,this.poll_payload[0].topic.id).subscribe((data) => {
      this.router.navigateByUrl('/voting');
    });
  }

  removeIdea(topic: topic) {
    //remove topic from poll_payload
    this.poll_payload = this.poll_payload.filter((ele) => {
      return ele.topic.id != topic.id;
    });
  }
}
