import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { ResultService } from '../service/result.service';
import { TestUser } from '../model/testUser';


@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.css']
})
export class TestsComponent implements OnInit {
  testsDataSource;
  testsDataSourceColumns = ['testId','empName','topicName','status','actions'];

  constructor(private resultService: ResultService) { }

  @ViewChildren(MatPaginator) paginators = new QueryList<MatPaginator>();
  ngOnInit() {
    this.resultService.getResultOfAllTests().subscribe(
      (response: TestUser[]) =>{
        //console.log(response);
        this.testsDataSource = new MatTableDataSource(response);
        this.testsDataSource.paginator = this.paginators.toArray()[0];
      }
    )
  }

}
