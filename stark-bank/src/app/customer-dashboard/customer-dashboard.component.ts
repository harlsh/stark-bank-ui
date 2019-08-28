import { Component, OnInit } from '@angular/core';
import { DashboardServiceService } from '../dashboard-service.service';
import { Customer } from '../Customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.css']
})
export class CustomerDashboardComponent implements OnInit {

  constructor(private dashboardService: DashboardServiceService, private customerService: CustomerService) { }
  private customer:Customer;
  ngOnInit() {
    console.log("inside dashboard: " + this.dashboardService.getCustomer());
    this.customerService.getCustomer(this.dashboardService.getCustomer());
  }

}
