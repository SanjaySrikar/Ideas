import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { IdeaService } from 'src/app/services/idea.service';
import { LoginService } from 'src/app/services/login.service';
import { TopicService } from 'src/app/services/topic.service';

import { IdeaComponent } from './idea.component';

describe('IdeaComponent', () => {
  let component: IdeaComponent;
  let fixture: ComponentFixture<IdeaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdeaComponent ],
      imports: [HttpClientTestingModule,RouterTestingModule],
      providers:[TopicService,LoginService,IdeaService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdeaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
