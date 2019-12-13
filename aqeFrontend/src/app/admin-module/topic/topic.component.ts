import { Component, OnInit, AfterViewInit, ViewChildren, QueryList } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { Topic } from 'src/app/hr-module/model/topic';
import { TopicService } from '../service/topic.service';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit, AfterViewInit {

  constructor(
    private topicService: TopicService,

  ) { }

  topicDataSource;
  topicDisplayedColumns: string[] = ['id','name', 'createdAt', 'link','actions'];

  @ViewChildren(MatPaginator) paginators = new QueryList<MatPaginator>();

  ngOnInit() {
  }
  ngAfterViewInit(): void {
    this.topicService.getAllTopics().subscribe(
      (response: Topic[]) => {
      this.topicDataSource = new MatTableDataSource(response)
      this.topicDataSource.paginator = this.paginators.toArray()[0];
    });
  }

}
