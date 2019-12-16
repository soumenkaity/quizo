import { Component, OnInit, QueryList, ViewChildren, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { TopicService } from '../service/topic.service';
import { EmployeeService } from '../service/employee.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { RequestModalComponent } from '../request-modal/request-modal.component';
import { RequestService } from '../service/request.service';
import { ToasterService } from 'src/app/authentication-module/service/toaster-service.service';
import { DataService } from '../service/data.service';
import {ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort'; 

      

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, AfterViewInit {

  constructor(
    private topicService: TopicService,
    private employeeService: EmployeeService,
    private requestService: RequestService,
    private fb: FormBuilder,
    public dialog: MatDialog,
    private toasterService: ToasterService,
    private dataService: DataService) { }


  topicDisplayedColumns: string[] = ['id', 'name', 'createdAt', 'link', 'keywords'];
  employeeDisplayedColumns: string[] = ['id', 'name', 'phone', 'email'];
  requestDisplayedColumns: string[] = ['id', 'message', 'status', 'actions'];
  topicDataSource;
  employeeDataSource;
  requestDataSource;
  requestForm: FormGroup

  @ViewChildren(MatPaginator) paginators = new QueryList<MatPaginator>();
  @ViewChild(MatSort, {static: true}) matSort: MatSort;
  @ViewChild('topicSort', {static: true}) topicSort: MatSort;
  @ViewChild('empSort', {static: true}) empSort: MatSort;
  @ViewChild('requestSort', {static: true}) requestSort: MatSort;
  ngOnInit() {
    this.topicService.getAllTopics().subscribe(
      response => {
        this.topicDataSource = new MatTableDataSource(response)
        this.topicDataSource.sort = this.topicSort;
        this.topicDataSource.paginator = this.paginators.toArray()[0];
      });
    this.employeeService.getAllEmployees().subscribe(
      response => {
        this.employeeDataSource = new MatTableDataSource(response)
        this.employeeDataSource.sort = this.empSort;
        this.employeeDataSource.paginator = this.paginators.toArray()[1];
      });
    this.requestService.getAllRequests().subscribe(
      response => {
        this.requestDataSource = new MatTableDataSource(response)
        this.requestDataSource.sort = this.requestSort;
        this.requestDataSource.paginator = this.paginators.toArray()[2];
      });

  }

  openDialog(): void {
    this.requestForm = this.fb.group({
      'message': ['', Validators.required],
      'value': 100

    })
    const dialogRef = this.dialog.open(RequestModalComponent, {
      width: '550px',
      data: { requestForm: this.requestForm },
    });

    dialogRef.afterClosed().subscribe(result => {
      //console.log(result)
      if (result != undefined) {
        //console.log('-------')
        result.status = 'N'
        this.requestService.addRequest(result).subscribe(
          response => {this.toasterService.success("Request ADDED")
          this.requestService.getAllRequests().subscribe(
            response => {
              this.requestDataSource = new MatTableDataSource(response)
              this.requestDataSource.sort = this.requestSort;
              this.requestDataSource.paginator = this.paginators.toArray()[2];
            }); },
          error => { 
            
          }
        )
      }
    });


  }

  deleteRequest(request) {
    //console.log(request)
    this.requestService.deleteRequest(request).subscribe(
      res => { },
      err => { this.toasterService.success("Request Deleted") }
    )
    this.requestService.getAllRequests().subscribe(
      response => {
        this.requestDataSource = new MatTableDataSource(response)
        this.requestDataSource.paginator = this.paginators.toArray()[2];
      });
  }

  ngAfterViewInit(): void {
  }

  applyFilterEmployee(filterValue: string) {
    this.employeeDataSource.filter = filterValue.trim().toLowerCase();

    if (this.employeeDataSource.paginator) {
      this.employeeDataSource.paginator.firstPage();
    }
  }

  applyFilterTopic(filterValue: string) {
    this.topicDataSource.filter = filterValue.trim().toLowerCase();

    if (this.topicDataSource.paginator) {
      this.topicDataSource.paginator.firstPage();
    }
  }
  applyFilterRequest(filterValue: string) {
    this.requestDataSource.filter = filterValue.trim().toLowerCase();

    if (this.requestDataSource.paginator) {
      this.requestDataSource.paginator.firstPage();
    }
  }

}
