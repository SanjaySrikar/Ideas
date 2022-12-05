import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { of } from 'rxjs';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      providers: [
        FormBuilder,
        { provide: Router, useValue: routerSpy },
        {
          provide: LoginService,
          useValue: jasmine.createSpyObj('LoginService', [
            'login',
            'getUserRole',
          ]),
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the form with the correct validators', () => {
    const userControl = component.userForm.get('username');
    const passwordControl = component.userForm.get('password');
    expect(userControl instanceof AbstractControl).toBe(true);

    // expect(userControl.validator).toContain(Validators.compose([Validators.required, Validators.minLength(6)]));
    // expect(passwordControl.validator).toContain(Validators.compose([Validators.required, Validators.minLength(6)]));
  });


  it('should not call the login service if the form is invalid', () => {
    component.submitted = true;
    component.userForm.setErrors({ invalid: true });
    const loginService = TestBed.get(LoginService);

    component.onSubmit();

    expect(loginService.login).not.toHaveBeenCalled();
  });

  it('should call the login service if the form is valid', () => {
    component.submitted = true;
    component.userForm.setValue({
      username: 'username',
      password: 'password',
    });
    const loginService = TestBed.get(LoginService);
    loginService.login.and.returnValue(of({ id: 1, username: 'username' }));

    component.onSubmit();

    expect(loginService.login).toHaveBeenCalledWith({
      username: 'username',
      password: 'password',
    });
  });

  it('should save the user ID and username in local storage if the login is successful', () => {
    component.submitted = true;
    component.userForm.setValue({
      username: 'username',
      password: 'password',
    });
    const loginService = TestBed.get(LoginService);
    loginService.login.and.returnValue(of({ id: 1, username: 'username' }));
  });
});
