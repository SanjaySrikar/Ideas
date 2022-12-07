import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthGuard } from './auth.guard';
import { LoginService } from 'src/app/services/login.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AuthGuard', () => {
  let authGuard: AuthGuard;
  let router: Router;
  let loginService: LoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [AuthGuard, LoginService],
    });

    authGuard = TestBed.inject(AuthGuard);
    router = TestBed.inject(Router);
    loginService = TestBed.inject(LoginService);

    spyOn(router, 'navigateByUrl').and.stub();
    // spyOn(loginService, 'getUserRole').and.returnValue('ADMIN');
  });

  it('should return true if user is an admin', () => {
    spyOn(loginService, 'getUserRole').and.returnValue('ADMIN');
    expect(authGuard.canActivate(null, null)).toBe(true);
  });

  it('should return false and redirect to /no-permission if user is not an admin', () => {
    // Arrange
    spyOn(loginService, 'getUserRole').and.returnValue('USER');

    expect(authGuard.canActivate(null, null)).toBeFalsy();
    expect(router.navigateByUrl).toHaveBeenCalledWith('/no-permission');
  });
});
