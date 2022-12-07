import { async, TestBed } from '@angular/core/testing';
import { NavBarComponent } from './nav-bar.component';
import { LoginService } from 'src/app/services/login.service';

describe('NavBarComponent', () => {
  let component: NavBarComponent;
  let loginService: jasmine.SpyObj<LoginService>;

  beforeEach(async(() => {
    loginService = jasmine.createSpyObj('LoginService', ['logout']);

    TestBed.configureTestingModule({
      declarations: [ NavBarComponent ],
      providers: [
        { provide: LoginService, useValue: loginService },
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    const fixture = TestBed.createComponent(NavBarComponent);
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
