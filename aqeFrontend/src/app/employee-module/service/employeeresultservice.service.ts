import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { EmployeeResult } from '../model/employeeresult';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class EmployeeresultserviceService {
   
  URLprefix = environment.employeeURLprefix;
  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
   
   getResultForTest(id:String){
     return this.http.get<any>(this.URLprefix+'/result'+id);
   }
   getResultForEmployee(empId){
    return this.http.get<any>(this.URLprefix+'/result/employee'+empId);
   }
   getResultForEmployeeWhoGaveThisTest(empId,testId){
    return this.http.get<any>(this.URLprefix+'/result?testId='+testId+'&empId='+empId);
   }

}
