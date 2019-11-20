import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { users } from '../models/user';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private URLprefix = environment.employeeURLprefix;
  constructor(private http: HttpClient) { }

  getusers(): Observable<users>{
    return this.http.get<users>(this.URLprefix+'/topics');
  }
}
