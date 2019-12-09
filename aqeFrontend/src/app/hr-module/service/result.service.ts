import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ResultService {

  URLprefix = environment.HrURLprefix
  constructor(private http:HttpClient) { }

  public getAllTests(){
    return this.http.get(this.URLprefix+'/results')
  }
  
}
