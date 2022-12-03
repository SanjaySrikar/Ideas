import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import idea from '../models/idea';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root',
})
export class IdeaService {
  id : number;
  constructor(private http: HttpClient, private _loginService: LoginService) {}

  getIdeas(): Observable<idea[]> {
    return this.http.get<idea[]>(`${environment.BASE_URL}` + 'idea/' + 'get');
  }
  createIdea(idea: idea): Observable<idea> {
    //get user_id from login service
    this.id = this._loginService.getUserId();
    return this.http.post<idea>(
      `${environment.BASE_URL}` + 'idea/' + 'add/' + this.id,
      idea
    );
  }
  //get idea by id
  getIdeaById(id: number): Observable<idea> {
    return this.http.get<idea>(
      `${environment.BASE_URL}` + 'idea/' + 'get/' + id
    );
  }
  //update idea
  updateIdea(idea: idea , id : number): Observable<idea> {
    return this.http.put<idea>(
      `${environment.BASE_URL}` + 'idea/' + 'update/'+ id,
      idea
    );
  }
  //delete idea
  deleteIdea(id: number): Observable<idea> {
    return this.http.delete<idea>(
      `${environment.BASE_URL}` + 'idea/' + 'delete/' + id
    );
  }
}
