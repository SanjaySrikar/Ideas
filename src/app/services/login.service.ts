import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { role } from '../models/role';
import { user } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient, private router: Router) {}
  registerRole(user: user, role: number): Observable<user> {
    return this.http.post<user>(
      `${environment.BASE_URL}` + 'user/register' + role,
      user
    );
  }

  register(user: user): Observable<user> {
    return this.http.post<user>(
      `${environment.BASE_URL}` + 'user/register',
      user
    );
  }

  login(user: user): Observable<user> {
    return this.http.post<user>(`${environment.BASE_URL}` + 'user/login', user);
  }
  getUserId() {
    return JSON.parse(localStorage.getItem('user_id'));
  }
  getUserName() {
    return JSON.parse(localStorage.getItem('userName'));
  }
  getUserRole() {
    let id:number = Number(localStorage.getItem('user_id'));
    this.http.get(`${environment.BASE_URL}` + 'user/role/' + id).subscribe( (data:role) => {
      localStorage.setItem('userRole', JSON.stringify(data.name));
    });
    return JSON.parse(localStorage.getItem('userRole'));
  }

  logout() {
    localStorage.clear();
    this.router.navigateByUrl('/login');
  }
}
