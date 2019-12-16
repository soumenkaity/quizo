import { Component, OnInit, OnDestroy } from '@angular/core';
import { FetchTestService } from '../service/fetch-test.service';
import { Question } from '../model/questions';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';
import { ToasterService } from 'src/app/authentication-module/service/toaster-service.service';
import { Observable, Subscription } from 'rxjs/Rx';

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

  private question;
  private count: number;
  choices: any;
  timer: any;
  sub: any;
  ticks: any;


  constructor(
     private fetchTestService: FetchTestService,
     private dataService: DataService,
     private router: Router,
     private toasterService: ToasterService
  ) { }

  ngOnInit() {
    const userDetails = this.dataService.getTestUserDetails();
    // const userDummyDetails = this.dataService.getDummyDetails();
  
    this.fetchTestService.getFirstQuestion(userDetails).subscribe(
      response => {
        console.log(response)
        this.question = response;
        this.count = 0;
        this.choices=this.question['choices'];
        this.timer = Observable.timer(1000,1000);
        // subscribing to a observable returns a subscription object
        this.sub = this.timer.subscribe(t => this.tickerFunc(t));
        this.topicName = userDetails.topicName;
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
      (response: Question) =>{
        this.question = response;
      },
      error => {
        if(error.error ==   "Your test is completed"){
          this.ngOnDestroy();
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
        if(error.error == "Your test is completed"){
          this.feedbackpage()
        }
      }
    )

  }
  ngOnDestroy(): void {
   clearInterval(this.timer);
   console.log("Destroy timer");
        // unsubscribe here
    this.sub.unsubscribe();
  }
}
