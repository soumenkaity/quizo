import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Topic } from '../model/topic';

import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class TopicService {

  private URLprefix = environment.HrURLprefix;
  

  constructor(private http: HttpClient) {  }

  getAllTopics(){
    return this.http.get<Topic[]>(this.URLprefix+"/topics");
  }
}
