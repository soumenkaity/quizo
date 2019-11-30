import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CreateuserService {
  private URLprefix = environment.employeeURLprefix;
  constructor(private http: HttpClient) { }

  postemployeedetails(employee){
    return this.http.post(this.URLprefix+"/employeedetails",employee);
  }
}
