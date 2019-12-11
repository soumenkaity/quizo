import { NgModule } from '@angular/core';


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
import { MatTableModule } from '@angular/material'
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSelectModule} from '@angular/material/select';





import {A11yModule} from '@angular/cdk/a11y';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

import {MatChipsModule} from '@angular/material/chips';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDatepickerModule} from '@angular/material/datepicker';

import {MatDividerModule} from '@angular/material/divider';

import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';

import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSortModule} from '@angular/material/sort';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTreeModule} from '@angular/material/tree';


const MaterialComponents= [ 
  MatButtonModule,
  MatMenuModule,
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
  MatSidenavModule,
  MatSelectModule,


  A11yModule,
  CdkStepperModule,
  CdkTableModule,
  CdkTreeModule,
  DragDropModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonToggleModule,
  MatCheckboxModule,
  MatChipsModule,
  MatStepperModule,
  MatDatepickerModule,
    MatDividerModule,
  MatNativeDateModule,
  MatRippleModule,
    MatSliderModule,
  MatSlideToggleModule,
  MatSortModule,
    MatTabsModule,
  MatTreeModule,
  PortalModule,
  ScrollingModule,
];

@NgModule({ 
  imports: [MaterialComponents],
  exports:[MaterialComponents]
})
export class MaterialModule { }