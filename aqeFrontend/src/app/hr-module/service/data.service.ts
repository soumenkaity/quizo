import { Injectable } from '@angular/core';
import { Topic } from '../model/topic';
import { Employee } from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private selectedTest: Topic;
  private selectedEmployees: Employee[]

  constructor() { }

  setSelectedTest(test: Topic){
    this.selectedTest = test;
  }
  getSelectedTest(){
    return this.selectedTest;
  }
  clearSelectedTest(){
    this.selectedTest = undefined;
  }
  setSelectedEmployees(employees: Employee[]){
    this.selectedEmployees = employees;
  }
  getSelectedEmployees(){
   return this.selectedEmployees;
  }
  clearSelectedEmployees(){
    this.selectedEmployees = undefined;
  }
}
