import { Component, OnInit } from '@angular/core';
import { EmployeeresultserviceService } from '../service/employeeresultservice.service';
import { EmployeeResult } from '../model/employeeresult';
import { Attempt } from '../model/Attempt';
import { GestureConfig, MatTableDataSource } from '@angular/material';
import { ActivatedRoute } from '@angular/router';


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
     private Employeeresult:EmployeeresultserviceService,
     private route: ActivatedRoute) { } 

  employeeResult: EmployeeResult;

  count:number;
  ngOnInit() {
    const empId = this.route.snapshot.queryParams['empId'];
    const testId = this.route.snapshot.queryParams['testId'];
    this.Employeeresult.getResultForEmployeeWhoGaveThisTest(empId,testId).subscribe(
      (data: EmployeeResult) => {
      console.log("data ",data);
      this.employeeResult=data;

       this.attempts = this.employeeResult.attempts;
        console.log(this.attempts);
       this.count=0;        
     })
  }  
    evaluate(response, correct ){
      var result= response.localeCompare(correct);
      console.log(result);
      if(result){
       return  true;
      }else{
       return  false;
      }
    }
}


