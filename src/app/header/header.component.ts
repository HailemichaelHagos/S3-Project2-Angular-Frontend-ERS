import { Component, OnInit } from '@angular/core';
import { AuthService } from '../user/auth.service';
import { User } from '../user/user.model';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  isLoggedIn(): boolean{
    return this.authService.loggedIn;
  }


  getRole(): string{
    if(this.authService.managerRole){
      return "manager";
    }else if(this.authService.employeeRole){
      return "employee";
    }
      return "";

  }


}
