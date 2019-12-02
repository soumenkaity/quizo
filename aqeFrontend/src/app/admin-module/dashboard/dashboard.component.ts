import { Component, OnInit, ViewChildren, AfterViewInit, QueryList} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { TopicService } from '../service/topic.service';
import { EmployeeService } from '../service/employee.service';
import { RequestService } from '../service/request.service';

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

  constructor(
    private topicService: TopicService,
    private employeeService: EmployeeService,
    private requestService:RequestService,
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

  topicDisplayedColumns: string[] = ['name', 'createdAt', 'link','keywords'];
  employeeDisplayedColumns: string[] = [ 'name', 'phone', 'email'];
  requestDisplayedColumns: string[] = [ 'id', 'message', 'status', 'actions'];
  topicDataSource;
  employeeDataSource;
  requestDataSource;

  
  @ViewChildren(MatPaginator) paginators = new QueryList<MatPaginator>();

//   displayedColumns: string[] = ['id', 'name', 'progress', 'color'];
//   dataSource: MatTableDataSource<UserData>;

//   @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
//   @ViewChild(MatSort, {static: true}) sort: MatSort;

//   constructor() {
//     // Create 100 users
//     const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

//     // Assign the data to the data source for the table to render
//     this.dataSource = new MatTableDataSource(users);
//   }

//   ngOnInit() {
//     this.dataSource.paginator = this.paginator;
//     this.dataSource.sort = this.sort;
//   }

//   applyFilter(filterValue: string) {
//     this.dataSource.filter = filterValue.trim().toLowerCase();

//     if (this.dataSource.paginator) {
//       this.dataSource.paginator.firstPage();
//     }
//   }
// }

// /** Builds and returns a new User. */
// function createNewUser(id: number): UserData {
//   const name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
//       NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

//   return {
//     id: id.toString(),
//     name: name,
//     progress: Math.round(Math.random() * 100).toString(),
//     color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
//   };
}