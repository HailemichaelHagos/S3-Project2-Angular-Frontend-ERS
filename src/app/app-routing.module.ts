import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListHttpEmployeeComponent } from './employee/list-http-employee/list-http-employee.component';
import { UpdateHttpEmployeeComponent } from './employee/update-http-employee/update-http-employee.component';
import { ListManagerComponent } from './manager/list-manager/list-manager.component';
import { ViewHttpEmployeesComponent } from './manager/view-http-employees/view-http-employees.component';
import { ViewPendingComponent } from './pending-reimbursment/view-pending/view-pending.component';
import { UplooadFileComponent } from './reimbursement-proof/uplooad-file/uplooad-file.component';
import { ShowHttpExpensesComponent } from './reimbursement/show-http-expenses/show-http-expenses.component';
import { ViewResolvedComponent } from './resolved-reimbursment/view-resolved/view-resolved.component';
import { AuthGuard } from './user/auth.guard';
import { LoginComponent } from './user/login/login.component';
import { LogoutComponent } from './user/logout/logout.component';

const routes: Routes = [
 
  { path: "employee-http-crud", component: ListHttpEmployeeComponent, canActivate: [AuthGuard] },
  { path: "employee-http-update/:myId", component: UpdateHttpEmployeeComponent, canActivate: [AuthGuard] },
  {path: "login", component: LoginComponent},
  {path: "logout", component: LogoutComponent},
  { path: "view-http-employees", component: ViewHttpEmployeesComponent, canActivate: [AuthGuard] },
  
  {path: "show-http-reimb-expense", component: ShowHttpExpensesComponent, canActivate: [AuthGuard]},
  {path: "view-all-pending-request", component: ViewPendingComponent, canActivate: [AuthGuard]},
  {path: "view-all-solved-request", component: ViewResolvedComponent, canActivate: [AuthGuard]},

  {path: "view-manager", component: ListManagerComponent, canActivate: [AuthGuard]},
  {path: "upload-file", component: UplooadFileComponent, canActivate: [AuthGuard]}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
