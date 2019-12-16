import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TopicService {
  private URLprefix = environment.adminURLprefix;
  
  constructor(private http: HttpClient) {}

  getAllTopics(){
    return this.http.get(this.URLprefix+"/topics");
  }

  deleteTopic(topicName){
    return this.http.get(this.URLprefix+"/topic/delete?name="+topicName,{});
  }

  reshuffleTopic(topicName){
    return this.http.get(this.URLprefix+"/topic/"+topicName+"/reshuffle");
  }

  createTopic(topicName){
    const today = new Date();
  

    

    return this.http.post(this.URLprefix+"/topic/add",{
      "name":topicName,
      "link":"created by csv upload",
      "createdAt":today.toDateString(),
      "keywords":["programming","stuff"]
    });
  }

  insertQuestions(csvRecords,topicName){
    return this.http.post(this.URLprefix+"/topic/"+topicName+"/insert",csvRecords);
  }

  getAllQuestionsOfTopic(topicName){
    return this.http.get(this.URLprefix+"/topic/"+topicName);
  }
  getQuestionOfTopicByPage(topicName,page){
    // console.log(page)
    return this.http.get(this.URLprefix+"/topic/"+topicName+"?page="+page);
  }
  getTopicMetadata(topicName){
    return this.http.get(this.URLprefix+"/topic/"+topicName+"/metadata").toPromise();
  }
}
