import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { EmployeeRoutingComponents } from './employee-module/app-routing.module'
import { EmptypageComponent } from './employee-module/emptypage/emptypage.component';
import { AuthGaurdService } from './authentication-module/service/auth-gaurd.service';
const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
