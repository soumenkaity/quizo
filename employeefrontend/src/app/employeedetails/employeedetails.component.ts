import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterModel} from '../models/register.model';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { stringify } from 'querystring';

@Component({
  selector: 'app-employeedetails',
  templateUrl: './employeedetails.component.html',
  styleUrls: ['./employeedetails.component.css']
})
export class EmployeedetailsComponent implements OnInit {
  employee: RegisterModel = new RegisterModel();
  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      'id': [this.employee.id,[ Validators.required]],
      'name': [this.employee.name,[ Validators.required]],
      'emailId': [this.employee.emailId,[ Validators.required]],
      'company': [this.employee.company,[ Validators.required]],
      'designation': [this.employee.designation,[ Validators.required]],
      'phoneNo': [this.employee.phoneNo,[ Validators.required]]
    })
  }


  onSubmit() {
    sessionStorage.setItem(JSON.stringify(this.employee.id), JSON.stringify(this.employee));
    console.log(JSON.parse(sessionStorage.getItem(JSON.stringify(this.employee.id))));
  }

}
