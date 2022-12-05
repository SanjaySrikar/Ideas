import {
  async,
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
  waitForAsync,
} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { RegisterComponent } from './register.component';
import { Router, RouterModule } from '@angular/router';
import { of, throwError } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule,
        HttpClientTestingModule,
        RouterModule,
      ],
      declarations: [RegisterComponent],
      providers: [FormBuilder, LoginService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
  it('should initialize the form with the correct validators', () => {
    const fnameControl = component.userForm.get('fname');
    const lnameControl = component.userForm.get('lname');
    const usernameControl = component.userForm.get('username');
    const passwordControl = component.userForm.get('password');
    const emailControl = component.userForm.get('email');
    expect(fnameControl.hasValidator(Validators.required)).toBeTruthy();
    expect(lnameControl.hasValidator(Validators.required)).toBeTruthy();
  });

  it('should navigate to the login page when the backToLogin method is called', () => {
    const router = TestBed.inject(Router);
    const spy = spyOn(router, 'navigateByUrl');
    component.backToLogin();
    expect(spy).toHaveBeenCalledWith('/login');
  });

  it('should call the register method of the LoginService when the onRegister method is called', () => {
    // Arrange
    const loginService = TestBed.inject(LoginService);
    const spy = spyOn(loginService, 'register').and.callThrough();

    // Act
    component.submitted = true;
    component.onRegister();

    // Assert
    expect(spy).toHaveBeenCalledTimes(1);
  });


});
