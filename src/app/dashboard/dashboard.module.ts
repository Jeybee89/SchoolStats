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
import {ChartsModule} from "ng2-charts";
import { NotFoundComponent } from './not-found/not-found.component';
import { IncomeComponent } from './income/income.component';

const routes: Routes = [
  {path: 'expenditure', component: ExpenditureComponent},
  {path: 'dashboard', component: TableOfSchoolsComponent},
  {path: 'income', component:IncomeComponent},
  {path: 'detail/:id', component: DetailComponent},
  { path: '',   component: DashboardComponent },
  { path: '**', component: NotFoundComponent  },

];

@NgModule({
  declarations: [
    DashboardComponent,
    TableOfSchoolsComponent,
    ExpenditureComponent,
    DetailComponent,
    NotFoundComponent,
    IncomeComponent,
  ],

  exports: [
    DashboardComponent,
    TableOfSchoolsComponent,
    ExpenditureComponent,
    DetailComponent,
    NotFoundComponent,
    IncomeComponent
  ],

  imports: [
    CommonModule,
    MaterialModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    RouterModule.forRoot(routes),
    ChartsModule

  ],
  providers: [SchooldataService],
})
export class DashboardModule { }
