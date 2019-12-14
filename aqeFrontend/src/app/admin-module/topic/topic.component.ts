import { Component, OnInit, AfterViewInit, ViewChildren, QueryList, Inject } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { Topic } from 'src/app/hr-module/model/topic';
import { TopicService } from '../service/topic.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogData } from '../admin/admin.component';
import { result } from 'src/app/employee-module/model/result';
import { Observable } from 'rxjs';
import { ToasterService } from 'src/app/authentication-module/service/toaster-service.service';


interface Metadata{
  easyQuestionCount: number;
  mediumQuestionCount: number;
  hardQuestionCount: number;
  questionCount: number;
}
@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit, AfterViewInit {
  metadata: Object;

  constructor(
    private topicService: TopicService,
    private ts: ToasterService,
    public dialog: MatDialog
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

  async openDialog(topic){
  var metadata = await this.topicService.getTopicMetadata(topic.name);
  console.log(metadata);
   const dialogRef = this.dialog.open(TopicDetails, {
    width: '550px',
    height:'800px',
    data: {topic: topic ,metadata: metadata}
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
  });
  }
  
  deleteTopic(topicName){
    this.topicService.deleteTopic(topicName).subscribe(
      response => {},
      error =>{
        this.ts.success("Topic Deleted")
      }
    )
  }
  reshuffleTopic(topicName){
    this.topicService.reshuffleTopic(topicName).subscribe(
      response => {},
      error =>{
        this.ts.success("Topic Restored to original state")
      }
    )
  }
}

@Component({
  selector: 'topicdetails',
  templateUrl: 'topic-details.html',
})
export class TopicDetails{

  constructor(
    public dialogRef: MatDialogRef<TopicDetails>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
