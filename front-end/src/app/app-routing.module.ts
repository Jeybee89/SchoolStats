import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NotFoundComponent} from "./dashboard/not-found/not-found.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {TableOfSchoolsComponent} from "./dashboard/table-of-schools/table-of-schools.component";
import {IncomeComponent} from "./dashboard/income/income.component";
import {ExpenditureComponent} from "./dashboard/expenditure/expenditure.component";

const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: 'dashboard' , component: TableOfSchoolsComponent },
  {path: 'income', component: IncomeComponent},
  {path: 'expenditure', component: ExpenditureComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
