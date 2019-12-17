import { Component, OnInit, OnDestroy } from '@angular/core';
import { FetchTestService } from '../service/fetch-test.service';
import { Question } from '../model/questions';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';
import { ToasterService } from 'src/app/authentication-module/service/toaster-service.service';
import { Observable, Subscription } from 'rxjs/Rx';
import { Result } from '../model/result';
interface Attempt{
  difficulty: string;
  answer: String;
  choices: String[];
  question: String;
  questionId: String;
  response: String;
}
// import { testResult } from '../model/testResult';

@Component({
  selector: 'app-fetch-test',
  templateUrl: './fetch-test.component.html',
  styleUrls: ['./fetch-test.component.css'],
})
export class FetchTestComponent implements OnInit, OnDestroy {


  public totalSeconds = 15;
  public minutes = Math.floor(this.totalSeconds / 60);
  public seconds = this.totalSeconds % 60;

  public roundedMins = this.pad(this.minutes);

  public roundedSecs=this.pad(this.seconds);
  public options;

  private topic;
  private topicName;
  private attempts: Attempt[] = [];

  private totalQuestionsInSection = 10;
  private easyLimit = 6;
  private hardLimit = 4;
  private mediumLimit = 5;
  private pointer = {
    level: 'E',
    correct: 0,
    wrong: 0,
    current: 1
  };
  
  private question;
  private count: number;
  choices: any;
  timer: any;
  sub: any;
  ticks: any;
  userDetails: any;
  userDummyDetails: { createdAt: string; id: string; testId: string; status: string; topicId: string; topicName: string; userEmail: string; userId: string; userName: string; };


  constructor(
     private fetchTestService: FetchTestService,
     private dataService: DataService,
     private router: Router,
     private toasterService: ToasterService
  ) { }

  ngOnInit() {
    this.userDetails = this.dataService.getTestUserDetails();
    console.log(this.userDetails);
    // this.userDummyDetails = this.dataService.getDummyDetails();
    this.topicName = this.userDetails.topicName;
  
    this.fetchTestService.getQuestion(this.userDetails.topicName,'E').subscribe(
      response=>{
        this.question = response;
        this.count = 0;
        this.choices=this.question['choices'];
      }
    )
    this.timer = Observable.timer(1000,1000);
    this.sub = this.timer.subscribe(t => this.tickerFunc(t));
    // this.fetchTestService.getFirstQuestion(this.userDetails).subscribe(
    //   response => {
    //     console.log(response)
    //     this.question = response;
    //     this.count = 0;
    //     this.choices=this.question['choices'];
    //     this.timer = Observable.timer(1000,1000);
    //     // subscribing to a observable returns a subscription object
    //     this.sub = this.timer.subscribe(t => this.tickerFunc(t));
        
    //   }
    // )
  }

  nextQuestion(choice) {
    var thisAttempt:Attempt = {
      "questionId":this.question.id,
      "question":this.question.question,
      "response":this.question.choices[choice],
      "answer": this.question.answer,
      "difficulty":this.question.difficulty,
      "choices":this.question.choices
    }

    this.attempts.push(thisAttempt);
    this.sub.unsubscribe()
    this.totalSeconds = 15;
    this.count++
    this.evaluateNextQuestion(thisAttempt);
    this.fetchTestService.getQuestion(this.userDetails.topicName,this.pointer.level).subscribe(
      response=>{
        this.question = response;
        this.choices=this.question['choices'];
      }
    )
    this.timer = Observable.timer(1000,1000);
    this.sub = this.timer.subscribe(t => this.tickerFunc(t));
    // 
    this.choices = null;
  }

  feedbackpage(){
    this.toasterService.success("Test Completed","Please fill the feedback form")
    this.router.navigate(['/employee/feedback']);
  }


  tickerFunc(tick){
    
    if(tick>=15){
      this.nextQuestion(0);
    }
    this.totalSeconds -= 1;
    this.minutes = Math.floor(this.totalSeconds / 60);
    this.seconds = this.totalSeconds % 60;
    this.roundedMins = this.pad(this.minutes);
    this.roundedSecs=this.pad(this.seconds);
    this.ticks = tick
}

  pad(number){
    return (number<10?'0':'')+number;

  }

  endTest(){
    // this.fetchTestService.getNextQuestion(choice+4).subscribe(
    //   (response: Question) =>{},
    //   error => {
    //     this.calculateResult()
    //     if(error.error == "Your test is completed"){
    //       this.feedbackpage()
    //     }
    //   }
    // )
    this.sub.unsubscribe()
    this.completeTest();
    this.calculateResult();
    this.fetchTestService.sendAttempts(this.attempts,this.topicName).subscribe(res=>console.log(res))
    this.feedbackpage();
    this.ngOnDestroy();

  }

  evaluateNextQuestion(attempt: Attempt){
    this.pointer.current++;
    if(attempt.response == attempt.answer){
      this.pointer.correct++;
      if(this.pointer.level == 'E' && this.pointer.correct >= this.easyLimit){
        this.pointer.level = 'M'; this.pointer.current = 1
      }
      else if(this.pointer.level == 'M' && this.pointer.correct >= this.mediumLimit){
        this.pointer.level = 'H'; this.pointer.current = 1
      }
      else if(this.pointer.level == 'H' && this.pointer.correct >= this.hardLimit){
        this.endTest()
      }
    }else{
      this.pointer.wrong++;
      if(this.pointer.level == 'E' && this.pointer.wrong >= this.easyLimit){
        this.pointer.wrong++
      }
    }

    if(this.pointer.current == 11){
      if(this.pointer.level == 'E' && this.pointer.correct <= this.easyLimit){
        this.endTest()
      }
      else if(this.pointer.level == 'M' && this.pointer.correct <= this.mediumLimit){
        this.endTest()
      }
      else if(this.pointer.level == 'H' && this.pointer.correct <= this.hardLimit){
        this.endTest()
      }
    }
  }

  calculateResult(){
    var total = 0;
    var score = 0;
    var correct = 0;
    var wrong = 0;
    var totalEasy = 0;
    var correctEasy = 0;
    var totalMedium = 0;
    var correctMedium = 0;
    var totalHard = 0;
    var correctHard = 0;
    this.attempts.forEach(element => {
      total++;
      if(element.difficulty == "E"){
        totalEasy++;
        if(element.answer == element.response){
          correctEasy++;
        }
      }else if(element.difficulty == "M"){
        totalMedium++;
        if(element.answer == element.response){
          correctMedium++;
        }
      }else if(element.difficulty == "H"){
        totalHard++;
        if(element.answer == element.response){
          correctHard++;
        }
      }
    });
    totalHard==0?totalHard=1:totalHard;
    totalMedium==0?totalMedium=1:totalMedium;
    score = ((correctEasy/totalEasy)*30)+((correctMedium/totalMedium)*30)+((correctHard/totalHard)*40);
    correct = correctEasy+correctMedium+correctHard;
    wrong = total - correct;

    var result = {
      "id": this.userDetails.id,
      "empId": this.userDetails.userId,
      "topicId": this.userDetails.topicId,
      "testId": this.userDetails.testId,
      "empName": this.userDetails.userName,
      "topicName": this.userDetails.topicName,
      "score": score,
      "correct": correct,
      "wrong": wrong,
      "attempts": this.attempts
    }
    this.fetchTestService.postResult(result).subscribe();
  }
  completeTest(){
    this.fetchTestService.completeTest(this.userDetails).subscribe();
  }
  ngOnDestroy(): void {
   clearInterval(this.timer);
    this.sub.unsubscribe();
  }
}
