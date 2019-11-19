import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminComponent} from './admin/admin.component'
import { CreatedPageComponent } from './created-page/created-page.component';
import { RoleGuardService } from '../authentication-module/service/role-guard.service';



const routes: Routes = [
  {path:'admin' , children:[
    {path:'createTest', component:AdminComponent},
    {path:'testCreated/:id',component:CreatedPageComponent},
    {path:' ', redirectTo:"/createTest", pathMatch:'full'},
    {path:'**',component:AdminComponent  }
  ], canActivate:[RoleGuardService],data:{role:'ADM'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
