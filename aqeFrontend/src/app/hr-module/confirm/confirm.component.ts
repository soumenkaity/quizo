import { Component, OnInit } from '@angular/core';
import { Mapping } from '../model/mapping';
import { ConfirmService } from '../service/confirm.service';
import { Topic } from '../model/topic';
import { Employee } from '../model/employee';
import { DataService } from '../service/data.service';
import { TestUser} from '../model/testUser';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {

  private testMapping = <Mapping>{};
  private test: Topic;
  private employees: Employee[]
  private statList: TestUser[];

  constructor(private confirmService: ConfirmService,
              private dataService: DataService) 
              {
                
               }

  ngOnInit() {
    this.test = this.dataService.getSelectedTest();
    this.employees = this.dataService.getSelectedEmployees();
  }

  confirmMapping(){
    this.testMapping.testName = this.test.name;
    this.testMapping.createdAt = new Date();
    const date7daysfromnow = new Date();
    date7daysfromnow.setDate(date7daysfromnow.getDate() + 7);
    this.testMapping.expiresAt = date7daysfromnow;
    this.testMapping.topicId = this.test.id;
    this.testMapping.users = []
    this.employees.forEach((v,k)=>this.testMapping.users.push({id:v.id,status:"N"}))
    console.log(this.testMapping)
    this.confirmService.postTestMapping(this.testMapping).subscribe(
      response => console.log(response)
    );
  }
  statusMapping(){
    this.employees.forEach((user : Employee) => {
      this.statList.push(new TestUser(user.id, this.test.id, "N"))
    });
    this.confirmService.postStat(this.statList).subscribe(
      response => console.log(response)
    );
  }

}
