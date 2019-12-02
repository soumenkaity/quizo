import { Component, OnInit, QueryList, ViewChildren, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { TopicService } from '../service/topic.service';
import { EmployeeService } from '../service/employee.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { RequestModalComponent } from '../request-modal/request-modal.component';
import { RequestService } from '../service/request.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit,AfterViewInit {

  constructor(
    private topicService: TopicService,
    private employeeService: EmployeeService,
    private requestService:RequestService,
    private fb: FormBuilder,
    public dialog: MatDialog) { }

    
  topicDisplayedColumns: string[] = ['name', 'createdAt', 'link','keywords'];
  employeeDisplayedColumns: string[] = [ 'name', 'phone', 'email'];
  topicDataSource;
  employeeDataSource;

  requestForm: FormGroup

  @ViewChildren(MatPaginator) paginators = new QueryList<MatPaginator>();

  ngOnInit() {
    this.topicService.getAllTopics().subscribe(
      response => {
      this.topicDataSource = new MatTableDataSource(response)
      this.topicDataSource.paginator = this.paginators.toArray()[0];
    });
    this.employeeService.getAllEmployees().subscribe(
      response => {
      this.employeeDataSource = new MatTableDataSource(response)
      this.employeeDataSource.paginator = this.paginators.toArray()[1];
    }
    )
  }

  openDialog(): void {
    this.requestForm = this.fb.group({
      'message':['',Validators.required],
      'value':100

    })
    const dialogRef = this.dialog.open(RequestModalComponent, {
      width: '550px',
      data: {requestForm:this.requestForm},
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result == undefined){
        console.log('-------')
      }
      result.status = 'N'
      this.requestService.addRequest(result.message).subscribe(
        response => {console.log(response)},
        error => {console.log(error)}
      )

    });


  }

  ngAfterViewInit(): void {
  }

}
