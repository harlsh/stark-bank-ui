import { Component, OnInit } from '@angular/core';
import { CustomerListingService } from '../customer-listing.service';
import { Customer } from '../Customer';
import {Account}    from '../Account';
import { CustomerService } from '../customer.service';
import { UserIdleService } from 'angular-user-idle';
import {Router} from "@angular/router";

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  private customers:any[];
  
  constructor(
    private customerListingService: CustomerListingService,
    private customerService: CustomerService,
    private userIdle: UserIdleService,
     private router: Router
  ) { }

  ngOnInit() {
    let branchId = this.customerListingService.getBranchId();
    let bankUserId = this.customerListingService.getBankUserId();
    this.customerService.getBankUserCustomers(branchId, bankUserId).subscribe( response => {
      this.customers = response;
      console.log(this.customers);
      });

      //Start watching for user inactivity.
    this.userIdle.startWatching();
    
    // Start watching when user idle is starting.
    this.userIdle.onTimerStart().subscribe();
    
    // Start watch when time is up.
    this.userIdle.onTimeout().subscribe(() => { 
      alert("LogIn Again");
      //Set timeOut time in  app.module.ts
      this.router.navigate(['maindisplay/bankuserlogin']);
    });
  }
  AcceptFun(event: Event, id){
    this.customers = this.customers.filter(c=> c.id != id);
    this.customerService.createCustomerLogin(this.customerListingService.getBranchId(), 
      this.customerListingService.getBankUserId(), 
      id).subscribe(response => console.log(response));
      let account: Account =new Account("Saving", Math.floor(100000 + Math.random() * 900000),500);
      this.customerService.postAccounts(id,account).subscribe(response=>console.log(response));
      console.log();
    console.log(this.customers);
  }

  RejectFun(event: Event, id){
    this.customers = this.customers.filter(c=> c.id != id);
    this.customerService.deleteCustomer(id).subscribe();
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
