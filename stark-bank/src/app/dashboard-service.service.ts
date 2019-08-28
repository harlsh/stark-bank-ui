import { Injectable } from '@angular/core';
import { Customer } from './Customer';

@Injectable({
  providedIn: 'root'
})
export class DashboardServiceService {

  private customer: string;
  constructor() { }

  getCustomer(){
    return this.customer;
  }
  setCustomer(customer:string){
    this.customer = customer;
  }
}
