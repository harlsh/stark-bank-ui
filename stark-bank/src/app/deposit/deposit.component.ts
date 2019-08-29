import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { DashboardServiceService } from '../dashboard-service.service';
import { Transaction } from '../Transaction';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent implements OnInit {
  account:any;
  constructor(private customerService: CustomerService,
    private dashboardService: DashboardServiceService) { }

  ngOnInit() {
      this.account=this.dashboardService.getAccount();
      // console.log(this.aid);
  }
  depositAmount(form){
    console.log("in Deposit");
    console.log(this.account);
    let transaction=new Transaction(this.account.balance,form.value.amount,new Date(),this.account,this.account);
    //post this transaction 
    console.log("Transaction:");
    console.log(transaction);
    this.customerService.postTransactionDeposit(this.dashboardService.getCustomer(),this.account.id,transaction)
    .subscribe(response=>console.log(response));

  }
}
