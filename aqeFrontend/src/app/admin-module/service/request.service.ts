import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  URLprefix = environment.adminURLprefix;
  constructor(private http:HttpClient) { }


  getAllRequests(){
    return this.http.get(this.URLprefix+'/requests');
  }
  getRequestById(id){
    return this.http.get(this.URLprefix+'/requests/'+id);
  }  
  addRequest(request){
    return this.http.post(this.URLprefix+'/requests',request);
  }
  deleteRequest(request){
    return this.http.delete(this.URLprefix+'/requests',request);
  }
  updateRequest(request){
    // console.log(request);
    return this.http.put(this.URLprefix+'/requests', request, { headers: { 'Content-Type': 'application/json' } });
  }
}
