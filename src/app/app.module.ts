import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { DepartmentDetailsComponent } from './components/department-details/department-details.component';
import { DepartmentOverviewComponent } from './components/department-overview/department-overview.component';
import { DepartmentContactComponent } from './components/department-contact/department-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    NavComponent,
    DepartmentDetailsComponent,
    DepartmentOverviewComponent,
    DepartmentContactComponent,
    // HomeComponent,
    // PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
``