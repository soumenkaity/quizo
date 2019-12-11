import { Component, OnInit, OnDestroy, ViewChildren, QueryList } from '@angular/core';
import { Topic } from '../model/topic';
import { TopicService } from '../service/topic.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { DataService } from '../service/data.service';
import { MatPaginator, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {
  form: FormGroup;
  isLoading = true;
  constructor(private topicService: TopicService,private router: Router,
              private dataService: DataService,private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      topics: new FormArray([])
    })
   }
  private topics: Topic[];
  topicDataSource
  topicDisplayedColumns: string[] = ['id', 'name', 'createdAt','actions'];

  @ViewChildren(MatPaginator) paginators = new QueryList<MatPaginator>();
  
  ngOnInit() {
    this.getAllTopics();
  }
  getAllTopics(){
    this.topicService.getAllTopics().subscribe(
      (response: Topic[]) => {
        console.log(response)
        this.topicDataSource = new MatTableDataSource(response);
        this.topicDataSource.paginator = this.paginators.toArray()[0];
        this.isLoading=false;
        this.addCheckBoxesToTopics()
      }
    )
  }
  private addCheckBoxesToTopics() {
    this.topics.forEach((o, i) => {
      const control = new FormControl(i === 0); // if first item set to true, else false
      (this.form.controls.topics as FormArray).push(control);
    });
  }
  goToEmployeeSelection(){
    //get the first '[0]'th topic selected
    const selectedTopic = this.form.value.topics
      .map((v, i) => v ? this.topics[i] : null)
      .filter(v => v !== null)[0];
    console.log(selectedTopic);
    this.dataService.setSelectedTest(selectedTopic)
    this.router.navigate(['/hr/employees'])
  }
  selectedTopic(selectedTopic){
    // console.log(selectedTopic);
    this.dataService.setSelectedTest(selectedTopic)
    this.router.navigate(['/hr/employees'])
  }

}
