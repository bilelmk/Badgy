import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DragDropModule } from '@angular/cdk/drag-drop';
import {
  MatBottomSheetModule,
  MatTooltipModule,
  MatButtonModule,
  MatDialogModule,
  MatIconModule,
  MatSliderModule,
  MatInputModule,
  MatFormFieldModule,
  MatTabsModule,
  MatSelectModule,
  MatOptionModule
} from '@angular/material' ;
import {ColorPickerModule} from 'ngx-color-picker';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    DragDropModule,
    MatBottomSheetModule,
    MatTooltipModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatSliderModule,
    MatInputModule,
    MatFormFieldModule,
    MatTabsModule,
    ColorPickerModule,
    FormsModule,
    MatSelectModule,
    MatOptionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
