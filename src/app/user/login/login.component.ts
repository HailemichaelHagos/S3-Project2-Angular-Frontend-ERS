import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  newUser: User = {
    userName: "",
    password: "",
    role: ""
  }

  errorMessage: string = "";
  constructor(private userService: UserService, private router: Router , private authService:AuthService) { }


  ngOnInit(): void {
  }
  validateUser(){
    if(this.newUser.role == "Employee")
    {
      console.log(this.newUser);
      //validate the employee
      this.userService.validateEmployeeLogin(this.newUser).subscribe((response)=>{
        console.log(response);
        if(response.employeeFirstName == ""){
          // login failed
          // remain in the component and display invalid credentials

        }else{
          //login as an employee successful
          this.authService.loggedIn = true;
          this.authService.employeeRole = true;
          this.authService.storeEmployeeUser(response);
          this.router.navigate(['employee-http-crud']);
        }
      })
    } else if(this.newUser.role == "Manager"){
      //validate the manager
      console.log(this.newUser);
      //validate the employee
      this.userService.validateManagerLogin(this.newUser).subscribe((response)=>{
        console.log(response);
        if(response.managerFirstName == ""){
          // login failed
          // remain in the component and display invalid credentials

        }else{
          //login as an employee successful
          this.authService.loggedIn = true;
          this.authService.managerRole = true;
          this.authService.storeManagerUser(response);
          //this.router.navigate(['view-employees']); // view-http-employees
         this.router.navigate(['view-manager'])
        }
      })
    }

  }

}
