import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private URLprefix = environment.employeeURLprefix+'/dashboard';

  constructor(private http:HttpClient) { }
  getEmpDetails(email){
    return this.http.get(this.URLprefix+'?email='+email);
  }

  getActiveTests(userId){
    return this.http.get(this.URLprefix+'/active/e?email='+userId);
  }
  getCompleteTests(userId){
    return this.http.get(this.URLprefix+'/complete/e?email='+userId);
  }
}
