import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material/material.module';
import { UserService } from './user.service';
import {DataService} from './data.service';
import { TestInsComponent } from './test-ins/test-ins.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TestPageComponent } from './test-page/test-page.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { ErrorComponent } from './error/error.component'
import { TopicService } from './topic.service';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    TestInsComponent,
    PageNotFoundComponent,
    TestPageComponent,
    ThankyouComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [UserService, DataService, TopicService],
  bootstrap: [AppComponent]
})
export class AppModule { }
