import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfirmService {
  private URLprefix = environment.HrURLprefix;

  constructor(private http: HttpClient) { }

  postTestMapping(testMapping){
    return this.http.post(this.URLprefix+"/assign",testMapping);
  }
}
