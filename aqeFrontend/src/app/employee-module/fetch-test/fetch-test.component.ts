import { Component, OnInit } from '@angular/core';
import { FetchTestService } from '../fetch-test.service';
import { Question } from '../model/questions';
import { result } from '../model/result';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fetch-test',
  templateUrl: './fetch-test.component.html',
  styleUrls: ['./fetch-test.component.css']
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

  private result: result;
  private resultList = [];

  private bool = true;

  constructor(private fetchTestService: FetchTestService,
    private router: Router,
  ) { }

  ngOnInit() {
    console.log("in ngoninit");
    this.fetchTestService.getQuestions(this.topic).subscribe(data => {
      console.log(data);
      this.questionList = data;
      this.question = this.questionList[0];
      console.log(this.question);
      this.count = 0;
    });
    this.checkTime();


  }

  nextQuestion() {

    this.count = this.count + 1;
    this.question = this.questionList[this.count];
    this.options = null;
    this.resetTime();
  }


  prevQuestion() {
    this.count = this.count - 1;
    this.question = this.questionList[this.count];
    this.options = null;
  }



  saveAnswer(option: string) {
    console.log("option data is ", this.options);


    this.result = new result(this.question.id, option);

    console.log("result ", this.result);

    this.resultList[this.count] = this.result;

    console.log("the result list is ", this.resultList);
  }


  submitTest() {
    console.log(this.resultList);
    this.bool = false;

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
