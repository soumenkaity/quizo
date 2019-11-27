import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  
  constructor(private httpClient:HttpClient) { }
  private URLprefix = environment.adminURLprefix
  register(username,password,email){
    return this.httpClient.post<any>(this.URLprefix+'/register',{username,password,email,"role":"EMP"})
  }
  registerhr(hr)
  {
     return this.httpClient.post<any>(this.URLprefix+'/registerhr', {hr});
  }
}
