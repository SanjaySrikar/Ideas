import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminIdeaListComponent } from './admin-idea-list.component';

describe('AdminIdeaCardComponent', () => {
  let component: AdminIdeaListComponent;
  let fixture: ComponentFixture<AdminIdeaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminIdeaListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminIdeaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
