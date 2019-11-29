import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { CreatedPageComponent } from './created-page/created-page.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminServiceService } from './service/admin-service.service';
import {CoreModule} from '../core/core.module';
import { DashBoardComponent } from './dash-board/dash-board.component';
import {DemoMaterialModule} from './dash-board/material-module';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    CreatedPageComponent,
    DashBoardComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    DemoMaterialModule
  ],
  providers: [
    AdminServiceService
  ],
  bootstrap: [AppComponent]
})
export class AdminModule { }
