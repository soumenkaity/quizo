 import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TestInsComponent } from './test-ins/test-ins.component';
import { TestPageComponent } from './test-page/test-page.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { ErrorComponent } from './error/error.component';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';
import {EmptypageComponent} from './emptypage/emptypage.component'
import { RoleGuardService } from '../authentication-module/service/role-guard.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FeedbackComponent } from './feedback/feedback.component';

const routes: Routes = [
  {path:'employee' , children:[
    { path:'',component:EmptypageComponent},
    { path: 'employee-details' , component: EmployeedetailsComponent},
    { path: 'test-instructions' , component: TestInsComponent},
    { path: 'test-page' , component: TestPageComponent},
    { path: 'error', component: ErrorComponent},  
    { path: 'thankyou', component: ThankyouComponent},
    { path: 'dash', component:DashboardComponent},
    { path: 'feedback', component: FeedbackComponent},
    { path: '**' , component: PageNotFoundComponent}
  ], canActivate:[RoleGuardService],data:{role:'EMP'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const EmployeeRoutingComponents = [
  EmptypageComponent,
  EmployeedetailsComponent,
  TestInsComponent,
  TestPageComponent,
  ErrorComponent,
  ThankyouComponent,
  PageNotFoundComponent,
  DashboardComponent,
  FeedbackComponent
]
