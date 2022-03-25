import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReimbursementHttpService } from 'src/app/reimbursement/reimbursement-http.service';
import { Reimbursement } from 'src/app/reimbursement/reimbursement.model';

@Component({
  selector: 'app-add-reimbursment',
  templateUrl: './add-reimbursment.component.html',
  styleUrls: ['./add-reimbursment.component.css']
})
export class AddReimbursmentComponent implements OnInit {

  allExpenses: Reimbursement[] = [];
  toggleAdd: boolean = false;

  newExpense: Reimbursement = {
    reimbursementId: 0,
    requestingEmployeeId: 0,
    reimbursementAmount: 0,
    requestApproved: true,
    dateOfRequest: "",
    dateResolved: ""

  }

  constructor(private reimbursementHttpService: ReimbursementHttpService, private router: Router) {

  }

  ngOnInit(): void {
    this.loadAllExpenses();
  }
  loadAllExpenses() {
    this.reimbursementHttpService.fetchAllExpenses().subscribe((response) => {
      console.log(response);
      this.allExpenses = response;
    });
  }

  toggleAddForm() {
    if (this.toggleAdd) {
      this.toggleAdd = false;
    } else {
      this.toggleAdd = true;
    }
  }


  goToEditExpense(reimbursementId: number) {
    this.router.navigate(['expense-http-update', reimbursementId]);
  }

  deleteExpense(reimbursementId: number) {
    this.reimbursementHttpService.deleteExpense(reimbursementId).subscribe((response) => {
      console.log(response);

      this.loadAllExpenses();
    })
  }

  addExpense() {
    this.reimbursementHttpService.addExpense(this.newExpense).subscribe((response) => {
      console.log(response);
      this.newExpense = {
        
        reimbursementId: 0,
        requestingEmployeeId: 0,
        reimbursementAmount: 0,
        requestApproved: true,
        dateOfRequest: "",
        dateResolved: ""

      }
      this.loadAllExpenses();
    })
  }

}
