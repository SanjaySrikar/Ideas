import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {Observable} from 'rxjs';
import payload from '../models/poll-payload';
import { poll } from '../models/poll';
@Injectable({
  providedIn: 'root'
})
export class PollService {

  constructor(private http: HttpClient) { }

  getPolls() : Observable<payload[]>{
    return this.http.get<payload[]>(`${environment.BASE_URL}` + 'poll/get' );
  }
  addPoll(value: poll , topic_id :number ) : Observable<poll>{
    return this.http.post<poll>(`${environment.BASE_URL}` + 'poll/create/' + topic_id, value);
  }
  votePoll(poll_id:number , idea_id:number , user_id:number) : Observable<poll>{
    return this.http.put<poll>(`${environment.BASE_URL}` + 'poll/vote/' + poll_id + '/' + idea_id + '/' + user_id, {});
  }
  userHasVoted(poll_id:number , user_id:number) : Observable<boolean>{
    return this.http.get<boolean>(`${environment.BASE_URL}` + 'poll/check/' + poll_id + '/' + user_id);
  }

}
