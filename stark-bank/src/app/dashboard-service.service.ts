import { Injectable } from '@angular/core';
import { Customer } from './Customer';

@Injectable({
  providedIn: 'root'
})
export class DashboardServiceService {

  private customer: string;
  private accountId:any;
  constructor() { }

  getCustomer(){
    return this.customer;
  }
  setCustomer(customer:string){
    this.customer = customer;
  }
  setAccountId(accountId:any){
    this.accountId=accountId;
  }
  getAccountId(){
    return this.accountId;
  }
}
