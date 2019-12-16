import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { DashboardService } from '../service/dashboard.service';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';


interface TestUser{
 id: String;
 topicId: String;
 topicName: String;
 employeeId: String;
 createdAt: Date;
 status: String;
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  completeTestsDataSource;
  activeTestsDataSource;
  testsDisplayedColumns: string[] = ['id', 'name', 'createdAt','actions'];

  constructor(private dashboardService: DashboardService, private dataService: DataService,private router:Router) { }

  @ViewChildren(MatPaginator) paginators = new QueryList<MatPaginator>();
  
  ngOnInit() {
    const userEmail = sessionStorage.getItem('email');
    this.dashboardService.getActiveTests(userEmail).subscribe(
      (response: TestUser[]) =>{
        this.activeTestsDataSource = new MatTableDataSource(response);
        this.activeTestsDataSource.paginator = this.paginators.toArray()[0];
      }
    )
    this.dashboardService.getCompleteTests(userEmail).subscribe(
      (response: TestUser[]) =>{
        // console.log(response)
        this.completeTestsDataSource = new MatTableDataSource(response);
        this.completeTestsDataSource.paginator = this.paginators.toArray()[1];
      }
    )
  }

  giveTest(data){
  this.dataService.setTestUserDetails(data);
  this.router.navigate(["/employee/test-instructions"])
  }

  goToResult(testId,empId){
    this.dataService.setResultDetails(testId,empId);
    this.router.navigate(['/employee/result'])
  }
}
