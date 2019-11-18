import { Injectable } from '@angular/core';

import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../model/employee';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private URLprefix = environment.HrURLprefix;

  constructor(private http: HttpClient) { }

  getAllEmployees(){
    return this.http.get<Employee[]>(this.URLprefix+"/users");
  }
}
