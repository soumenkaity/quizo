import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { CreatedPageComponent } from './created-page/created-page.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminServiceService } from './admin-service.service';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    CreatedPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    AdminServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
