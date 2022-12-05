import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PollService } from 'src/app/services/poll.service';

import { VotingTabComponent } from './voting-tab.component';

describe('VotingTabComponent', () => {
  let component: VotingTabComponent;
  let fixture: ComponentFixture<VotingTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VotingTabComponent ],
      providers : [PollService],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VotingTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
