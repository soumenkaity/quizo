import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FetchTestService {

  url: string = environment.employeeURLprefix;
  public topic:string="java"; 
  constructor(private http: HttpClient) { }

 
  getQuestions(topic:string):Observable<any>{
    console.log("here");
    return this.http.get(this.url+'/questions');
  }
}
