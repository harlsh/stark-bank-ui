import { Injectable } from '@angular/core';
import { Customer } from './Customer';

@Injectable({
  providedIn: 'root'
})
export class BankService {
  customers:Customer[]=[];
  constructor() { }

  addCustomer(customer:Customer):void{
    this.customers.push(customer);
  }

  listCustomers(): Customer[]{
      return this.customers;
  }
  
   
  
}