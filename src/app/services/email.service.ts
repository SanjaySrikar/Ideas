import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Email } from '../models/email';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  user_id : number = JSON.parse(localStorage.getItem('user_id'));
  constructor(private http : HttpClient) { }
  sendMail(email : Email) : Observable<any>{
    return this.http.post(`${environment.BASE_URL}` + 'user/sendMail/' + this.user_id , email);
  }
}
