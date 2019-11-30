import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../../model/employee';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  constructor( private http : HttpClient) { }

  getAllDetails():Observable<any>{
    console.log("test call");
    return this.http.get<Employee[]>("http://localhost:8083/employee/getemployeesdetails");
  }
}
