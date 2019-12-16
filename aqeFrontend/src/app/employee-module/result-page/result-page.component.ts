import { Component, OnInit } from '@angular/core';
import { EmployeeresultserviceService } from '../service/employeeresultservice.service';
import { EmployeeResult } from '../model/employeeresult';
import { Attempt } from '../model/Attempt';
import { GestureConfig, MatTableDataSource } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../service/data.service';


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
     private route: ActivatedRoute,
     private dataService: DataService) { } 

  employeeResult: EmployeeResult;

  count:number;
  ngOnInit() {
    const result = this.dataService.getResultDetails();
   // console.log(result);
    this.Employeeresult.getResultForEmployeeWhoGaveThisTest(result.empId,result.testId).subscribe(
      (data: EmployeeResult) => {
      //console.log("data ",data);
      this.employeeResult=data;
      this.attempts = this.employeeResult.attempts;
      //console.log(this.attempts);
      this.count=0;        
     })
  }  
    evaluate(response, correct ){
      var result= response.localeCompare(correct);
     // console.log(result);
      if(result){
       return  true;
      }else{
       return  false;
      }
    }
}


