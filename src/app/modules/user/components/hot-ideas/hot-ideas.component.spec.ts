import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotIdeasComponent } from './hot-ideas.component';

describe('HotIdeasComponent', () => {
  let component: HotIdeasComponent;
  let fixture: ComponentFixture<HotIdeasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotIdeasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotIdeasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
