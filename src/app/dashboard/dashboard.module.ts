import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardComponent} from "./dashboard.component";
import { TableOfSchoolsComponent } from './table-of-schools/table-of-schools.component';
import {MaterialModule} from "../material.module";
import {SchooldataService} from "../services/schooldata.service";

@NgModule({
  declarations: [
    DashboardComponent,
    TableOfSchoolsComponent
  ],

  exports: [
    DashboardComponent,
    TableOfSchoolsComponent,

  ],

  imports: [
    CommonModule,
    MaterialModule,

  ],
  providers: [SchooldataService],
})
export class DashboardModule { }
