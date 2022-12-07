import { async, TestBed, waitForAsync } from '@angular/core/testing';
import { AdminNavBarComponent } from './admin-nav-bar.component';
import { LoginService } from 'src/app/services/login.service';

describe('AdminNavBarComponent', () => {
  let component: AdminNavBarComponent;
  let loginService: jasmine.SpyObj<LoginService>;

  beforeEach(waitForAsync(() => {
    loginService = jasmine.createSpyObj('LoginService', ['logout']);

    TestBed.configureTestingModule({
      declarations: [ AdminNavBarComponent ],
      providers: [
        { provide: LoginService, useValue: loginService },
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    const fixture = TestBed.createComponent(AdminNavBarComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call the logout method of the login service when logout is called', () => {
    component.logout();
    expect(loginService.logout).toHaveBeenCalled();
  });
});
