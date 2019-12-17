import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  private URLprefix = environment.adminURLprefix

  constructor(private http: HttpClient) {}
  public createTest(topic): Observable<any> {
    console.log(topic)
    return this.http.post<any>(this.URLprefix+'/create-topic', topic);
  }
}
