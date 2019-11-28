import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { TopicComponent } from './topic/topic.component';
import { RoleGuardService } from '../authentication-module/service/role-guard.service';
import { ThankyouHrComponent } from './thankyou-hr/thankyou-hr.component';


const routes: Routes = [
  { path:'hr',children:[
    { path:'' , component: TopicComponent , pathMatch:'full'},
    { path:'main' , component: TopicComponent,pathMatch:'full'},
    { path:'employees' , component:EmployeeComponent},
    { path:'confirm' , component:ConfirmComponent},
    { path:'finished',component:ThankyouHrComponent}
  ],canActivate:[RoleGuardService],data:{role:'HRM'}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
