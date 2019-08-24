import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { BankUser } from '../BankUser';

import { Subscription } from 'rxjs';
import { BankuserService } from '../bankuser.service';


@Component({
  selector: 'app-bankuserlogin',
  templateUrl: './bankuserlogin.component.html',
  styleUrls: ['./bankuserlogin.component.css']
})
export class BankuserloginComponent implements OnInit {
  bankusers:BankUser[];
  private subscription:Subscription;
  bankUser:BankUser;

  constructor(private bankUserService:BankuserService) { }
  // myFunc(form){
  //   this.router.navigate(["maindisplay/customerList"]);
  // }

  ngOnInit(){
    
      this.subscription = this.bankUserService
                              .saveBankUser(this.bankUser)
                              .subscribe(response => {
                                this.bankusers = response;
                                
                              })
                            }


  handleFormData(data){
    console.log(data.value);
    this.bankUser = new BankUser(data.value.userName, data.value.password);
  
}
}