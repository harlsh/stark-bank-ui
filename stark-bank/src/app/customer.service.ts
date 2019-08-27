import { Injectable } from '@angular/core';
import { Customer } from './Customer';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { BankUser } from './BankUser';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private CUSTOMER_API_URL = "http://localhost:8080/api/v1/customers/";
  private BRANCH_API_URL = "http://localhost:8080/api/v1/branches/";

  branch:any[] = [];
  customers: any[] = [];
  constructor(private httpClient:HttpClient) { }

  saveCustomer(customer: Customer, id: string):Observable<any>{
    console.log(JSON.stringify(this.BRANCH_API_URL + id + "/customers"));
    return this.httpClient.post(this.BRANCH_API_URL + id + "/customers/", JSON.stringify(customer), httpOptions)
  }

  listBranches():Observable<any[]>{
    return this.httpClient.get<any[]>(this.BRANCH_API_URL);
  }

  loginBankUser(bankUser: BankUser, id: string):Observable<any>{
    return this.httpClient.post(this.BRANCH_API_URL + id + "/bankusers/login", JSON.stringify(bankUser), httpOptions)
  }
  
  getCustomerTransactions(id:any, aid:any):Observable<any[]>{
    return this.httpClient.get<any[]>(this.CUSTOMER_API_URL+id+"/accounts/"+aid+"/transactions");
  }

  createCustomerLogin(branchId, bankUserId, customerId){
    console.log(this.BRANCH_API_URL + branchId + "/bankusers/"+ bankUserId + "/createLogin/" + customerId)
    this.httpClient.post(this.BRANCH_API_URL + branchId + "/bankusers/"+ bankUserId + "/createLogin/" + customerId, JSON.stringify({}), httpOptions)
  }
}