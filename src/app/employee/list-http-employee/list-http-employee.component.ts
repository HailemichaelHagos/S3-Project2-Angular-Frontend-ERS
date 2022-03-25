import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeHttpService } from '../employee-http.service';
import { Employee } from '../employee.model';

@Component({
  selector: 'app-list-http-employee',
  templateUrl: './list-http-employee.component.html',
  styleUrls: ['./list-http-employee.component.css']
})
export class ListHttpEmployeeComponent implements OnInit {

  allEmployees: Employee[] = [];
  oneEmployee: Employee[] = [];

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
    //  the response that we receive here is an array of Book
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
    this.router.navigate(['employee-http-update', employeeId]);
    //this.router.navigate(['employee-http-edit', employeeId]);
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
function employeeId(employeeId: any, number: any) {
  throw new Error('Function not implemented.');
}

function id(id: any) {
  throw new Error('Function not implemented.');
}

