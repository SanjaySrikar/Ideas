import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { UserModule } from '../../user.module';

import { IdeaFeedComponent } from './idea-feed.component';

describe('IdeaFeedComponent', () => {
  let component: IdeaFeedComponent;
  let fixture: ComponentFixture<IdeaFeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdeaFeedComponent ],
      imports: [HttpClientTestingModule,UserModule,RouterTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdeaFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
