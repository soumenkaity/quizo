import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { EmployeeResult } from '../model/employeeresult';
@Injectable({
  providedIn: 'root'
})
export class EmployeeresultserviceService {
   

  url: string = 'http://localhost:8083/quiz/test/result';
  url2: String = 'http://localhost:8083/employee/resultbytopic';
  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

   postScore3(employeeresult:EmployeeResult)
   {
    return this.http.post(this.url, employeeresult);
   }
   
   getResult(empid:String)
   {
     return this.http.get<any>(this.url2+'/'+empid);
   }

}
