import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../service/employee.service';
import { Employee } from '../model/employee';
import { FormBuilder, FormGroup, FormArray, FormControl, ValidatorFn } from '@angular/forms';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  private employees: Employee[];
  private form: FormGroup;
  private selectedTopic;

  constructor(private employeeService: EmployeeService,
              private dataService: DataService,
              private router: Router,
              private formBuilder: FormBuilder)
  { 

    this.form = this.formBuilder.group({
      employees: new FormArray([])
    })
    
  }


  ngOnInit() {
    this.getAllEmployeesList();
    
  }
  getAllEmployeesList(){
    this.employeeService.getAllEmployees().subscribe(
      (response: Employee[]) => {
        this.employees = response
        this.addCheckBoxesToEmp()
      }
    )
    
  }

  private addCheckBoxesToEmp() {
    this.employees.forEach((o, i) => {
      const control = new FormControl(i === 0); // if first item set to true, else false
      (this.form.controls.employees as FormArray).push(control);
    });
  }
  submit() {
    const selectedEmp = this.form.value.employees
      .map((v, i) => v ? this.employees[i] : null)
      .filter(v => v !== null);
      console.log(selectedEmp);
      this.dataService.setSelectedEmployees(selectedEmp);
      this.router.navigate(['/confirm']);
    
  }

}
