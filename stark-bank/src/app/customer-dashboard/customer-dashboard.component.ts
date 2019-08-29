import { Component, OnInit } from '@angular/core';
import { DashboardServiceService } from '../dashboard-service.service';
import { Customer } from '../Customer';
import { CustomerService } from '../customer.service';
import { UserIdleService } from 'angular-user-idle';
import {Router} from "@angular/router";

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.css']
})
export class CustomerDashboardComponent implements OnInit {

  constructor(private dashboardService: DashboardServiceService, private customerService: CustomerService,
     private userIdle: UserIdleService,
     private router: Router) { }
  private customer:Customer;

  
  ngOnInit() {
    console.log("inside dashboard: " + this.dashboardService.getCustomer());
    this.customerService.getCustomer(this.dashboardService.getCustomer());

    //Start watching for user inactivity.
    this.userIdle.startWatching();
    
    // Start watching when user idle is starting.
    this.userIdle.onTimerStart().subscribe();
    
    // Start watch when time is up.
    this.userIdle.onTimeout().subscribe(() => { 
      alert("LogIn Again");
      //Set timeOut time in  app.module.ts
      this.router.navigate(['maindisplay/login']);
    });

  }

  stop() {
    this.userIdle.stopTimer();
  }
 
  stopWatching() {
    this.userIdle.stopWatching();
  }
 
  startWatching() {
    this.userIdle.startWatching();
  }
 
  restart() {
    this.userIdle.resetTimer();
  }

}
