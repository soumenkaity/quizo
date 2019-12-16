import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-test-ins',
  templateUrl: './test-ins.component.html',
  styleUrls: ['./test-ins.component.css']
})
export class TestInsComponent implements OnInit {

  URLprefix = environment.employeeURLprefix;
  constructor(private dataService: DataService, private http: HttpClient) { }

  ngOnInit() {
  }

  userData;

  onStartTest(){
    const userData = this.dataService.getTestUserDetails();
    // console.log(userData);
    // this.http.post(this.URLprefix+'/instructions',{"collectionName":userData.topicName,"empId":userData.userId,"empName":userData.userName})
  }

}
