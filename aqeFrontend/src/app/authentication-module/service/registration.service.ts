import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private httpClient:HttpClient) { }
  register(username,password,email){
    return this.httpClient.post<any>('http://localhost:8080/auth/register',{username,password,email,"role":"EMP"})
  }
}
