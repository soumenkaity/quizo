import { Injectable } from '@angular/core';
import { Message } from '../model/message'
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class MessageserviceService {
  //  message:Message;
  message={'name':'','email':'','phone':''} 

  URLprefix = environment.adminURLprefix;
  constructor(private http:HttpClient) { }

  post(name,email,number){
   this.message.name=name;
   this.message.email=email;
   this.message.phone=number;
   //console.log("message:",this.message);
   return this.http.post<any>(this.URLprefix+'/sendmessage', this.message)
  }

}
