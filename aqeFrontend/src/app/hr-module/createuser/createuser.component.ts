import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreateuserService } from '../service/createuser.service';
 
@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css']
})
export class CreateuserComponent implements OnInit {

  constructor(private router: Router, private data: CreateuserService) { }

  ngOnInit() {
  }
  employee = {
    id:0, name: "", email: "", company:"" , Designation: "", contact:0

  }
  saveDetails(id,name, email, company, Designation, contact)
  {
    this.employee.id=id;
    this.employee.name=name;
    this.employee.email=email;
    this.employee.company=company;
    this.employee.Designation=Designation;
    this.employee.contact=contact;
  
     this.data.postemployeedetails(this.employee)

  }

}
