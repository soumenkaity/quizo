import { Component, OnInit } from '@angular/core';
import { GestureConfig, MatTableDataSource } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { ResultService } from '../service/result.service';

interface Attempt{
  questionId:String;
  question:String ;
  response:String;
  answer:String;
  choices:String[];
}
interface Result{
  id: String;
  empId: String;
  testId:String;
  topicId: String;
  empName: String;
  topicName:String;
  score:number;
  correct:number;
  wrong:number;
  attempts:Attempt[];
}
 @Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.css']
})
export class ResultPageComponent implements OnInit {
  attempts: Attempt[];
  response:String;
  correct:String;
  correctColor="green";
  wrongColor="red";
  styleList = new Array(); 

   constructor(
    private resultService: ResultService,
     private route: ActivatedRoute) { } 

  result;

  count:number;
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.resultService.getResultById(id).subscribe(
      (data: Result) => {
      //console.log("data ",data);
      this.result=data;
       this.attempts = this.result.attempts;
       this.count=0;        
     })
  }  
    evaluate(response, correct ){
      var result= response.localeCompare(correct);
      //(result);
      if(result){
       return  true;
      }else{
       return  false;
      }
    }
}


