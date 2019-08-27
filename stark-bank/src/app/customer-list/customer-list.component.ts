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

  private customers:Customer[];
  
  constructor(
    private customerListingService: CustomerListingService,
    private customerService: CustomerService
  ) { }

  ngOnInit() {
    console.log("recieving customers")
    this.customers = this.customerListingService.getCustomers();
    console.log(this.customers);
  }
  AcceptFun(id: string){
    console.log("jasdhkjsad");
    this.customerService.createCustomerLogin(this.customerListingService.getBranchId, this.customerListingService.getBankUserId, id);
  }

}
