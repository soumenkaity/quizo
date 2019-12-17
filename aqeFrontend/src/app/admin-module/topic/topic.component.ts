import { Component, OnInit, AfterViewInit, ViewChildren, QueryList, Inject } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { Topic } from 'src/app/hr-module/model/topic';
import { TopicService } from '../service/topic.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogData } from '../admin/admin.component';
import { Result } from 'src/app/employee-module/model/result';
import { Observable } from 'rxjs';
import { ToasterService } from 'src/app/authentication-module/service/toaster-service.service';


interface Metadata{
  easyQuestionCount: number;
  mediumQuestionCount: number;
  hardQuestionCount: number;
  questionCount: number;
}

export class CSVRecord {

  public question: any;
  public sentence: any;
  public answer: any;
  public choice1: String;
  public choice2: String;
  public choice3: String;
  public choice4: String;
  public difficulty: String;
  
  constructor() {

  }
}
@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit, AfterViewInit {
  metadata: Object;
  isFileSelected: boolean;
  selectedFile: any;
  csvRecords: any[];
  fileImportInput: any;
  isLoading: boolean;
  topicName: any;

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
  // console.log(metadata);
   const dialogRef = this.dialog.open(TopicDetails, {
    width: '550px',
    height:'800px',
    data: {topic: topic ,metadata: metadata}
  });

  dialogRef.afterClosed().subscribe(result => {
    // console.log('The dialog was closed');
  });
  }
  
  deleteTopic(topicName){
    this.topicService.deleteTopic(topicName).subscribe(
      response => {},
      error =>{
        // console.log(error);
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


  fileChangeListener($event: any): void {
    this.isFileSelected = false;

    let text = [];
    let files = $event.srcElement.files;
    this.selectedFile = files[0];
    if (this.isCSVFile(files[0])) {

      let input = $event.target;
      let reader = new FileReader();
      reader.readAsText(input.files[0]);

      reader.onload = () => {
        let csvData = reader.result;
        let csvRecordsArray = (<string>csvData).split(/\r\n|\n/);

        let headersRow = this.getHeaderArray(csvRecordsArray);

        this.csvRecords = this.getDataRecordsArrayFromCSVFile(csvRecordsArray, headersRow.length);

      };

      reader.onerror = function () {
        alert('Unable to read ' + input.files[0]);
      };

    } else {
      alert("Please import valid .csv file.");
      this.fileReset();
    }
  }

  getDataRecordsArrayFromCSVFile(csvRecordsArray: any, headerLength: any) {
    let jsonArr = [];

    for (let i = 1; i < csvRecordsArray.length; i++) {
      let data = (<string>csvRecordsArray[i]).split(',');

      // FOR EACH ROW IN CSV FILE IF THE NUMBER OF COLUMNS
      // ARE SAME AS NUMBER OF HEADER COLUMNS THEN PARSE THE DATA
      if (data.length == headerLength) {

        let csvRecord: CSVRecord = new CSVRecord();

        csvRecord.question = data[0].trim();
        csvRecord.sentence = data[1].trim();
        csvRecord.answer = data[2].trim();
        csvRecord.choice1 = data[3].trim();
        csvRecord.choice2 = data[4].trim();
        csvRecord.choice3 = data[5].trim();
        csvRecord.choice4 = data[6].trim();
        csvRecord.difficulty = data[7].trim();

        var obj = {
          "question": csvRecord.question,
          "sentence": csvRecord.sentence,
          "answer": csvRecord.answer,
          "choices":[ csvRecord.choice1,csvRecord.choice2,csvRecord.choice3,csvRecord.choice4],
          "difficulty":csvRecord.difficulty,
          "correctAttempts":0,
          "totalOccurences":0
        }

        jsonArr.push(obj);
      }
    }
    this.isFileSelected = true;
    return jsonArr;
  }

  // CHECK IF FILE IS A VALID CSV FILE
  isCSVFile(file: any) {
    return file.name.endsWith(".csv");
  }

  // GET CSV FILE HEADER COLUMNS
  getHeaderArray(csvRecordsArr: any) {
    let headers = (<string>csvRecordsArr[0]).split(',');
    let headerArray = [];
    for (let j = 0; j < headers.length; j++) {
      headerArray.push(headers[j]);
    }
    return headerArray;
  }

  fileReset() {
    this.fileImportInput.nativeElement.value = "";
    this.csvRecords = [];
  }

  submitCsv(){
    this.isLoading = true;
    this.isFileSelected = false;
    this.topicService.createTopic(this.topicName).subscribe(
      response => {
        this.ts.success("Topic was inserted")
        this.isLoading = false
      },
      error =>{
        this.ts.error("Couldnot Create topic")
        this.isLoading = false
      },
      () => {}
    )
    this.topicService.insertQuestions(this.csvRecords,this.topicName).subscribe(
      
      response => {},
      error =>{
        this.ts.success("Questions were uploaded")
        this.isLoading = false
      },
      () => {} 
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
