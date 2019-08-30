import { Injectable } from '@angular/core';
import { Customer } from './Customer';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { BankUser } from './BankUser';
import { Account } from './Account';
import { Transaction } from './Transaction';
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
  getCustomer(id:string):Observable<Customer>{
    console.log(this.CUSTOMER_API_URL + id);
    return this.httpClient.get<Customer>(this.CUSTOMER_API_URL + id);
  }
  editCustomer(id:string, customer:Customer){
    console.log(JSON.stringify(customer,null,'\t'));
    return this.httpClient.put<Customer>(this.CUSTOMER_API_URL + id, JSON.stringify(customer), httpOptions)
  }
  loginCustomer(loginData:any):Observable<any>{
    return this.httpClient.post(this.CUSTOMER_API_URL + "login/", JSON.stringify(loginData), httpOptions);
  }
  listBranches():Observable<any[]>{
    return this.httpClient.get<any[]>(this.BRANCH_API_URL);
  }

  loginBankUser(bankUser: BankUser, id: string):Observable<any>{
    return this.httpClient.post(this.BRANCH_API_URL + id + "/bankusers/login", JSON.stringify(bankUser), httpOptions)
  }
  
  //Transactions
  getCustomerTransactions(id:any, aid:any):Observable<any[]>{
    return this.httpClient.get<any[]>(this.CUSTOMER_API_URL+id+"/accounts/"+aid+"/transactions");
  }

  postTransactionWithdraw(id:any, aid:any, transaction:Transaction):Observable<any>{
    console.log(this.CUSTOMER_API_URL+id+'/accounts/'+aid+'/transactions/withdraw');
    return this.httpClient.post(this.CUSTOMER_API_URL+id+'/accounts/'+aid+'/transactions/withdraw',JSON.stringify(transaction), httpOptions);
  }
  postTransactionDeposit(id:any, aid:any, transaction:Transaction):Observable<any>{
    console.log(this.CUSTOMER_API_URL+id+'/accounts/'+aid+'/transactions/deposit');
    return this.httpClient.post(this.CUSTOMER_API_URL+id+'/accounts/'+aid+'/transactions/deposit',JSON.stringify(transaction), httpOptions);
  }

  postTransactionTransfer(id:any, aid:any, transaction:Transaction):Observable<any>{
    console.log(this.CUSTOMER_API_URL+id+'/accounts/'+aid+'/transactions/transfer');
    return this.httpClient.post(this.CUSTOMER_API_URL+id+'/accounts/'+aid+'/transactions/transfer',JSON.stringify(transaction), httpOptions);
  }

  getBankUserCustomers(branchId:any, bankUserId:any):Observable<any[]>{
    console.log(this.BRANCH_API_URL + branchId + "/bankusers/" + bankUserId + "/customerlist/");
    return this.httpClient.get<any[]>(this.BRANCH_API_URL + branchId + "/bankusers/" + bankUserId + "/customerlist/");
  }
  createCustomerLogin(branchId, bankUserId, customerId):Observable<any>{
    console.log(this.BRANCH_API_URL + branchId + "/bankusers/"+ bankUserId + "/createLogin/" + customerId);
    return this.httpClient.post(this.BRANCH_API_URL + branchId + "/bankusers/"+ bankUserId + "/createLogin/" + customerId, JSON.stringify({}), httpOptions)
  }

  deleteCustomer(customerId):Observable<any>{
    return this.httpClient.delete(this.CUSTOMER_API_URL + customerId)
  }
  //accounts
  getAccounts(customerId:any):Observable<any>{
    console.log(this.CUSTOMER_API_URL+customerId+"/accounts/");
    return this.httpClient.get<any[]>(this.CUSTOMER_API_URL+customerId+"/accounts/");
  }
  postAccounts(customerId:any,account:Account):Observable<any>{
    return this.httpClient.post(this.CUSTOMER_API_URL+ customerId +'/accounts',JSON.stringify(account), httpOptions);
  }

  getAccountByAccountNumber(customerId:any, accountNumber:any):Observable<any>{
    console.log(this.CUSTOMER_API_URL + customerId + "/accounts/" + accountNumber + "/account");
    return this.httpClient.get<any>(this.CUSTOMER_API_URL + customerId + "/accounts/" + accountNumber + "/account");
  }
 
}