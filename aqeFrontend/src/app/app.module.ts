import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';

import { HrModule } from './hr-module/hr.module';
import { EmployeeModule } from './employee-module/employee.module';
import { AdminModule } from './admin-module/admin.module';
import { AuthenticationModule } from './authentication-module/authentication.module';
import { LandingModule } from './landing-module/landing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { ToasterService } from './authentication-module/service/toaster-service.service';
import { HeaderComponent } from './header/header.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserDetailsComponent } from './authentication-module/user-details/user-details.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
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
    BrowserAnimationsModule,ReactiveFormsModule,FormsModule,
    ToastrModule.forRoot({
      timeOut: 1000,
      positionClass:'toast-top-right',
      preventDuplicates: true,
    }),
  ],
  providers: [ToasterService,HeaderComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
