import { Injectable } from '@angular/core';
import { Customer } from './Customer';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private CUSTOMER_API_URL = "http://localhost:8080/api/v1/customers";
  private BRANCH_API_URL = "http://localhost:8080/api/v1/branches"

  branch:any[] = [];
  customers: any[] = [];
  constructor(private httpClient:HttpClient) { }

  saveCustomer(customer: Customer):Observable<any>{
    return this.httpClient.post(this.CUSTOMER_API_URL, JSON.stringify(customer))
  }

  listBranches():Observable<any[]>{
    return this.httpClient.get<any[]>(this.BRANCH_API_URL);
  }
}
