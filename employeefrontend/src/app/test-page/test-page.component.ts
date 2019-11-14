import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { score } from '../models/score';
import { DataService } from '../data.service';
import { TopicService } from '../topic.service';
import { ScoreService } from '../score.service';

@Component({
  selector: 'app-test-page-component',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.css']
})
export class TestPageComponent implements OnInit, OnDestroy {
  

  //ngModule for two way binding
  answerChoices:any = [];
  
  subscription;
  topic: string="java";
  questionList;
  correct:number = 0;
  incorrect:number = 0;

  constructor(private data:DataService, private s: TopicService, private r: Router, private score: ScoreService) { }

  ngOnInit() {
    this.data.userName.subscribe(data => {
      //if user is not logged on, they cannot access this page
      if(data === ''){
        // this.r.navigate(['/error']);
      }
    });
    this.subscription = this.data.topicSelected.subscribe(message => {
      this.topic = message;
      
    });
    this.s.getQuestions(this.topic).subscribe(data => {this.questionList = data[1].questions; console.log(data[0].questions)});
      console.log(this.questionList)
  }
  ngOnDestroy(): void {
   // this.subscription.unsubscribe();
  }
  submitQuiz(){
    //Edge case for submitting the quiz early
    if(this.answerChoices.length < 5){
      for(let i = this.answerChoices.length; i < 5; i++){
        this.answerChoices.push(0);
      }
    }
    //Counts the number of correct and incorrect questions
    for(let i = 0; i < this.questionList.length; i++){
      if(this.questionList[i].answer === this.answerChoices[i]){
        this.correct += 1;
      }
      else{
        this.incorrect += 1;
      }
    }
    //Posts score json
    this.score.postScore(this.correct, this.incorrect).subscribe();
    let scoreObj:score = {
      correct: this.correct,
      incorrect: this.incorrect
    };
    this.data.changeScore(scoreObj);
    this.r.navigate(['/thankyou']);
  }

}
