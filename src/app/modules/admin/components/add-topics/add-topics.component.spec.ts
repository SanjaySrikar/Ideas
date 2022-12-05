import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTopicsComponent } from './add-topics.component';
import { topic } from 'src/app/models/topic';
import { AppModule } from 'src/app/app.module';
describe('AddTopicsComponent', () => {
  let component: AddTopicsComponent;
  let fixture: ComponentFixture<AddTopicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddTopicsComponent],
      imports: [HttpClientTestingModule, AppModule],
    }).compileComponents();
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(AddTopicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle the value of addTopicBtn when addTopicClick is called', () => {
    expect(component.addTopicBtn).toBe(false);
    component.addTopicClick();
    expect(component.addTopicBtn).toBe(true);
  });

  it('should emit a topic when addTopic is called', () => {
    const topic: topic = {
      id: 1,
      name: 'Test topic',
    };
    component.topicAdd = topic;
    spyOn(component.addTopicEvent, 'emit');
    component.addTopic();
    expect(component.addTopicEvent.emit).toHaveBeenCalledWith(topic);
  });

  it('should emit a topic when removeTopic is called', () => {
    const topic: topic = {
      id: 1,
      name: 'Test topic',
    };
    spyOn(component.removeTopicEvent, 'emit');
    component.removeTopic(topic);
    expect(component.removeTopicEvent.emit).toHaveBeenCalledWith(topic);
  });
});
