import { Injectable } from '@angular/core';
import { Message } from '../model/message'
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class MessageserviceService {
  private message:Message;
  URLprefix = environment.adminURLprefix;
  constructor(private http:HttpClient) { }

  post(name:String,email:String,number:String)
  {
   this.message.name=name;
   this.message.email=email;
   this.message.phone=number;

   return this.http.post(this.URLprefix+'/sendmessage', this.message);

  }

}
