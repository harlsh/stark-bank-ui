import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { DashboardServiceService } from '../dashboard-service.service';
import{Account} from '../Account'
import { Transaction } from '../Transaction';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})
export class WithdrawComponent implements OnInit {
  account:any;
  constructor(private customerService: CustomerService,
    private dashboardService: DashboardServiceService) { }

  ngOnInit() {
      this.account=this.dashboardService.getAccount();
      // console.log(this.aid);
  }
  withdrawAmount(form){
    console.log("in Withdraw");
    console.log(this.account);
    let transaction=new Transaction(this.account.balance,form.value.amount,new Date(),this.account,this.account);
    //post this transaction 
    console.log("Transaction:");
    console.log(transaction);
    this.customerService.postTransaction(this.dashboardService.getCustomer(),this.account.id,transaction)
    .subscribe(response=>console.log(response));

  }

}
