import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeHttpService } from 'src/app/employee/employee-http.service';
import { Employee } from 'src/app/employee/employee.model';

@Component({
  selector: 'app-view-http-employees',
  templateUrl: './view-http-employees.component.html',
  styleUrls: ['./view-http-employees.component.css']
})
export class ViewHttpEmployeesComponent implements OnInit {

  allEmployees: Employee[] = [];
  toggleAdd: boolean = false;

  newEmployee: Employee = {

  employeeId: 0,
  employeePassword: "",
  employeeFirstName: "",
 employeeLastName: "",
  employeeContact: "",
  employeeAddress: "",
  employeeImageUrl: ""
  }

  constructor(private employeeHttpService: EmployeeHttpService, private router: Router) { }
 
  ngOnInit(): void {
    this.loadAllEmployees();  
  }

  loadAllEmployees(){
    this.employeeHttpService.fetchAllEmployees().subscribe((response)=>{
    //  the response that we receive here is an array of Employees
     console.log(response);
     this.allEmployees = response;
    });
  }

  toggleAddForm(){
    if(this.toggleAdd){
      this.toggleAdd = false;
    }else{
      this.toggleAdd = true;
    }
  }


  goToEditEmployee(employeeId: number){
    this.router.navigate(['employee-http-edit', employeeId]);
  }

  deleteEmployee(employeeId: number){
   this.employeeHttpService.deleteEmployee(employeeId).subscribe((response)=>{
     console.log(response);
     
     this.loadAllEmployees();
   })
  }

  addEmployee(){
   this.employeeHttpService.addEmployee(this.newEmployee).subscribe((response)=>{
     console.log(response);
     this.newEmployee = {
      employeeId: 0,
      //email: string,
      employeePassword: "",
      employeeFirstName: "",
     employeeLastName: "",
      employeeContact: "",
      employeeAddress: "",
      employeeImageUrl: ""
    }
     this.loadAllEmployees();
   })
  }

}
