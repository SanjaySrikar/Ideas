import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import idea from 'src/app/models/idea';
import { topic } from 'src/app/models/topic';
import { IdeaService } from 'src/app/services/idea.service';
import { LoginService } from 'src/app/services/login.service';
import { TopicService } from 'src/app/services/topic.service';
@Component({
  selector: 'app-idea',
  templateUrl: './idea.component.html',
  styleUrls: ['./idea.component.css'],
})
export class IdeaComponent implements OnInit {
  @Input() idea: idea;
  @Input() editMode: boolean;
  topics!: topic[];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _topicService: TopicService,
    private _ideaService: IdeaService
  ) {
  }
  getTopics() {
    this._topicService.getTopics().subscribe((data) => {
      this.topics = data;
    });
  }

  ngOnInit(): void {
    console.log(this.idea);
    if (this.route.snapshot.params['id'] != 0) {
      this._ideaService
        .getIdeaById(this.route.snapshot.params['id'])
        .subscribe((data) => {
          this.idea = data;
        });
    }
    // this.idea.name = this._loginService.getUserName();
    this.getTopics();
  }
  onSubmit() {
    if (this.route.snapshot.params['id'] != 0) {
      this._ideaService
        .updateIdea(this.idea, this.route.snapshot.params['id'])
        .subscribe((data) => {
          alert('Idea updated successfully.');
          this.router.navigate(['/user/my-ideas']);
        });
    } else {
      this._ideaService.createIdea(this.idea).subscribe((data) => {
        alert('Idea created successfully.');
        setTimeout(() => {
          this.router.navigate(['/user/my-ideas']);
        }, 500);
      });
    }
  }
}
