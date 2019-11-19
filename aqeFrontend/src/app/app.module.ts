import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HrModule } from './hr-module/hr.module';
import { EmployeeModule } from './employee-module/employee.module';
import { AuthenticationModule } from './authentication-module/authentication.module';
import { LandingModule } from './landing-module/landing.module';

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
    AuthenticationModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
