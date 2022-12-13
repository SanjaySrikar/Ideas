import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root',
})
export class LoginGuard implements CanActivate {
  constructor(private _loginService: LoginService, private route: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this._loginService.getUserId() == null) {
      return true;
    }
    // get role from local storage and check if it is admin or not
    // if it is admin then redirect to admin page
    // else redirect to user page
    if (localStorage.getItem('userRole') == 'ADMIN') {
      this.route.navigateByUrl('/admin');
    } else if (localStorage.getItem('userRole') == 'USER') {
      this.route.navigateByUrl('/user');
    }else{
      this.route.navigateByUrl('/login');
    }
    return false;
  }
}
