import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminComponent} from './admin/admin.component'
import { CreatedPageComponent } from './created-page/created-page.component';
import { AuthGaurdService } from '../authentication-module/service/auth-gaurd.service';


const routes: Routes = [
  {path:'admin' , children:[
    {path:'createTest', component:AdminComponent},
    {path:'testCreated/:id',component:CreatedPageComponent},
    {path:' ', redirectTo:"/createTest", pathMatch:'full'},
    {path:'**',component:AdminComponent  }
  ], canActivate:[AuthGaurdService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
