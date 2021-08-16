import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeFormContainerComponent } from './employee-form-container/employee-form-container.component';
import { EmployeeComponent } from './employee.component';
import { EmployeeFormPresentationComponent } from './employee-form-container/employee-form-presentation/employee-form-presentation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeListContainerComponent } from './employee-list-container/employee-list-container.component';
import { EmployeeListPresentationComponent } from './employee-list-container/employee-list-presentation/employee-list-presentation.component';
import { EmployeePipe } from './employee-list-container/employee-list-presentation/employeeM-F.pipe';
import { SearchfilterPipe } from './employee-list-container/employee-list-presentation/searchfilter.pipe';
import { PaginationDirective } from './employee-list-container/employee-list-presentation/pagination.directive';
import { SortDirective } from './employee-list-container/employee-list-presentation/sort.directive';


@NgModule({
  declarations: [
    EmployeeFormContainerComponent,
    EmployeeComponent,
    EmployeeFormPresentationComponent,
    EmployeeListContainerComponent,
    EmployeeListPresentationComponent,
    EmployeePipe,
    SearchfilterPipe,
    PaginationDirective,
    SortDirective
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EmployeeModule { }
