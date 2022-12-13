import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { topic } from 'src/app/models/topic';
import { AdminFeedComponent } from './admin-feed.component';
import { IdeaService } from 'src/app/services/idea.service';
import { PollService } from 'src/app/services/poll.service';
import { TopicService } from 'src/app/services/topic.service';
import payload from 'src/app/models/poll-payload';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AddTopicsComponent } from '../add-topics/add-topics.component';
import { AdminIdeaListComponent } from '../admin-idea-list/admin-idea-list.component';

describe('AdminFeedComponent', () => {
  let component: AdminFeedComponent;
  let fixture: ComponentFixture<AdminFeedComponent>;
  let ideaService: IdeaService;
  let pollService: PollService;
  let topicService: TopicService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AdminFeedComponent,
      ],
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [IdeaService, PollService, TopicService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminFeedComponent);
    component = fixture.componentInstance;
    ideaService = TestBed.inject(IdeaService);
    pollService = TestBed.inject(PollService);
    topicService = TestBed.inject(TopicService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get ideas and topics when the component is initialized', () => {
    spyOn(ideaService, 'getIdeas').and.returnValue(of([]));
    spyOn(topicService, 'getTopics').and.returnValue(of([]));

    component.ngOnInit();

    expect(ideaService.getIdeas).toHaveBeenCalled();
    expect(topicService.getTopics).toHaveBeenCalled();
  });

  it('should remove a topic when the removeTopic method is called', () => {
    spyOn(topicService, 'removeTopic').and.returnValue(of(true));

    const topic: topic = {
      id: 1,
      name: 'Test',
    };

    component.removeTopic(topic);

    expect(topicService.removeTopic).toHaveBeenCalledWith(topic.id);
  });

  it('should add a topic when the addTopic method is called', () => {
    spyOn(topicService, 'addTopic').and.returnValue(of(true));

    const topic: topic = {
      id: 1,
      name: 'Test',
    };

    component.addTopic(topic);

    expect(topicService.addTopic).toHaveBeenCalledWith(topic);
  });
  it('should add the payload to the poll_payload array if the payload is not already present in the array', () => {
    const payload: payload = {
      topic: {
        id: 1,
        name: 'Test',
      },
      ideas: [],
      votes: [],
      users: [],
    };

    component.createPoll(payload);

    expect(component.poll_payload).toEqual([payload]);
  });

  it('should not add the payload to the poll_payload array if the payload is already present in the array', () => {
    const payload: payload = {
      topic: {
        id: 1,
        name: 'Test',
      },
      ideas: [],
      votes: [],
      users: [],
    };

    component.poll_payload.push(payload);
    component.createPoll(payload);

    expect(component.poll_payload).toEqual([payload]);
  });
  it('should add a payload to the poll_payload array if it does not already exist in the array', () => {
    const payload: payload = {
      topic: {
        id: 1,
        name: 'Test',
      },
      ideas: [],
      votes: [],
      users: [],
    };

    component.createPoll(payload);

    expect(component.poll_payload).toEqual([payload]);
  });
  it('should not add a payload to the poll_payload array if it already exists in the array', () => {
    const payload: payload = {
      topic: {
        id: 1,
        name: 'Test',
      },
      ideas: [],
      votes: [],
      users: [],
    };

    component.poll_payload.push(payload);
    component.createPoll(payload);

    expect(component.poll_payload).toEqual([payload]);
  });
});
