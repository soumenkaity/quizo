import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  URLprefix = environment.HrURLprefix;
  constructor(private http:HttpClient) { }


  getAllRequests(){
    return this.http.get(this.URLprefix+'/request');
  }
  getRequestById(id){
    return this.http.get(this.URLprefix+'/request/'+id);
  }  
  addRequest(request){
    return this.http.post(this.URLprefix+'/request',request);
  }
  deleteRequest(request){
    return this.http.delete(this.URLprefix+'/request',request);
  }
}
