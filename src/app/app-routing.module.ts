import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentDetailsComponent } from './components/department-details/department-details.component';
import { DepartmentListComponent } from './components/department-list/department-list.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { DepartmentContactComponent } from './department-contact/department-contact.component';
import { DepartmentOverviewComponent } from './department-overview/department-overview.component';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "departments", component: DepartmentListComponent },
  { 
    path: "departments/:id", 
    component: DepartmentDetailsComponent,
    children: [
      { path: "overview", component: DepartmentOverviewComponent },
      { path: "contact", component: DepartmentContactComponent },
    ]
   },
  { path: "employees", component: EmployeeListComponent },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ 
  HomeComponent,
  DepartmentListComponent,
  DepartmentDetailsComponent,
  DepartmentOverviewComponent,
  DepartmentContactComponent,
  EmployeeListComponent,
  PageNotFoundComponent,
];
