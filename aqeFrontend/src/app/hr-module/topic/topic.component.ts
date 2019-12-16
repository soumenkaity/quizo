import { Component, OnInit, OnDestroy, ViewChildren, QueryList } from '@angular/core';
import { Topic } from '../model/topic';
import { TopicService } from '../service/topic.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { DataService } from '../service/data.service';
import {ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';


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
  @ViewChild(MatSort, {static: true}) sort: MatSort;
 
  
  ngOnInit() {
    this.getAllTopics();
  }
  getAllTopics(){
    this.topicService.getAllTopics().subscribe(
      (response: Topic[]) => {
        //console.log(response)
        this.topicDataSource = new MatTableDataSource(response);
        this.topicDataSource.paginator = this.paginators.toArray()[0];
        this.topicDataSource.sort = this.sort; 
        this.isLoading=false;
      }
    )
  }

  goToEmployeeSelection(){
    //get the first '[0]'th topic selected
    const selectedTopic = this.form.value.topics
      .map((v, i) => v ? this.topics[i] : null)
      .filter(v => v !== null)[0];
    //console.log(selectedTopic);
    this.dataService.setSelectedTest(selectedTopic)
    this.router.navigate(['/hr/employees'])
  }
  selectedTopic(selectedTopic){
    // console.log(selectedTopic);
    this.dataService.setSelectedTest(selectedTopic)
    this.router.navigate(['/hr/employees'])
  }

  applyFilter(filterValue: string) {
    this.topicDataSource.filter = filterValue.trim().toLowerCase();

    if (this.topicDataSource.paginator) {
      this.topicDataSource.paginator.firstPage();
    }
  }
}
