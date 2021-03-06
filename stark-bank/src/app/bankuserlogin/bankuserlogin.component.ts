import { Component, OnInit, Output, OnDestroy } from '@angular/core';
import { Router } from "@angular/router";
import { BankUser } from '../BankUser';
import { CustomerService } from '../customer.service';
import { Subscription } from 'rxjs';
import { BankuserService } from '../bankuser.service';
import { Branch } from '../Branch';
import { Customer } from '../Customer';
import { EventEmitter } from '@angular/core';
import { CustomerListingService } from '../customer-listing.service';


@Component({
  selector: 'app-bankuserlogin',
  templateUrl: './bankuserlogin.component.html',
  styleUrls: ['./bankuserlogin.component.css']
})
export class BankuserloginComponent implements OnInit {
  
  
  branches: Branch[];
  private subscription:Subscription;
  bankUser:BankUser;
  customers: Customer[];

  constructor(
    private customerService:CustomerService,
    private router:Router,
    private customerListingService:CustomerListingService) { }

  // myFunc(form){
  //   console.log(form.value);
  //   // console.log(data.value.branch);
  //   let branchId = this.branches.filter(branch => branch.branchName || branch.ifsc == form.value.branch)[0].id;
  //   console.log("Branch ID is : " + branchId);
  //   this.subscription = this.customerService
  //     .listBankUsers(branchId)
  //     .subscribe(response => {
  //       this.bankUsers = response;
  //       console.log(this.bankUsers);
        
  //     })
  //     if(this.bankUsers.filter( b=> b.userName == form.value.userName && b.password == form.value.pass ))
  //       this.router.navigate(["maindisplay/customerList"]);
   
  // }

  ngOnInit(){
    this.subscription = this.customerService
    .listBranches()
    .subscribe(response => this.branches = response)
    }


  handleFormData(data){
    this.bankUser = new BankUser(data.value.userName, data.value.password);
    let branchId = this.branches.filter(branch => branch.branchName==data.value.branch || branch.ifsc == data.value.branch)[0].id;
    this.customerService.loginBankUser(this.bankUser, branchId).subscribe(response => {
      console.log(response)
      this.customers = response[0];
      this.customerListingService.setCustomers(this.customers);
      this.customerListingService.setBankUserId(response[1]);
      this.router.navigate(["maindisplay/customerList"]);
      this.customerListingService.setBranchId(branchId);
    });
    
    
  }
  
}