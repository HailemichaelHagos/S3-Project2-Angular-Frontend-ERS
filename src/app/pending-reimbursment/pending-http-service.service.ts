import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PendingRequest } from './pending.model';

@Injectable({
  providedIn: 'root'
})
export class PendingHttpServiceService {

  submitRequest() {
    throw new Error('Method not implemented.');
  }
  constructor(private http: HttpClient) { }
  fetchAllPendings(): Observable<PendingRequest[]>{
    return this.http.get<PendingRequest[]>("http://localhost:4040/managers/viewAllReq/1");
  }
  addPending(pendingModel: PendingRequest): Observable<PendingRequest>{

    return this.http.post<PendingRequest>("http://localhost:4040/managers/viewAllReq/2",  JSON.stringify(pendingModel));

  }
  }

  
