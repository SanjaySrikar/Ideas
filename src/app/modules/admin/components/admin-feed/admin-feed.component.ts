import { Component, OnInit } from '@angular/core';
import Ideas from 'src/app/mock-data/ideas';
import  topics  from 'src/app/mock-data/topics';
import payload from 'src/app/models/poll-payload';

@Component({
  selector: 'app-admin-feed',
  templateUrl: './admin-feed.component.html',
  styleUrls: ['./admin-feed.component.css']
})
export class AdminFeedComponent implements OnInit {


  constructor() { }
  ideas: any[];
  topics : any[];
  topicAdd : string;
  addTopicBtn : boolean = false;
  payload : payload;
  poll_payload : payload[] = [];



  ngOnInit(): void {
    this.topics = topics;
    this.ideas = Ideas;

  }

  removeTopic(value : string){
    this.topics =  this.topics.filter((ele) => {
      return ele != value;
    })
  }

  createPoll(value : payload){
    this.poll_payload.push(value)
    console.log(this.poll_payload)
  }



}
