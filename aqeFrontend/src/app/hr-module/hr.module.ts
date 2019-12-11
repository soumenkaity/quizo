import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { TopicComponent } from './topic/topic.component';


import { HttpClientModule } from '@angular/common/http';
import { TopicService } from './service/topic.service';
import { EmployeeService } from './service/employee.service';
import { ConfirmService } from './service/confirm.service';
import { FormsModule , ReactiveFormsModule} from '@angular/forms'; 
import { CoreModule } from '../core/core.module';
import { ThankyouHrComponent } from './thankyou-hr/thankyou-hr.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateuserComponent } from './createuser/createuser.component';
import { CreateModalComponent } from './create-modal/create-modal.component';
import { RequestModalComponent } from './request-modal/request-modal.component';
import { TestsComponent } from './tests/tests.component';
import { ResultPageComponent } from './result-page/result-page.component';






@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    ConfirmComponent,
    TopicComponent,
    ThankyouHrComponent,
    DashboardComponent,
    CreateuserComponent,
    CreateModalComponent,
    RequestModalComponent,
    TestsComponent,
    ResultPageComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CoreModule,
  ],
  entryComponents: [CreateModalComponent,RequestModalComponent],
  providers: [TopicService,EmployeeService,ConfirmService],
  bootstrap: [AppComponent],
  exports: [
   
  ]
})
export class HrModule { }
