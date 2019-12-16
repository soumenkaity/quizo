import { Component, OnInit, ViewChildren, QueryList, ViewChild } from '@angular/core';
import { Mapping } from '../model/mapping';
import { ConfirmService } from '../service/confirm.service';
import { Topic } from '../model/topic';
import { Employee } from '../model/employee';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';
import { ToasterService } from 'src/app/authentication-module/service/toaster-service.service';
import { TestUser} from '../model/testUser';
import * as uuid from 'uuid';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {

  private testMapping = <Mapping>{};
  private test: Topic;
  private employees
  private mappingList = new Array();
  employeeDataSource: any;

  constructor(private confirmService: ConfirmService,
              private dataService: DataService,
              private router: Router,
              private ts:ToasterService) {}

  employeeDisplayedColumns: string[] = ['id', 'name', 'phone', 'email'];

  @ViewChildren(MatPaginator) paginators = new QueryList<MatPaginator>();
  @ViewChild(MatSort, {static: true}) matSort: MatSort;
  @ViewChild('empSort', {static: true}) empSort: MatSort;
  ngOnInit() {
    this.test = this.dataService.getSelectedTest();
    this.employees = this.dataService.getSelectedEmployees();
    this.employeeDataSource = new MatTableDataSource(this.employees)
    this.employeeDataSource.sort = this.empSort;
    this.employeeDataSource.paginator = this.paginators.toArray()[1];
  }

  restart(){
    this.dataService.clearSelectedEmployees();
    this.dataService.clearSelectedTest();
    this.router.navigate(['/hr'])
  }

  confirmMapping(){
    const testId = uuid.v4();
    this.employees.forEach((user : Employee) => {
      this.mappingList.push(new TestUser("test_"+testId.slice(24,34),user.id,user.name,user.email,this.test.id,this.test.name,new Date(), "N"))
    });
   // console.log(this.mappingList)
    this.confirmService.postTestMapping(this.mappingList).subscribe(
      response => {
        //console.log(response) 
        this.router.navigate(["/hr/finished"])
        this.ts.success("Test Created","The Employees have been sent details about the test")
        },
      error => {
        //console.log(error)
        this.router.navigate(["/hr/finished"])
        this.ts.success("Test Created","The Employees have been sent details about the test")
      }
    );
  }

  applyFilterEmployee(filterValue: string) {
    this.employeeDataSource.filter = filterValue.trim().toLowerCase();

    if (this.employeeDataSource.paginator) {
      this.employeeDataSource.paginator.firstPage();
    }
  }
}
