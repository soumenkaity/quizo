import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration/registration.component';
import { ToastrService, ToastrModule } from 'ngx-toastr';
import { HeaderComponent } from '../header/header.component';
import { CoreModule } from '../core/core.module';
import { ResetComponent } from './reset/reset.component';
import { UserDetailsComponent } from './user-details/user-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    RegistrationComponent,
    ResetComponent,
    UserDetailsComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass:'toast-top-right',
      preventDuplicates: true,
    }),
    CoreModule

  ],
  exports:[HeaderComponent],
  providers: [ ToastrService ],
  bootstrap: [AppComponent]
})
export class AuthenticationModule { }
