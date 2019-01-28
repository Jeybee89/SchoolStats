import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardComponent} from "./dashboard.component";
import { TableOfSchoolsComponent } from './table-of-schools/table-of-schools.component';
import {MaterialModule} from "../material.module";
import {SchooldataService} from "../services/schooldata.service";
import { SchoolDataTableComponent } from './school-data-table/school-data-table.component';
import { MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';

@NgModule({
  declarations: [
    DashboardComponent,
    TableOfSchoolsComponent,
    SchoolDataTableComponent
  ],

  exports: [
    DashboardComponent,
    TableOfSchoolsComponent,
    SchoolDataTableComponent

  ],

  imports: [
    CommonModule,
    MaterialModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,

  ],
  providers: [SchooldataService],
})
export class DashboardModule { }
