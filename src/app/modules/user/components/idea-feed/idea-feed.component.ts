import { Component, Input, OnInit } from '@angular/core';
// import Ideas from 'src/app/mock-data/ideas';
import types from '../../../../mock-data/types';
import { Router } from '@angular/router';
import { TopicService } from 'src/app/services/topic.service';
import { topic } from 'src/app/models/topic';
import { IdeaService } from 'src/app/services/idea.service';
import idea from 'src/app/models/idea';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/services/login.service';
@Component({
  selector: 'app-idea-feed',
  templateUrl: './idea-feed.component.html',
  styleUrls: ['./idea-feed.component.css'],
})
export class IdeaFeedComponent implements OnInit {
  @Input() name: string;
  @Input() editMode: boolean;
  ideas: idea[];
  types!: string[];
  value!: string;
  topics: topic[];
  ideas$: Observable<idea[]>;
  topics$: topic[];
  _topic: topic;
  admin: boolean = false;
  toggleSelect: boolean = false;
  adminSetting: boolean = false;
  topicNames: string[];

  // get topics first
  // get ideas

  constructor(
    private router: Router,
    private _loginService: LoginService,
    private _topicService: TopicService,
    private _ideaService: IdeaService
  ) {
    this.value = 'name';
    if(localStorage.getItem('userRole') == "ADMIN"){
      this.admin = true;
    }
  }

  ngOnInit(): void {
    this.types = types;
    this.getTopics();
    // set all values of topicNames to topics$
    this.getIdeas();
  }
  toggleSel() {
    this.toggleSelect = !this.toggleSelect;
  }

  adminToggle() {
    this.adminSetting = !this.adminSetting;
  }

  getTopics() {
    this._topicService.getTopics().subscribe((data) => {
      this.topics = data;
      this.topics$ = data;
    });
    // this.topics$ = this._topicService.getTopics();
  }

  getIdeas() {
    this._ideaService.getIdeas().subscribe((data) => {
      this.ideas = data;
    });
    this.ideas$ = this._ideaService.getIdeas();
  }

  createIdea() {
    this.router.navigateByUrl('user/idea');
  }

  removeTopic(value: topic) {
    // soft delete yeah ? :D
    this.topics = this.topics.filter((obj) => {
      return obj !== value;
    });
  }
  addTopic(value: string) {
    this.toggleSelect = !this.toggleSelect;
    if (this.topics.find((ele) => ele.name == value)) {
      return null;
    }
    // log all values in topics$ and compare to value to see if it exists
    //find value in data
    this.topics$.find((ele) => {
      if (ele.name == value) {
        this.topics.push(ele);
      }
    });
    // this.topics.push(value.name);
    let new_filter_topics: topic[] = [];
    this.topics.forEach((element) => {
      new_filter_topics.push(element);
    });
    this.topics = new_filter_topics;
    // if only this.filter_topics.push(value) then make the pipe impure,
    // pure pipes ( default) will only be called if the array type or reference changes , hence reference has been changed above
  }
}
