import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { TopicComponent } from './topic/topic.component';


const routes: Routes = [
  { path:'hr',children:[
    { path:'' , component: TopicComponent , pathMatch:'full'},
    { path:'main' , component: TopicComponent,pathMatch:'full'},
    { path:'employees' , component:EmployeeComponent},
    { path:'confirm' , component:ConfirmComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
