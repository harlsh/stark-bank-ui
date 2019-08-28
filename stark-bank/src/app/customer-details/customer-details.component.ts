import { Component, OnInit } from '@angular/core';
import { Customer } from '../Customer';
import { CustomerService } from '../customer.service';
import { DashboardServiceService } from '../dashboard-service.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  // attr:Customerattributes[]=[];
  constructor(private customerService:CustomerService, private dashboardService: DashboardServiceService) { }

  
  private customer: any;
  isDisabled = true;

  ngOnInit() {
    console.log(this.customerService.getCustomer(this.dashboardService.getCustomer()));
    this.customerService.getCustomer(this.dashboardService.getCustomer()).subscribe(response => {
      this.customer = response;
      delete this.customer.id
      console.log(JSON.stringify(this.customer));}
      );
  }
  edit() {
    this.isDisabled = false;
  }
  save() {
    this.isDisabled = true;
    // call a function to update the data.
    this.customerService.editCustomer(this.dashboardService.getCustomer(), this.customer).subscribe(response => {
      console.log("after save: " + response);
      this.customer = response
    })
  }

}
