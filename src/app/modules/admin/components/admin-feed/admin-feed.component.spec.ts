import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { IdeaService } from 'src/app/services/idea.service';
import { PollService } from 'src/app/services/poll.service';
import { TopicService } from 'src/app/services/topic.service';

import { AdminFeedComponent } from './admin-feed.component';

describe('AdminFeedComponent', () => {
  let component: AdminFeedComponent;
  let fixture: ComponentFixture<AdminFeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminFeedComponent ],
      imports: [RouterTestingModule,HttpClientTestingModule ],
      providers : [TopicService,IdeaService,PollService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
