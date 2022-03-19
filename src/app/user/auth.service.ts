import { Injectable } from '@angular/core';
import { Employee } from '../employee/employee.model';
import { Manager } from '../manager/manager.model';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
// purpose if this service is to store and retrieve user info from browser storage
// and mark if a person has logged in or logged out
constructor() { }

loggedIn: boolean = false;
managerRole: boolean = false;
employeeRole: boolean = false;

storeEmployeeUser(user: Employee): void{
  sessionStorage.setItem("employeeInfo", JSON.stringify(user));
}

storeManagerUser(user: Manager): void{
  sessionStorage.setItem("managerInfo", JSON.stringify(user));
}

retrieveEmployeeUser(): User{
  let data: any = sessionStorage.getItem("employeeInfo");
  return JSON.parse(data);
}

retrieveManagerUser(): User{
  let data: any = sessionStorage.getItem("managerInfo");
  return JSON.parse(data);
}

destroyEmployeeUser(): void{
  sessionStorage.removeItem("employeeInfo");
}

destroyManagerUser(): void{
  sessionStorage.removeItem("managerInfo");
}
}
