import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { EmployeeRoutingComponents } from './employee-module/app-routing.module'
import { EmptypageComponent } from './employee-module/emptypage/emptypage.component';
import { AuthGaurdService } from './authentication-module/service/auth-gaurd.service';
const routes: Routes = [
  {path:'employee' , children:[
    { path:'',component:EmptypageComponent},
    // { path: 'employee-details' , component: EmployeedetailsComponent},
    // { path: 'test-instructions' , component: TestInsComponent},
    // { path: 'test-page' , component: TestPageComponent},
    // { path: 'error', component: ErrorComponent},  
    // { path: 'thankyou', component: ThankyouComponent},
    // { path: '**' , component: PageNotFoundComponent}
  ],canActivate:[AuthGaurdService]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
