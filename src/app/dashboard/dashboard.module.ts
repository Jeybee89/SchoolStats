import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardComponent} from "./dashboard.component";
import { TableOfSchoolsComponent } from './table-of-schools/table-of-schools.component';
import {MaterialModule} from "../material.module";
import {SchooldataService} from "../services/schooldata.service";
import { MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { ExpenditureComponent } from './expenditure/expenditure.component';
import {RouterModule, Routes} from "@angular/router";
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [
  {path: 'expenditure', component: ExpenditureComponent},
  {path: 'dashboard', component: TableOfSchoolsComponent},
  {path: 'income', component:DashboardComponent},
  {path: 'detail/:id', component: DetailComponent}
];

@NgModule({
  declarations: [
    DashboardComponent,
    TableOfSchoolsComponent,
    ExpenditureComponent,
    DetailComponent,
  ],

  exports: [
    DashboardComponent,
    TableOfSchoolsComponent,
    ExpenditureComponent,
    DetailComponent,

  ],

  imports: [
    CommonModule,
    MaterialModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    RouterModule.forRoot(routes),

  ],
  providers: [SchooldataService],
})
export class DashboardModule { }
