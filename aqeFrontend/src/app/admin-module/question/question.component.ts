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

  ngOnInit() {
    this.topicName = this.route.snapshot.paramMap.get('name');
    this.topicService.getAllQuestionsOfTopic(this.topicName).subscribe(
      (response: Question[])=>{
        this.questions = response;
        this.isLoading = false;
      },
      error =>{
        console.log(error) 
      }
    )
    
  }

}
