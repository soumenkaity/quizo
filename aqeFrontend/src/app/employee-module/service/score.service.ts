import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { score } from '../models/score';
import { environment } from 'src/environments/environment';
import { Question } from '../model/questions'
import { result } from '../model/result';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {
  private URLprefix = environment.employeeURLprefix;

  url: string = 'http://localhost:8083/quiz/test/submit';
  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  postScore(c: number, i: number){
    let scoreJSON:score = {
      correct: c,
      incorrect: i
    };
    return this.http.post<score>(this.URLprefix+'/questions', scoreJSON, this.httpOptions);
  }

  postScore2(testResult){

    return this.http.post(this.url, testResult);
  }
  count=0;

  calculateCorrectAnswers(resultList: result[]){
    for(let i=0; i<resultList.length; i++){
      if(resultList[i].userResponse){
          this.count=this.count+1;
      }
    }
    return this.count;
  }
   

  calculateScore(resultList: result[], questionList: Question[]){
    let score=0;
    for(let i=0; i<resultList.length; i++){
      if(resultList[i].userResponse){
          for(let j=0; j<questionList.length; j++){
            if(questionList[j].id == resultList[i].id){
              score = score + questionList[j].weight;
            }
          }
      }
    }
    return score;
  }


  calculatePercentage(score:number, questionList:Question[] ){
    let maxScore=0;
    let percentage:number;
    for(let i=0; i<questionList.length; i++){
      maxScore = maxScore + questionList[i].weight;
    }
    //console.log("max score is ",maxScore);
    percentage = (score/maxScore)*100;
    return percentage;
  }


}
