import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class Employee{
  constructor(
    public empId:string,
    public name:string,
    public designation:string,
    public salary:string,
  ) {}
}

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private httpClient:HttpClient) { 
     }

  getEmployees(){
    const headers = new HttpHeaders({ Authorization: 'Bearer ' + sessionStorage.getItem('token') });  
       return this.httpClient.get<Employee[]>('http://localhost:8080/me',{headers});
  }


}