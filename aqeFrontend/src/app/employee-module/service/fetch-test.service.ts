import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class FetchTestService {

  url: string = 'http://localhost:9090/quiz/test/questions/';
  public topic:string="java"; 
  constructor(private http: HttpClient) { }

 
  getQuestions(topic:string):Observable<any>{
    console.log("here");
    return this.http.get(this.url);
  }
}
