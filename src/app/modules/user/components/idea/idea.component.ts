import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import idea from 'src/app/models/idea';
import topics from '../../../../mock-data/topics';
@Component({
  selector: 'app-idea',
  templateUrl: './idea.component.html',
  styleUrls: ['./idea.component.css'],
})

export class IdeaComponent implements OnInit {
  @Input() idea : idea ;
  @Input() editMode : boolean
  topics!: any;
  constructor(private router : ActivatedRoute) {
    this.topics = topics;
  }

  ngOnInit(): void {

  }
  test(){

  }
}
