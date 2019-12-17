import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { score } from '../models/score';
// import { topic } from '../models/topic';
// import { score } from '../models/score';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  //username observable
  private messageSource = new BehaviorSubject('');
  userName = this.messageSource.asObservable();

  //topic observable
  private defaultTopic = new BehaviorSubject('');
  topicSelected = this.defaultTopic.asObservable();

  //correct observable
  private defaultCorrect = new BehaviorSubject(0);
  correct = this.defaultCorrect.asObservable();

  //incorrect observable
  private defaultIncorrect = new BehaviorSubject(0);
  incorrect = this.defaultIncorrect.asObservable();

  testUserDetails;
  resultDetails;
  constructor() { }

  changeUser(user: string) {
    this.messageSource.next(user);
  }
  changeTopic(topic: string) {
    this.defaultTopic.next(topic);
  }
  changeScore(newScore: score){
    this.defaultCorrect.next(newScore.correct);
    this.defaultIncorrect.next(newScore.incorrect);
  }

  getTestUserDetails(){
    return this.testUserDetails;
  }
  setTestUserDetails(ud){
    this.testUserDetails = ud;
  }
  setResultDetails(testId,empId){
    this.resultDetails = {testId, empId}
  }
  getResultDetails(){
    return this.resultDetails;
  }

  getDummyDetails(){
    return {
      createdAt: "2019-12-03T08:59:38.559+0000",
      id: "5de623face226315ff90d5f5",
      testId:"dummy-test-01",
      status: "N",
      topicId: "5dd37eeed2dfaaa776485bee",
      topicName: "java_programming_language",
      userEmail: "aayush123@gmail.com",
      userId: "5dca397c27670ed5007b7830",
      userName: "aayush",
    }
  }
}
