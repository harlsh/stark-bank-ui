import { Injectable } from '@angular/core';
import { Customer } from './Customer';
import {Account} from './Account';

@Injectable({
  providedIn: 'root'
})
export class DashboardServiceService {

  private customerID: string;
  private account:any;
  constructor() { }

  getCustomer(){
    return this.customerID;
  }
  setCustomer(customer:string){
    this.customerID = customer;
  }

  setAccount(account:Account){
    this.account=account;
  }
  getAccount(){
    return this.account;
  }
}
