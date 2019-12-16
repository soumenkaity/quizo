import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../service/employee.service';
import { Employee } from '../model/employee';
import { FormBuilder, FormGroup, FormArray, FormControl, ValidatorFn } from '@angular/forms';
import { DataService } from '../service/data.service';
import {ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';


import {SelectionModel} from '@angular/cdk/collections';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  private employees: Employee[];
  private form: FormGroup;
  private selectedTopic;
  private isLoading = true;

  displayedColumns: string[] = ['select','name', 'email', 'phone', 'designation'];
  dataSource: MatTableDataSource<Employee>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
 
  constructor(private employeeService: EmployeeService,
              private dataService: DataService,
              private router: Router,
              private formBuilder: FormBuilder)
  { 
    this.form = this.formBuilder.group({
      employees: new FormArray([])
    });
    
  } 


  ngOnInit() {
    this.getAllEmployeesList();  
    this.dataSource = new MatTableDataSource(this.employees);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort; 
  }
  getAllEmployeesList(){
    this.employeeService.getAllEmployees().subscribe(
      (response: Employee[]) => {
        //console.log(response)
        this.employees = response
        this.dataSource = new MatTableDataSource(this.employees);
        this.isLoading = false;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort; 
  
      }
    )

  }
  submit() {
    // const selectedEmp = this.form.value.employees
    //   .map((v, i) => v ? this.employees[i] : null)
    //   .filter(v => v !== null);
    const selectedEmp=this.selection.selected;
      //console.log(selectedEmp);
      this.dataService.setSelectedEmployees(selectedEmp);
      this.router.navigate(['/hr/confirm']);
    
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }



  selection = new SelectionModel<Employee>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: Employee): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row `;
  }
}


