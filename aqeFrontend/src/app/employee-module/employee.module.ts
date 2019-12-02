import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, EmployeeRoutingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserService } from './service/user.service';
import {DataService} from './service/data.service';
import { TopicService } from './service/topic.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FeedbackComponent } from './feedback/feedback.component';
import { DashService } from './service/dash.service';
import { LandingComponent } from './landing/landing.component';
import { FetchTestComponent } from './fetch-test/fetch-test.component';
import { CoreModule } from '../core/core.module';
import { ResultPageComponent } from './result-page/result-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeRoutingComponents,
    FeedbackComponent,
    FetchTestComponent,
    LandingComponent,
    ResultPageComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    CoreModule
  ],
  providers: [UserService, DataService, TopicService, DashService],
  bootstrap: [AppComponent]
})
export class EmployeeModule { }
