 import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestInsComponent } from './test-ins/test-ins.component';
import { TestPageComponent } from './test-page/test-page.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { ErrorComponent } from './error/error.component';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';
import {EmptypageComponent} from './emptypage/emptypage.component'
import { RoleGuardService } from '../authentication-module/service/role-guard.service';
import { FeedbackComponent } from './feedback/feedback.component';
import { LandingComponent } from './landing/landing.component';
import { FetchTestComponent } from './fetch-test/fetch-test.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ResultPageComponent } from './result-page/result-page.component';

const routes: Routes = [
  {path:'employee' , children:[
    { path:'',component:DashboardComponent},
    { path: 'employee-details' , component: EmployeedetailsComponent},
    { path: 'test-instructions' , component: TestInsComponent},
    { path: 'test-page' , component: FetchTestComponent},
    { path: 'error', component: ErrorComponent},  
    { path: 'thankyou', component: ThankyouComponent},
    { path: 'feedback', component: FeedbackComponent},
    { path: 'result', component: ResultPageComponent},
    { path: '**' , component: PageNotFoundComponent} 
  ], canActivate:[RoleGuardService],data:{role:'EMP'} 
}
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
  FeedbackComponent
]
