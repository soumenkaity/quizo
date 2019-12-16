import { Component, OnInit } from '@angular/core';
import { TopicService } from '../service/topic.service';
import { ActivatedRoute } from '@angular/router';

interface Question{
  id: String;
  question: String;
  sentence: String;
  answer: String;
  choices: String[];
  difficulty: String;
  correctAttempts: number;
  totalOccurrences: number;
}

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  constructor(
    private topicService:TopicService,
    private route:ActivatedRoute
    ) { }
  
    questions: Question[];
    topicName;
    isLoading = true;
    pageNo = 1;
    pages=5;
    metadata;
  async ngOnInit() {
    this.topicName = this.route.snapshot.paramMap.get('name');
    this.getQuestions(this.topicName,this.pageNo);
    this.metadata = await this.topicService.getTopicMetadata(this.topicName).then();
    // console.log(this.metadata);
    this.pages = this.metadata.questionCount/40;
  }

  getQuestions(topicName,page){
    this.topicService.getQuestionOfTopicByPage(topicName,page).subscribe(
      (response: Question[])=>{
        this.questions = response;
        this.isLoading = false;
      },
      error =>{
        // console.log(error) 
      }
    )
  }

  nextPage(){
    this.pageNo<this.pages?this.pageNo++:this.pageNo;
    this.getQuestions(this.topicName,this.pageNo);
  }
  prevPage(){
    this.pageNo>1?this.pageNo--:this.pageNo;
    this.getQuestions(this.topicName,this.pageNo);
  }

}
