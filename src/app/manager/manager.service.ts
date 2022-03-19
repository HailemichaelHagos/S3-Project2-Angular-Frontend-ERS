import { Injectable } from '@angular/core';
import { Employee } from '../employee/employee.model';
import { Manager } from './manager.model';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  allManagers: Manager[] = [
    {
      managerId: 101,
     // email: "samia@gmail",
     managerPassword: "sm22",
     managerFirstName: "samia",
     managerLastName: "johan",
     managerContact: "samia@gmail",
     managerAddress: "NewYork",
     managerImageUrl: "https://images.unsplash.com/photo-1611676279444-5577698aa13c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
    },
    {
      managerId: 101,
     // email: "samia@gmail",
     managerPassword: "sm22",
     managerFirstName: "samia",
     managerLastName: "johan",
     managerContact: "samia@gmail",
     managerAddress: "NewYork",
     managerImageUrl: "https://images.unsplash.com/photo-1611676279444-5577698aa13c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
    },

  ];


  allEmployees: Employee[] = [
    {
      employeeId: 101,
      // email: "samia@gmail",
      employeePassword: "sm22",
      employeeFirstName: "samia",
      employeeLastName: "johan",
      employeeContact: "samia@gmail",
      employeeAddress: "NewYork",
      employeeImageUrl: "https://www.creativefaze.com/sites/default/files/android-app-developer-Specialist111.jpg"
    },
    {

      employeeId: 101,
      // email: "samia@gmail",
      employeePassword: "sm22",
      employeeFirstName: "samia",
      employeeLastName: "johan",
      employeeContact: "samia@gmail",
      employeeAddress: "NewYork",
      employeeImageUrl: "https://www.creativefaze.com/sites/default/files/android-app-developer-Specialist111.jpg"
    },
    {

      employeeId: 101,
      // email: "samia@gmail",
      employeePassword: "sm22",
      employeeFirstName: "samia",
      employeeLastName: "johan",
      employeeContact: "samia@gmail",
      employeeAddress: "NewYork",
      employeeImageUrl: "https://www.creativefaze.com/sites/default/files/android-app-developer-Specialist111.jpg"
    }
  ];


  constructor() { }

  fetchAllEmployees(): Employee[] {
    return this.allEmployees;
  }

  fetchAllManagers(): Manager[] {
    return this.allManagers;
  }

  deleteManager(mngId: number): Manager[] {
    console.log(mngId);
    for (let i = 0; i < this.allManagers.length; i++) {
      if (this.allManagers[i].managerId == mngId) {
        this.allManagers.splice(i, 1);
        break;
      }
    }
    return this.allManagers;
  }

  addManager(managerModel: Manager): Manager {
    let newMngId: number = this.allManagers[this.allManagers.length - 1].managerId + 1;
    managerModel.managerId = newMngId;
    this.allManagers.push(managerModel);
    return managerModel;
  }

  updateManager(managerModel: Manager): Manager {
    for (let i = 0; i < this.allManagers.length; i++) {
      if (this.allManagers[i].managerId == managerModel.managerId) {
        this.allManagers[i] = managerModel;
        break;
      }
    }
    return managerModel;
  }

  fetchAManager(managerId: number): Manager {
    for (let i = 0; i < this.allManagers.length; i++) {
      if (this.allManagers[i].managerId == managerId) {
        return this.allManagers[i];
      }
    }
    return {
      // mngId: 0,
      // password: "",
      // email: "",
      // firstname: "",
      // lastname: "",
      // mngContact: "",
      // mngAddress: "",
      // mngImageUrl: ""
      managerId: 0,
      managerPassword: "",
      managerFirstName: "",
      managerLastName: "",
      managerContact: "",
      managerAddress: "",
      managerImageUrl: ""

    };
  }
}
