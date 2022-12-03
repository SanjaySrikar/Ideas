import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/services/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _loginService : LoginService , private router : Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      // if(this._loginService.getUserRole() == "USER"){
      //   this.router.navigateByUrl('/login')
      //   return true;
      // }
      if(this._loginService.getUserRole() == "ADMIN"){
        return true;
      }

      this.router.navigateByUrl('/no-permission')
      return false;


  }

}
