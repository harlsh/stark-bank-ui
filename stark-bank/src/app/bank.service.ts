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

  findByCustomerId(id:number){
     return this.customers.filter(customer=>customer.id===id)[0];
  }

  deleteCustomer(id:number){
    this.customers=this.customers.filter(customer=>customer.id !==id)
  }
  
}
