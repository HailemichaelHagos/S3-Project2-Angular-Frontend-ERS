import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../employee/employee.model';
import { Manager } from './manager.model';

@Injectable({
  providedIn: 'root'
})
export class ManagerHttpServiceService {
  fetchManager() {
    return this.http.get<Manager[]>("http://localhost:4444/api/manager");
  }
 
 
  // to work with HttpClient, we should include HttpClientModule in app.module.ts file
  constructor(private http: HttpClient) { }
//   fetchAllManagers(): Observable<Employee[]>{
//   return this.http.get<Manager[]>("http://localhost:4444/api/manager");
// }
  fetchAllEmployees(): Observable<Employee[]>{
    // we need to work with HttpClient to consume an endpoint
    return this.http.get<Employee[]>("http://localhost:4444/api/employees");
  }

  // not properly implemented
  deleteManager(empId: number): Observable<Employee>{
    return this.http.delete<Employee>("http://localhost:4040/employees/updateEmp/"+empId);
  }

  addEmployee(employeeModel: Employee): Observable<Employee>{
    return this.http.post<Employee>("http://localhost:4040/employees/submit", JSON.stringify(employeeModel));
  }

  updateEmployee(employeeModel: Employee): Observable<Employee>{
    return this.http.put<Employee>("http://localhost:4040/employees/updateEmp/", JSON.stringify(employeeModel));
  }

  fetchAEmployee(empId: number): Observable<Employee>{
    return this.http.get<Employee>("http://localhost:4040/employees/view/"+empId);
  }
}
