import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FetchTestService {

  URLprefix: string = environment.employeeURLprefix;
  constructor(private http: HttpClient) { }

  getFirstQuestion(userDetails){
    //console.log(userDetails);
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
  postResult(result){
    console.log("here")
    return this.http.post(this.URLprefix+'/result',result);
  }

  getQuestion(topicName,difficulty){
    return this.http.get(this.URLprefix+"/test?topic="+topicName+"&difficulty="+difficulty);
  }
  sendAttempts(attempts,topic){
    return this.http.post(this.URLprefix+"/modify?topic="+topic,attempts);
  }
  completeTest(userDetails){
    return this.http.post(this.URLprefix+"/complete",userDetails);
  }
}
