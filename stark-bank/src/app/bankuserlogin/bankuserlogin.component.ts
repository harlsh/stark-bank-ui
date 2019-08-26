import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { BankUser } from '../BankUser';

import { Subscription } from 'rxjs';
import { BankuserService } from '../bankuser.service';
import { Branch } from '../Branch';
import { CustomerService } from '../customer.service';


@Component({
  selector: 'app-bankuserlogin',
  templateUrl: './bankuserlogin.component.html',
  styleUrls: ['./bankuserlogin.component.css']
})
export class BankuserloginComponent implements OnInit {
  bankusers:BankUser[];
  private subscription:Subscription;
  bankUser:BankUser;
  branches:Branch[];


  constructor(private customerService:CustomerService, private router:Router) { }
  myFunc(form){
    this.router.navigate(["maindisplay/customerList"]);
  }

  ngOnInit(){
    
    this.subscription = this.customerService
    .listBranches()
    .subscribe(response => {
      this.branches = response;
      
    })
  }

  handleFormData(data){
    console.log(data.value);
    this.bankUser = new BankUser(data.value.userName, data.value.password);
  
  }
}