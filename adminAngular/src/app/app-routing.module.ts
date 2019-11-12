import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminComponent} from './admin/admin.component'
import { CreatedPageComponent } from './created-page/created-page.component';


const routes: Routes = [
  {path:'createTest', component:AdminComponent},
  {path:'testCreated',component:CreatedPageComponent},
  {path:' ', redirectTo:"/createTest", pathMatch:'full'},
  {path:'**',component:AdminComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
