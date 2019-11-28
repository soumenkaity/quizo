import { Component, OnInit } from '@angular/core';
import { FetchTestService } from '../service/fetch-test.service';
import { Question } from '../model/questions';
import { result } from '../model/result';
import { Router } from '@angular/router';
import { ScoreService } from '../service/score.service';

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
  private testResult;
  private empId: string = '878967asdgfg';
  private testId: string = 'u75asd87asd55';

  private result: result;
  private resultList = [];

  private selectedOption;
  choices: any;
  private score:number;

  constructor(private fetchTestService: FetchTestService, private scoreService: ScoreService,
    private router: Router,
  ) { }

  ngOnInit() {
    console.log("in ngoninit");
    this.fetchTestService.getQuestions(this.topic).subscribe(data => {
      console.log( data[1]);
      this.questionList = data;
      this.question = this.questionList[0];
      // console.log(this.question);
      this.choices=this.question['choices'];
      console.log(this.options)
      this.count = 0;
    });
    this.checkTime();


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
      this.score=1;
    }
    else this.score=0;


    this.result = new result(this.question.id, parseInt(option)-1,this.score);

    console.log("result ", this.result);

    this.resultList[this.count] = this.result;

    console.log("the result list is ", this.resultList);
  }


  submitTest() {
    console.log(this.resultList);
    this.testResult={employeeId:this.empId, testId: this.testId, testResponses: this.resultList};
   this.scoreService.postScore2(this.testResult).subscribe(res=>console.log(res));

  }

  resetTime() {
    this.totalSeconds = 20;
    this.minutes = Math.floor(this.totalSeconds / 60);
    this.seconds = this.totalSeconds % 60;
  }

  checkTime() {
    if (this.count != 3) {
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
