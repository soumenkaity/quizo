import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class User{
  constructor(
    public status:string,
     ) {}
  
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private httpClient:HttpClient
  ) { 
     }

     authenticate(username, password) {
      return this.httpClient.post<any>('http://localhost:8080/auth/signin',{username,password})
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