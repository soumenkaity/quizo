import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { TopicComponent } from './topic/topic.component';
import { RoleGuardService } from '../authentication-module/service/role-guard.service';
import { ThankyouHrComponent } from './thankyou-hr/thankyou-hr.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateuserComponent } from './createuser/createuser.component';
import { TestsComponent } from './tests/tests.component';
import { ResultPageComponent } from './result-page/result-page.component';


const routes: Routes = [
  { path:'hr',children:[
    { path:'' , component: DashboardComponent , pathMatch:'full'},
    { path:'main' , component: TopicComponent,pathMatch:'full'},
    { path:'tests' , component:TestsComponent },
    { path:'result/:id' , component:ResultPageComponent },
    { path:'create-user',component: CreateuserComponent },
    { path:'create' , component:TopicComponent},
    { path:'employees' , component:EmployeeComponent},
    { path:'confirm' , component:ConfirmComponent},
    { path:'finished',component:ThankyouHrComponent}
  ],canActivate:[RoleGuardService],data:{role:'HRM'}}
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
