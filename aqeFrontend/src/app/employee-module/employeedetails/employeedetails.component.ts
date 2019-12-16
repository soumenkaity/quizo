import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employeedetails',
  templateUrl: './employeedetails.component.html',
  styleUrls: ['./employeedetails.component.css']
})
export class EmployeedetailsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  employee = {
    id:0, name: "", email: ""

  }
  saveDetailsAndGoToInstructions(id,name,email){
    this.employee.id=id;
    this.employee.name=name;
    this.employee.email=email;
   
    sessionStorage.setItem(id,JSON.stringify(this.employee));
    // console.log(JSON.parse(sessionStorage.getItem(id)));
    this.router.navigate(['/test-instructions']);
  }

}
