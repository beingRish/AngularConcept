import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { DepartmentOverviewComponent } from './department-overview/department-overview.component';
import { DepartmentContactComponent } from './department-contact/department-contact.component';
import { AngularFormComponent } from './angular-form/angular-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { LifeCycleHookComponent } from './life-cycle-hook/life-cycle-hook.component';
import { AngularMaterialComponent } from './angular-material/angular-material.component';

const routes: Routes = [
  { path: '', redirectTo: '/departments', pathMatch: 'full'},
  { path: 'departments', component: DepartmentListComponent },
  { 
    path: 'departments/:id', 
    component: DepartmentDetailComponent,
    children: [
      { path: 'overview', component: DepartmentOverviewComponent },
      { path: 'contact', component: DepartmentContactComponent }
    ]
  },
  { path: 'employees', component: EmployeeListComponent },
  { path: 'form', component: AngularFormComponent },
  { path: 'tdf', component: TemplateDrivenFormComponent },
  { path: 'reactive', component: ReactiveFormComponent },
  { path: 'mat', component: AngularMaterialComponent },
  { path: 'lifeCycleHook', component: LifeCycleHookComponent},
  { path: "**", component: PageNotFoundComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  DepartmentListComponent, 
  EmployeeListComponent, 
  PageNotFoundComponent, 
  DepartmentDetailComponent,
  DepartmentOverviewComponent,
  DepartmentContactComponent,
  AngularFormComponent,
  ReactiveFormComponent,
  TemplateDrivenFormComponent,
  LifeCycleHookComponent,
  AngularMaterialComponent,

]
