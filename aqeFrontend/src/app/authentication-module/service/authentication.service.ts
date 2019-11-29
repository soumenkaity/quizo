import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

export class User{
  constructor(
    public status:string,
     ) {}
  
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
private URLprefix = environment.authURLprefix;

  constructor(private httpClient:HttpClient) { }

  authenticate(username, password) {
  return this.httpClient.post<any>(this.URLprefix+'/signin',{username,password})
  }

  sendMail(email){
    console.log(email)
    return this.httpClient.post<any>(this.URLprefix+'/reset?email='+email,{});
  }
  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    // console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('username')
  }
  getUserRole(){
    return sessionStorage.getItem('role');
  }
  getUser(){
    return {username:sessionStorage.getItem('username'),role:sessionStorage.getItem('role')}
  }
}