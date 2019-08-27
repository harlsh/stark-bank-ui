import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { BankUser } from '../BankUser';
import { CustomerService } from '../customer.service';
import { Subscription } from 'rxjs';
import { BankuserService } from '../bankuser.service';
import { Branch } from '../Branch';


@Component({
  selector: 'app-bankuserlogin',
  templateUrl: './bankuserlogin.component.html',
  styleUrls: ['./bankuserlogin.component.css']
})
export class BankuserloginComponent implements OnInit {
  branches: Branch[];
  private subscription:Subscription;
  bankUser:BankUser;
  branchId:any;
  bankUsers : any[];

  constructor(private customerService:CustomerService,private router:Router) { }
  myFunc(form){
    console.log(form.value);
    // console.log(data.value.branch);
    let branchId = this.branches.filter(branch => branch.branchName || branch.ifsc == form.value.branch)[0].id;
    console.log("Branch ID is : " + branchId);
    this.subscription = this.customerService
      .listBankUsers(branchId)
      .subscribe(response => {
        this.bankUsers = response;
        console.log(this.bankUsers);
        
      })
      if(this.bankUsers.filter( b=> b.userName == form.value.userName && b.password == form.value.pass ))
        this.router.navigate(["maindisplay/customerList"]);
   
  }

  ngOnInit(){
    
    this.subscription = this.customerService
    .listBranches()
    .subscribe(response => {
      this.branches = response;
      
    })
          ;
          this.subscription = this.customerService
          .listBankUsers(this.branchId)
          .subscribe(response => {
            this.bankUsers = response;
            console.log(this.bankUsers);
            
          })              }


  handleFormData(data){
    console.log(data.value);
    this.bankUser = new BankUser(data.value.userName, data.value.password);
  
  }
  bankuser()
   {
  //  
console.log("hey");
  }
}