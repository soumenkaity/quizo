import { Component, OnInit } from '@angular/core';
import { FetchTestService } from '../service/fetch-test.service';
import { Question } from '../model/questions';
import { result } from '../model/result';
import { Router } from '@angular/router';
import { ScoreService } from '../service/score.service';
import { testResult } from '../model/testResult';

@Component({
  selector: 'app-fetch-test',
  templateUrl: './fetch-test.component.html',
  styleUrls: ['./fetch-test.component.css'],
})
export class FetchTestComponent implements OnInit {

  public totalSeconds = 20;
  public minutes = Math.floor(this.totalSeconds / 60);
  public seconds = this.totalSeconds % 60;

  public roundedMins = this.pad(this.minutes);

  public roundedSecs=this.pad(this.seconds);
  public options;

  private topic;

  private questionList: Question[];

  private question;

  private count: number;
  private testResult: testResult;
  private empId: string = '878967asdgfg';
  private testId: string = 'u75asd87asd55';
  private result: result;
  private resultList = [];
  choices: any;
  private userResponse : boolean;

  constructor(private fetchTestService: FetchTestService, private scoreService: ScoreService,
    private router: Router,
  ) { }

  ngOnInit() {
    console.log("in ngoninit");
    this.fetchTestService.getQuestions(this.topic).subscribe(data => {
      console.log( data);
      this.questionList = data;
      this.question = this.questionList[0];
      // console.log(this.question);
      this.choices=this.question['choices'];
      console.log(this.options)
      this.count = 0;
      this.checkTime();
    });
    


  }

  nextQuestion() {

    this.count = this.count + 1;
    this.question = this.questionList[this.count];
    this.choices=this.question['choices'];
    this.resetTime();
  }


  prevQuestion() {
    this.count = this.count - 1;
    this.question = this.questionList[this.count];
    this.options = null;
  }



  saveAnswer(option: string) {
    console.log("option data is ", option);

    if(parseInt(option)-1==this.question.choices.indexOf(this.question.answer)){
      this.userResponse = true;
    }
    else this.userResponse = false;


    this.result = new result(this.question.id, parseInt(option),this.question.choices.indexOf(this.question.answer)+1,this.userResponse);

    console.log("result ", this.result);

    this.resultList[this.count] = this.result;

    console.log("the result list is ", this.resultList);
  }
private correct:number;
private incorrect: number;
private score: number;
private percentage: number;

  submitTest() {
    
    console.log(this.resultList);
    console.log(this.questionList.length);
    this.correct = this.scoreService.calculateCorrectAnswers(this.resultList);
    this.incorrect = this.questionList.length - this.correct;
    this.score = this.scoreService.calculateScore(this.resultList, this.questionList);
    this.percentage = this.scoreService.calculatePercentage(this.score,this.questionList);
    
    //this.testResult={employeeId:this.empId, testId: this.testId, testResponses: this.resultList};
    this.testResult=new testResult(this.empId,this.testId,this.resultList,this.correct,this.incorrect,this.score,this.percentage);
    console.log("Test Result is ", this.testResult);
   this.scoreService.postScore2(this.testResult).subscribe(res=>{console.log(res);
  });
  this.feedbackpage();
  }

  feedbackpage(){
    this.router.navigate(['/employee/feedback']);
  }

  resetTime() {
    this.totalSeconds = 20;
    this.minutes = Math.floor(this.totalSeconds / 60);
    this.seconds = this.totalSeconds % 60;
  }

  checkTime() {
    if (this.count != this.questionList.length) {
      if (this.totalSeconds <= 0) {
        setTimeout(() => { this.nextQuestion() }, 1);
        setTimeout(() => { this.checkTime() }, 1000);
      }
      else {
        this.totalSeconds -= 1;
        this.minutes = Math.floor(this.totalSeconds / 60);
        this.seconds = this.totalSeconds % 60;
        this.roundedMins = this.pad(this.minutes);
        this.roundedSecs=this.pad(this.seconds);
        setTimeout(() => { this.checkTime() }, 1000);
      }
    }
    else {
      if (this.totalSeconds <= 0) {
        setTimeout(() => { this.submitTest() }, 1);
      }
      else {
        this.totalSeconds -= 1;
        this.minutes = Math.floor(this.totalSeconds / 60);
        this.seconds = this.totalSeconds % 60;
        this.roundedMins = this.pad(this.minutes);
        this.roundedSecs=this.pad(this.seconds);
        setTimeout(() => { this.checkTime() }, 1000);
      }

    }

  }
  pad(number){
    return (number<10?'0':'')+number;

  }
}
