import { Component, OnInit } from '@angular/core';
import { EmployeeresultserviceService } from '../service/employeeresultservice.service';
import { EmployeeResult } from '../model/employeeresult';
import { Attempt } from '../model/Attempt';
@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.css']
})
export class ResultPageComponent implements OnInit {

  constructor(private Employeeresult:EmployeeresultserviceService) { }
  
  private employeeResultList:EmployeeResult[];
  private employeeResult;
  count:number;
  emailId;
  attempt:Attempt;
  ngOnInit() {
    this.emailId = sessionStorage.getItem('email');
    this.Employeeresult.getResult(this.emailId).subscribe(
      (data: EmployeeResult[]) => {
      console.log( data)
      this.employeeResultList = data;
      this.employeeResult=this.employeeResultList[0];
      this.attempt=this.employeeResult.attempt[0];
      

    })
  }
    

}
