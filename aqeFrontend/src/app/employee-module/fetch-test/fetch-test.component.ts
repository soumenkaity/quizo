import { Component, OnInit } from '@angular/core';
import { FetchTestService } from '../service/fetch-test.service';
import { Question } from '../model/questions';
import { result } from '../model/result';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fetch-test',
  templateUrl: './fetch-test.component.html',
  styleUrls: ['./fetch-test.component.css']
})
export class FetchTestComponent implements OnInit {

  public options:any;
  private topic;

  private questionList: Question[];

  private question:Question;

  private count:number;

  private result:result;
  private resultList= [];

  private bool=true;

  constructor(private fetchTestService:FetchTestService,
              private router:Router,
              ) { }

  ngOnInit() {
    console.log("in ngoninit")
    this.fetchTestService.getQuestions( this.topic).subscribe(data=>{
      console.log(data);
      this.questionList=data;
      this.question=this.questionList[0];
      console.log(this.question);
      this.count = 0;
    });
    
  }

  nextQuestion(){               
   
    this.count=this.count+1;
    this.question=this.questionList[this.count];
    this.options=null;
  }

 
  prevQuestion(){
    this.count=this.count-1;
    this.question=this.questionList[this.count];
    this.options=null;
  }

  submitTest(){
    console.log(this.resultList);
    this.bool=false;
    this.router.navigate(['/employee/feedback']);

  }

  saveAnswer(option:string){
    console.log("option data is ",option);
    
    
   this.result=new result(this.question.id,option);

    console.log("result ",this.result);
  
    this.resultList[this.count]=this.result;

    console.log("the result list is ",this.resultList);
  }

  hi(){
    console.log("hi");
  }



}
class Options {
  constructor(public answer: number, public question: number) {}
}
