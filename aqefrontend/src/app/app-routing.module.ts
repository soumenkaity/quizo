import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeComponent } from './hr-module/employee/employee.component';
import { AppComponent } from './app.component';

const routes: Routes = [

  {path:'',component:AppComponent,pathMatch:'full'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
