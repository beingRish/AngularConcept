import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeService } from './employee.service';
import { HttpClientModule} from '@angular/common/http';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { DepartmentOverviewComponent } from './department-overview/department-overview.component';
import { DepartmentContactComponent } from './department-contact/department-contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OnChangesExampleComponent } from './on-changes-example/on-changes-example.component';
import { OnInitExampleComponent } from './on-init-example/on-init-example.component';
import { DoCheckExampleComponent } from './do-check-example/do-check-example.component';
import { NgaftercontentinitNgaftercontentcheckedComponent } from './ngaftercontentinit-ngaftercontentchecked/ngaftercontentinit-ngaftercontentchecked.component';
import { NgOnDestroyComponent } from './ng-on-destroy/ng-on-destroy.component';
import { AngularMaterialComponent } from './angular-material/angular-material.component';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeDetailComponent,
    routingComponents,
    PageNotFoundComponent,
    DepartmentDetailComponent,
    DepartmentOverviewComponent,
    DepartmentContactComponent,
    OnChangesExampleComponent,
    OnInitExampleComponent,
    DoCheckExampleComponent,
    NgaftercontentinitNgaftercontentcheckedComponent,
    NgOnDestroyComponent,
    AngularMaterialComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
