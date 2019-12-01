import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../../model/employee';
import { Observable, from } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  URLprefix = environment.authURLprefix;
  constructor( private http : HttpClient) { }

  getAllDetails(email):Observable<any>{
    return this.http.get<any>(this.URLprefix+'/details?email='+email);
  }
}
