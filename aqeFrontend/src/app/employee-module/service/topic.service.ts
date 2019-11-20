import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { topic } from '../models/topic';
import { topicName } from '../models/topicName';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class TopicService {
  private URLprefix = environment.employeeURLprefix;
  // url: string = 'http://localhost:9090/quiz/test/questions';
  public topic:string="java";
  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  getQuestions(topic:string){
    return this.http.get(this.URLprefix+'/questions');
  }

}
