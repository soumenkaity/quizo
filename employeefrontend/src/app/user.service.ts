import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { users } from './models/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  url: string = 'http://localhost:9090/quiz/test/topics';
  constructor(private http: HttpClient) { }

  getusers(): Observable<users>{
    return this.http.get<users>(this.url);
  }
}
