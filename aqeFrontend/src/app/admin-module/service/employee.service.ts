import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private URLprefix = environment.HrURLprefix;
  constructor(private http: HttpClient) { }

  getAllEmployees(){
    return this.http.get(this.URLprefix+"/users");
  }
}
