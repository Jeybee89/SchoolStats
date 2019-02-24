import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NotFoundComponent} from "./dashboard/not-found/not-found.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {TableOfSchoolsComponent} from "./dashboard/table-of-schools/table-of-schools.component";

const routes: Routes = [

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
