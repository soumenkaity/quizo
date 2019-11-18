import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  private userUrl: string;

  private res;
  constructor(private http: HttpClient) {
    this.userUrl = 'http://localhost:8091/quiz/admin'
  }

  public createTest(topic): Observable<any> {
    return this.http.post<any>(this.userUrl, topic);
  }
}
