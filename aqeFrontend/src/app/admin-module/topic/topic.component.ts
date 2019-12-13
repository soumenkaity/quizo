import { Component, OnInit, AfterViewInit, ViewChildren, QueryList, Inject } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { Topic } from 'src/app/hr-module/model/topic';
import { TopicService } from '../service/topic.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogData } from '../admin/admin.component';
import { result } from 'src/app/employee-module/model/result';
import { Observable } from 'rxjs';


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
  // async getMetadata(topicName){
  //   return await this.topicService.getTopicMetadata(topicName).toPromise().then((response)=>{return response});
  // }
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
