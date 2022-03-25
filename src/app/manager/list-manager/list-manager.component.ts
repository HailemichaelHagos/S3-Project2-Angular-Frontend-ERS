import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { ManagerHttpServiceService } from '../manager-http-service.service';
import { Manager } from '../manager.model';

@Component({
  selector: 'app-list-manager',
  templateUrl: './list-manager.component.html',
  styleUrls: ['./list-manager.component.css']
})
export class ListManagerComponent implements OnInit {
  
  allManagers: Manager[] = [];
  toggleAdd: boolean = false;

  Manager = {

    managerId: 0,
    managerPassword: "",
    managerFirstName: "",
    managerLastName: "",
    managerContact: "",
    managerAddress: "",
    managerImageUrl: ""
  }

  constructor(private managerHttpServiceService: ManagerHttpServiceService, private router: Router) { }
 
  ngOnInit(): void {
    this.loadManager();  
  }

  loadManager(){
    this.managerHttpServiceService.fetchManager().subscribe((response: Manager[])=>{
    //  the response that we receive here is an array of Employees
     console.log(response);
     this.allManagers = response;
    });
  }
    
  goToEditManager(managerId: number){
    this.router.navigate(['manager-http-update', managerId]);
    //this.router.navigate(['employee-http-edit', employeeId]);
  }

  deleteManager(managerId: number){
   this.managerHttpServiceService.deleteManager(managerId).subscribe((response)=>{
     console.log(response);
     
     this.loadManager();;
   })
  }
  
}