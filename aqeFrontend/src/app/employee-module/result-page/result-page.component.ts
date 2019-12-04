import { Component, OnInit } from '@angular/core';
import { EmployeeresultserviceService } from '../service/employeeresultservice.service';
import { EmployeeResult } from '../model/employeeresult';
import { Attempt } from '../model/Attempt';
import { GestureConfig } from '@angular/material';
// import { getMaxListeners } from 'cluster';
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
  // attempt:Attempt;
  styleList = new Array();
  constructor(private Employeeresult:EmployeeresultserviceService) { }
  
  private employeeResultList:EmployeeResult[];
  private employeeResult;
  count:number;
  emailId="shikharg273@gmail.com";
  topicId="5dd37eeed2dfaaa776485bea"
  // attempt:Attempt[];
  ngOnInit() {
    this.Employeeresult.getResult(this.topicId).subscribe(
      (data: EmployeeResult[]) => {
      console.log( data)
      this.employeeResultList = data;
      console.log(this.employeeResultList);
      this.employeeResult=this.employeeResultList[0];
      console.log(this.employeeResult);
      this.attempts = this.employeeResult.attempts;
      console.log(this.attempts);
      this.count=0;

        })
  }
    evaluate(response, correct )
    {
      var result= response.localeCompare(correct);
      // var result1= response.localeCompare(choices);
      console.log(result);
      if(result)
     {
       return  true;
     }
     else
     {
       return  false;
     }
      
    }

}
