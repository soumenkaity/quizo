import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FetchTestService {

  URLprefix: string = environment.employeeURLprefix;
  public topic:string="java"; 
  constructor(private http: HttpClient) { }

  getFirstQuestion(userDetails){
    console.log(userDetails);
    const details = {
      "id":userDetails.id,
      "testId":userDetails.testId,
      "collectionName":userDetails.topicName,
      "empId":userDetails.userId,
      "empName":userDetails.userName
    }

    return this.http.post(this.URLprefix+'/instruction',details);
  }
 
  getQuestions(topic:string):Observable<any>{
    return this.http.get(this.URLprefix+'/questions');
  }
  getNextQuestion(choice){
    return this.http.post(this.URLprefix+'/test',choice);
  }
}
