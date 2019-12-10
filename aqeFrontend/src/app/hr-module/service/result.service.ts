import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ResultService {

  URLprefix = environment.HrURLprefix
  constructor(private http:HttpClient) { }

  getAllTestUserMapping(){
    return this.http.get(this.URLprefix+'/results')
  }

  public getResultOfAllTests(){
    return this.http.get(this.URLprefix+'/results')
  }

  public getResultForEmployeeWhoGaveThisTest(empId,testId){
    return this.http.get<any>(this.URLprefix+'/result?testId='+testId+'&empId='+empId);
   }

   public getResultById(id){
    return this.http.get(this.URLprefix+'/result/'+id);
  }
  
}
