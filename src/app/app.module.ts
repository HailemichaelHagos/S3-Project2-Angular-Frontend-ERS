import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { EmployeeComponent } from './employee/employee.component';
import { ManagerComponent } from './manager/manager.component';
import { ReimbursementComponent } from './reimbursement/reimbursement.component';
import { LoginComponent } from './user/login/login.component';
import { LogoutComponent } from './user/logout/logout.component';

import { UpdateHttpEmployeeComponent } from './employee/update-http-employee/update-http-employee.component';

import { ListHttpEmployeeComponent } from './employee/list-http-employee/list-http-employee.component';
import { FormsModule } from '@angular/forms';
import { ListManagerComponent } from './manager/list-manager/list-manager.component';

import { ViewHttpEmployeesComponent } from './manager/view-http-employees/view-http-employees.component';
import { ShowHttpExpensesComponent } from './reimbursement/show-http-expenses/show-http-expenses.component';
import { UpdateHttpExpensesComponent } from './reimbursement/update-http-expenses/update-http-expenses.component';
import { ViewResolvedComponent } from './resolved-reimbursment/view-resolved/view-resolved.component';
import { ViewPendingComponent } from './pending-reimbursment/view-pending/view-pending.component';
import { AddReimbursmentComponent } from './pending-reimbursment/add-reimbursment/add-reimbursment.component';
import { UplooadFileComponent } from './reimbursement-proof/uplooad-file/uplooad-file.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EmployeeComponent,
    ManagerComponent,
    ReimbursementComponent,
    LoginComponent,
    LogoutComponent,
    UpdateHttpEmployeeComponent,
    ListHttpEmployeeComponent,
    ListManagerComponent,
    ViewHttpEmployeesComponent,
    ViewPendingComponent,
    ViewResolvedComponent,
    ShowHttpExpensesComponent,
    UpdateHttpExpensesComponent,
    AddReimbursmentComponent,
    UplooadFileComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
