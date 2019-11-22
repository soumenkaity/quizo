import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MaterialModule} from './material/material.module';

import { HrModule } from './hr-module/hr.module';
import { EmployeeModule } from './employee-module/employee.module';
import { AdminModule } from './admin-module/admin.module';
import { AuthenticationModule } from './authentication-module/authentication.module';
import { LandingModule } from './landing-module/landing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LandingModule,
    HrModule,
    EmployeeModule,
    MaterialModule,
    AdminModule,
    AuthenticationModule,

    MaterialModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-bottom-left',
      preventDuplicates: true,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
