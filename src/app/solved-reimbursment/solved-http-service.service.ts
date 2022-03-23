import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SolvedRequest } from '../resolved-reimbursment/solved-model';

@Injectable({
  providedIn: 'root'
})
export class SolvedHttpServiceService {

  submitRequest() {
    throw new Error('Method not implemented.');
  }
  constructor(private http: HttpClient) { }
  fetchAllSolved(): Observable<SolvedRequest[]>{
    return this.http.get<SolvedRequest[]>("http://localhost:4444/api/all-resolved");
  }
  addSolved(pendingModel: SolvedRequest): Observable<SolvedRequest>{

    return this.http.post<SolvedRequest>("http://localhost:4444/api/all-resolved/approve-or-deny",  JSON.stringify(pendingModel));

  }
}
