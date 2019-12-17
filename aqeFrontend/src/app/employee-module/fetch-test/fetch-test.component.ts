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
    // this.userDummyDetails = this.dataService.getDummyDetails();
  
    this.fetchTestService.getFirstQuestion(this.userDetails).subscribe(
      response => {
        console.log(response)
        this.question = response;
        this.count = 0;
        this.choices=this.question['choices'];
        this.timer = Observable.timer(1000,1000);
        // subscribing to a observable returns a subscription object
        this.sub = this.timer.subscribe(t => this.tickerFunc(t));
        this.topicName = this.userDetails.topicName;
      }
    )
  }

  nextQuestion(choice) {

    this.sub.unsubscribe()
    this.timer = Observable.timer(1000,1000);
    // subscribing to a observable returns a subscription object
    this.sub = this.timer.subscribe(t => this.tickerFunc(t));
    this.totalSeconds = 15;

    this.count++
    this.fetchTestService.getNextQuestion(choice).subscribe(
      (response) =>{
        this.question = response[1];
        this.attempts.push(response[0]);
        
      },
      error => {
        if(error.error == "Your test is completed"){
          this.ngOnDestroy();
          this.calculateResult();
          this.feedbackpage()
        }
      }
    )
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

  endTest(choice){
    choice==null?0:choice;
    this.fetchTestService.getNextQuestion(choice+4).subscribe(
      (response: Question) =>{},
      error => {
        this.calculateResult()
        if(error.error == "Your test is completed"){
          this.feedbackpage()
        }
      }
    )

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
  ngOnDestroy(): void {
   clearInterval(this.timer);
  //  console.log("Destroy timer");
        // unsubscribe here
    this.sub.unsubscribe();
  }
}
