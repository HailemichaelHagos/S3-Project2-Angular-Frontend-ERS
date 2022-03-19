import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reimbursement } from './reimbursement.model';

@Injectable({
  providedIn: 'root'
})
export class ReimbursementHttpService {

  constructor(private http: HttpClient) { }

  fetchAllExpenses(): Observable<Reimbursement[]>{
    return this.http.get<Reimbursement[]>("http://localhost:4040/employees/pen-req/1");
  }

  deleteExpense(rmbId: number): Observable<Reimbursement>{
    return this.http.delete<Reimbursement>("http://localhost:4040/api/expense/"+rmbId);
  }

  addExpense(expenseModel: Reimbursement): Observable<Reimbursement>{
    return this.http.post<Reimbursement>("http://localhost:4040/employees/submit", JSON.stringify(expenseModel));
  }

  updateExpense(expenseModel: Reimbursement): Observable<Reimbursement>{
    return this.http.put<Reimbursement>("http://localhost:4040/managers/resolve", JSON.stringify(expenseModel));
  }

  fetchAExpense(rmbId: number): Observable<Reimbursement>{
    return this.http.get<Reimbursement>("http://localhost:4040/employees/pen-req/"+rmbId);
  }
}
