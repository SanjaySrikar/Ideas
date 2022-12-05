import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class VotingService {
  constructor(private http: HttpClient) {}

  upVote(idea_id: number, user_id: number)  {
    return this.http.put(
      `${environment.BASE_URL}` + 'idea/upVote/' + idea_id + '/' + user_id,
      {}
    );
  }
  userHasVoted(idea_id:number , user_id:number ){
    return this.http.get(
      `${environment.BASE_URL}` + 'idea/hasVoted/' + idea_id + '/' + user_id,
      {}
    );
  }
  removeVote(idea_id: number, user_id: number)  {
    return this.http.put(
      `${environment.BASE_URL}` + 'idea/removeVote/' + idea_id + '/' + user_id,
      {}
    );
  }
}
