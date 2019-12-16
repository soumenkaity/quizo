import { Component, OnInit, ViewChildren, AfterViewInit, QueryList} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { TopicService } from '../service/topic.service';
import { EmployeeService } from '../service/employee.service';
import { RequestService } from '../service/request.service';
import { ToasterService } from 'src/app/authentication-module/service/toaster-service.service';

export interface UserData {
  id: string;
  name: string;
  progress: string;
  color: string;
}

export interface Topic{
  id: String;
  name: String;
  createdAt: Date;
  link: String;
  keywords: String[];
}

export interface User{
  id: String;
  name: String;
  role: String;
  phone: number;
  email: String;
  designation: String;
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, AfterViewInit {
  topicDisplayedColumns: string[] = ['id','name', 'createdAt', 'link','actions'];
  employeeDisplayedColumns: string[] = ['id', 'name', 'phone', 'email'];
  requestDisplayedColumns: string[] = [ 'id', 'message', 'status', 'actions'];
  topicDataSource;
  employeeDataSource;
  requestDataSource;

  constructor(
    private topicService: TopicService,
    private employeeService: EmployeeService,
    private requestService:RequestService,
    private toasterService:ToasterService,
  ){}

  ngOnInit(): void {

  }
  ngAfterViewInit(): void {
    this.topicService.getAllTopics().subscribe(
      (response: Topic[]) => {
      this.topicDataSource = new MatTableDataSource(response)
      this.topicDataSource.paginator = this.paginators.toArray()[0];
    });

    this.employeeService.getAllEmployees().subscribe(
      (response: User[]) => {
      this.employeeDataSource = new MatTableDataSource(response)
      this.employeeDataSource.paginator = this.paginators.toArray()[1];
    });

    this.requestService.getAllRequests().subscribe(
      (response: Request[]) => {
      this.requestDataSource = new MatTableDataSource(response)
      this.requestDataSource.paginator = this.paginators.toArray()[2];
    });
  }

 
  changeRequestStatus(request){
    // console.log(request);
    this.requestService.updateRequest(request).subscribe(
      res => {},
      err => {this.toasterService.success("Request Updated")}
    )
    this.requestService.getAllRequests().subscribe(
      (response: Request[]) => {
        this.requestDataSource = new MatTableDataSource(response)
        this.requestDataSource.paginator = this.paginators.toArray()[2];
    });
  }
  
  @ViewChildren(MatPaginator) paginators = new QueryList<MatPaginator>();

  deleteTopic(topic){
    this.topicService.deleteTopic(topic.name).subscribe(
      res => {},
      err => {
        this.toasterService.success("topic deleted");
        this.topicService.getAllTopics().subscribe(
          (response: Topic[]) => {
          this.topicDataSource = new MatTableDataSource(response)
          this.topicDataSource.paginator = this.paginators.toArray()[0];
        });
      }
    )
   
  }
}