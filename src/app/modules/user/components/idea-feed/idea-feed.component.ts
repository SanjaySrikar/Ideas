import { Component, Input, OnInit } from '@angular/core';
import Ideas from 'src/app/mock-data/ideas';
import types from '../../../../mock-data/types';
import { Router } from '@angular/router';
import topics from 'src/app/mock-data/topics';
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
  topics: any[];
  filter_topics : any[]
  _topic : any;
  admin : boolean = true
  toggleSelect : boolean = false;
  adminSetting : boolean = false;

  constructor(private router: Router) {
    this.value = 'name';
  }
  toggleSel(){
    this.toggleSelect = !this.toggleSelect;
  }

  adminToggle(){
    this.adminSetting = !this.adminSetting;
  }

  createIdea() {
    this.router.navigateByUrl('user/idea');
  }

  removeTopic(value: any) {
    this.filter_topics = this.filter_topics.filter((obj) => {
      return obj !== value;
    });
  }
  addTopic(value : any){

    this.toggleSelect = !this.toggleSelect;
    if(this.filter_topics.find(ele => ele == value)){
      return null;
    }

    this.filter_topics.push(value)
    let new_filter_topics : any[] = []
    this.filter_topics.forEach(element => {
      new_filter_topics.push(element)
    });
    this.filter_topics = new_filter_topics
    // if only this.filter_topics.push(value) then make the pipe impure,
    // pure pipes ( default) will only be called if the array type or reference changes , hence reference has been changed above
  }
  upVote() {}
  downVote() {}

  ngOnInit(): void {
    this.topics = topics;
    this.filter_topics = topics
    this.ideas = Ideas;
    this.types = types;
  }
}
