import { Component, OnInit } from '@angular/core';
import { CustomerListingService } from '../customer-listing.service';
import { Customer } from '../Customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  private customers:any[];
  
  constructor(
    private customerListingService: CustomerListingService,
    private customerService: CustomerService
  ) { }

  ngOnInit() {
    let branchId = this.customerListingService.getBranchId();
    let bankUserId = this.customerListingService.getBankUserId();
    this.customerService.getBankUserCustomers(branchId, bankUserId).subscribe( response => {
      this.customers = response;
      console.log(this.customers);
      });
  }
  AcceptFun(event: Event, id){
    this.customers = this.customers.filter(c=> c.id != id);
    this.customerService.createCustomerLogin(this.customerListingService.getBranchId(), 
      this.customerListingService.getBankUserId(), 
      id).subscribe(response => console.log(response));
    
    console.log(this.customers);
  }

  RejectFun(event: Event, id){
    this.customers = this.customers.filter(c=> c.id != id);
    this.customerService.deleteCustomer(id).subscribe();
  }

}
