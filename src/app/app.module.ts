import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SchooldataService} from "./services/schooldata.service";
import { HttpClientModule} from "@angular/common/http";
import { NgxChartsModule } from '@swimlane/ngx-charts';
import {BrowserAnimationsModule, NoopAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule} from "@angular/forms";
import {MaterialModule} from "./material.module";
import {DashboardModule} from "./dashboard/dashboard.module";
import {MatTableModule} from "@angular/material";

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MaterialModule,
    DashboardModule,
    MatTableModule
  ],
  exports: [
    MaterialModule
  ],

  providers: [SchooldataService],
  bootstrap: [AppComponent],
   schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class AppModule { }
