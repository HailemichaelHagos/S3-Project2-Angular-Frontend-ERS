
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeHttpService } from '../employee-http.service';
import { Employee } from '../employee.model';
@Component({
  selector: 'app-update-http-employee',
  templateUrl: './update-http-employee.component.html',
  styleUrls: ['./update-http-employee.component.css']
})
export class UpdateHttpEmployeeComponent implements OnInit {

  newEmployee: Employee = {
  employeeId: 0,
  employeePassword: "",
  employeeFirstName: "",
 employeeLastName: "",
  employeeContact: "",
  employeeAddress: "",
  employeeImageUrl: ""
  }

  constructor(private activatedRoute: ActivatedRoute, 
    private employeeHttpService: EmployeeHttpService,
    private router: Router) { }

  ngOnInit(): void {
       let employeeId: any = this.activatedRoute.snapshot.paramMap.get("myId");
       console.log(employeeId);
      this.employeeHttpService.fetchAEmployee(employeeId).subscribe((response)=>{
        console.log("fetch employee fom backend");
        console.log(response);
       this.newEmployee = response;
      });
  }
  
  
  updateEmployee(){
    this.employeeHttpService.updateEmployee(this.newEmployee).subscribe((response)=>{
      console.log(response);
      this.router.navigate(['employee-http-crud']);
      console.log(response);
    });
  }

}
