import { Component, OnInit ,PACKAGE_ROOT_URL} from '@angular/core';
import { Router } from '@angular/router';
import { Transaction } from '../Transaction';
import { Subscription } from 'rxjs';
import { CustomerService } from '../customer.service';
import { Customer } from '../Customer';
import { Account } from '../Account';
import { DashboardServiceService } from '../dashboard-service.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']

})
export class TransactionsComponent implements OnInit {
  
  transactions:Transaction[];
  customer:Customer; //Get CustomerId
  account:Account;    //Get the AccountId

  private subscription:Subscription;

  constructor(private customerService:CustomerService,
    private router:Router,
    private dashboardService:DashboardServiceService){  }

   id:any;
   acc:any[]=[];
  ngOnInit() {
    let id=this.dashboardService.getCustomer();
    let acc=this.dashboardService.getAccount();
    this.subscription = this.customerService
    .getCustomerTransactions(id,acc.id)           //Edit arguments as CustomerId and AccountID
    .subscribe(response => {
      this.transactions= response;
      console.log(this.transactions);
     });
     
  }

  // attributes = ["ID","TRANSACTIONAMOUNT","DEBITEDACCOUNT","CREDITEDACCOUNT"];
  // transactions = [
  //   {
  //     id:1,
  //     transactionAmount: 20000,
  //     creditedAccount: 234563748,
  //     debitedAccount:6475894,
  //   },
  //   {
  //     id:2,
  //     transactionAmount: 40000,
  //     creditedAccount: 234563748,
  //     debitedAccount:6475894,
  //   },
  //   {
  //     id:3,
  //     transactionAmount: 4560000,
  //     creditedAccount: 234563748,
  //     debitedAccount:6475894,
  //   },
  //   {
  //     id:4,
  //     transactionAmount: 245600,
  //     creditedAccount: 234563748,
  //     debitedAccount:6475894,
  //   },
  //   {
  //     id:5,
  //     transactionAmount: 890000,
  //     creditedAccount: 234563748,
  //     debitedAccount:6475894,
  //   }

  //   ]

  // makeTransaction():void
  // {
  //   this.router.navigate(["/customer-dashboard/makeTransaction"]);
  // }
}
