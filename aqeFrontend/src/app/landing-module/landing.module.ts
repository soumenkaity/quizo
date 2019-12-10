import { BrowserModule, ɵINTERNAL_BROWSER_PLATFORM_PROVIDERS } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSliderModule} from '@angular/material/slider';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTooltipModule} from '@angular/material/tooltip';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatExpansionModule} from '@angular/material/expansion'
import {MatRadioModule} from '@angular/material/radio'; 
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material';
import {MatSelectModule} from '@angular/material/select'; 
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSidenavModule} from '@angular/material/sidenav';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const MaterialComponents= [ 
  MatButtonModule,
  MatMenuModule,
  MatSelectModule,
  MatIconModule,
  MatCardModule,
  MatSliderModule,
  MatProgressBarModule,
  MatAutocompleteModule,
  MatInputModule,
  MatGridListModule,
  MatSnackBarModule,
  MatProgressSpinnerModule,
  MatTooltipModule,
  MatListModule,
  MatDialogModule,
  FlexLayoutModule,
  MatRadioModule,
  MatExpansionModule,
  MatToolbarModule,
  MatTableModule,
  MatPaginatorModule,
  MatCheckboxModule,
  MatSidenavModule
];

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,MaterialComponents,
    FormsModule, ReactiveFormsModule
  ],
  exports: [MaterialComponents],
  providers: [],
  bootstrap: [AppComponent]
})
export class LandingModule { }
