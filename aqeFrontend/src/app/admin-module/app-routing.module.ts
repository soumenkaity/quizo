import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminComponent} from './admin/admin.component'
import { CreatedPageComponent } from './created-page/created-page.component';
import { RoleGuardService } from '../authentication-module/service/role-guard.service';
import { DashboardComponent} from './dashboard/dashboard.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { CreateuserComponent } from './createuser/createuser.component';
import { TopicComponent } from './topic/topic.component';
import { QuestionComponent } from './question/question.component';



const routes: Routes = [
  {path:'admin' , children:[
    {path:'createTopic', component:AdminComponent},
    {path:'testCreated/:id',component:CreatedPageComponent},
    {path:'topic', component:TopicComponent},
    {path:'topic/:name', component:QuestionComponent},
    {path:'',component:DashboardComponent},
    {path:'createUser', component:CreateuserComponent},
    {path:'**',component:PageNotFoundComponent}
  ], canActivate:[RoleGuardService],data:{role:'ADM'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
