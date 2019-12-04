import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TopicService {
  private URLprefix = environment.HrURLprefix;
  

  constructor(private http: HttpClient) {  }

  getAllTopics(){
    return this.http.get(this.URLprefix+"/topics");
  }
}