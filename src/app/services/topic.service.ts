import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { topic } from '../models/topic';

@Injectable({
  providedIn: 'root',
})
export class TopicService {
  constructor(private http: HttpClient) {}

  getTopics(): Observable<topic[]> {
    return this.http.get<topic[]>(`${environment.BASE_URL}` + 'topic/get');
  }
  removeTopic(id : number) {
    return this.http.delete(`${environment.BASE_URL}` + 'topic/remove/' + id);
  }
  addTopic(topic : topic){
    return this.http.post(`${environment.BASE_URL}` + 'topic/add', topic);
  }
}
