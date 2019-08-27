import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from './Customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerListingService {

  constructor(
    private router:Router
  ) { }

  private customers:Customer[];
  private branchId;
  private bankUserId;  
  setCustomers(customers: Customer[]){
    console.log("customer recieved")
    console.log(customers);
    this.customers = customers;
    console.log("customers in service");
    console.log(this.customers);
  }

  getCustomers(){
    let temp = this.customers;
    console.log(temp);
    return temp;
  }

  setBranchId(branchId){
      this.branchId = branchId;
  }

  getBranchId(){
    return this.branchId;
  }

  setBankUserId(bankUserId){
    this.bankUserId = bankUserId;
  }

  getBankUserId(){
    return this.bankUserId;
  }
}
