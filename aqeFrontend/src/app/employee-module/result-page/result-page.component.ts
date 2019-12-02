import { Component, OnInit } from '@angular/core';
import { EmployeeresultserviceService } from '../service/employeeresultservice.service';
import { EmployeeResult } from '../model/employeeresult';
import { Attempt } from '../model/Attempt';
import { GestureConfig } from '@angular/material';
@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.css']
})
export class ResultPageComponent implements OnInit {
  attempts: Attempt[];
  correctColor="green";
  wrongColor="red";
  attempt:Attempt;
  styleList = new Array();
  constructor(private Employeeresult:EmployeeresultserviceService) { }
  
  private employeeResultList:EmployeeResult[];
  private employeeResult;
  count:number;
  emailId;
  // attempt:Attempt[];
  ngOnInit() {
    this.emailId = sessionStorage.getItem('email');
    this.Employeeresult.getResult(this.emailId).subscribe(
      (data: EmployeeResult[]) => {
      console.log( data)
      this.employeeResultList = data;
      this.employeeResult=this.employeeResultList[0];
      this.attempts = this.employeeResult.attempt;
      this.attempts.forEach((v,k)=>{
        v.choices.forEach((val,key)=>{
          console.log(key);
        })
        
      })
      this.count=0;

        })
  }
    evaluate(){

    }

}
