import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PendingHttpServiceService } from '../pending-http-service.service';
import { PendingRequest } from '../pending.model';

@Component({
  selector: 'app-view-pending',
  templateUrl: './view-pending.component.html',
  styleUrls: ['./view-pending.component.css']
})
export class ViewPendingComponent implements OnInit {

  
  allPendings: PendingRequest[] = [];;

  newPending: PendingRequest = {
    reimbursementId: 2,
    requestingEmployeeId: 1,
    reimbursementAmount: 300,
    dateOfRequest: ""
  }

  constructor(private pendingHttpServiceService: PendingHttpServiceService, private router: Router) { }
 
  ngOnInit(): void {
    this.loadAllPendings();  
  }

  loadAllPendings(){
    this.pendingHttpServiceService.fetchAllPendings().subscribe((response)=>{
     console.log(response);
     this.allPendings = response;
   });
  }
  addPending(){
    this.pendingHttpServiceService.addPending(this.newPending).subscribe((response)=>{
      console.log(response);
      this.newPending = {
        reimbursementId: 2,
        requestingEmployeeId: 1,
        reimbursementAmount: 300,
        dateOfRequest: ""
     }
      this.loadAllPendings();
    })
   }

}
