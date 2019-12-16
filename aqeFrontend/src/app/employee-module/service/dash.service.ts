
// export class Detail{
//   constructor(
//     public employeename:string,
//     public employeescore:string,
//     public testname:string,
//   ){}
// }

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Detail } from './dash.service';
@Injectable({
  providedIn: 'root'
})
export class DashService {
  constructor(private httpClient: HttpClient) {
  }
  getDetails(): Observable<any> {
    //console.log("test call");
    return this.httpClient.get<Detail[]>("http://172.23.234.85:8093/employee/dashboard/");
  }
}

export interface Detail{
  _employeeid: string;
  employeename: string;
  employeescore: string;
  testname: number;
}