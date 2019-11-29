import { Component, OnInit, ViewChild, QueryList, ViewChildren, AfterViewInit } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { TopicService } from '../service/topic.service';
import { EmployeeService } from '../service/employee.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit,AfterViewInit {

  constructor( private topicService: TopicService,private employeeService: EmployeeService) { }
  topicDisplayedColumns: string[] = ['name', 'createdAt', 'link','keywords'];
  employeeDisplayedColumns: string[] = [ 'name', 'phone', 'email'];
  topicDataSource;
  employeeDataSource;

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

  ngAfterViewInit(): void {
  }

}
