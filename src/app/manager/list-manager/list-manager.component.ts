import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Manager } from '../manager.model';
import { ManagerService } from '../manager.service';

@Component({
  selector: 'app-list-manager',
  templateUrl: './list-manager.component.html',
  styleUrls: ['./list-manager.component.css']
})
export class ListManagerComponent implements OnInit {
  
  allManagers: Manager[] = [];
  toggleAdd: boolean = false;

  newManager: Manager = {
    managerId: 0,
    managerPassword: "",
    managerFirstName: "",
    managerLastName: "",
    managerContact: "",
    managerAddress: "",
    managerImageUrl: ""
  }
 
  constructor(private managerService: ManagerService, private router: Router) {
   
   }

  oneManager: Manager = {
    managerId: 101,
    managerPassword:"sm22",
    managerFirstName: "samia",
    managerLastName: "johan",
    managerContact: "samia@gmail",
    managerAddress: "NewYork",
    managerImageUrl: "https://images.unsplash.com/photo-1611676279444-5577698aa13c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
  };

  
  ngOnInit(): void {
    this.allManagers = this.managerService.fetchAllManagers();
  }

  ngOnDestroy(): void {
      console.log("ngOnDestroy() called");
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges() called");
  }

  toggleAddForm(){
    if(this.toggleAdd){
      this.toggleAdd = false;
    }else{
      this.toggleAdd = true;
    }
  }

  goToEditManager(mngId: number){
    this.router.navigate(['employee-update', mngId]);
  }

  deleteManager(mngId: number){
   this.allManagers = this.managerService.deleteManager(mngId);
  }

  addManager(){
    let addNewManager: Manager = {

      managerId: 0,
      managerPassword: this.newManager.managerPassword,
      managerFirstName: this.newManager.managerFirstName,
      managerLastName: this.newManager.managerLastName,
      managerContact: this.newManager.managerContact,
      managerAddress: this.newManager.managerAddress,
      managerImageUrl: this.newManager.managerImageUrl

    }

    this.managerService.addManager(addNewManager);
    this.allManagers = this.managerService.fetchAllManagers();
  }

}
