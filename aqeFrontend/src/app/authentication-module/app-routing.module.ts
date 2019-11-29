import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGaurdService } from './service/auth-gaurd.service';
import { RegistrationComponent } from './registration/registration.component';
import { ResetComponent } from './reset/reset.component';

const routes: Routes = [
  {path:'auth' , children:[
    { path: '', component: EmployeeComponent,canActivate:[AuthGaurdService] },
    { path: 'login', component: LoginComponent },
    { path: 'logout', component: LogoutComponent,canActivate:[AuthGaurdService] },
    { path: 'register', component: RegistrationComponent },
    { path: 'reset', component: ResetComponent },
  ]}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
