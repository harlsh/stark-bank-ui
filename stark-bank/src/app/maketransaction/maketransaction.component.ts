import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';
import { DashboardServiceService } from '../dashboard-service.service';
import { Transaction } from '../Transaction';

@Component({
  selector: 'app-maketransaction',
  templateUrl: './maketransaction.component.html',
  styleUrls: ['./maketransaction.component.css']
})
export class MaketransactionComponent implements OnInit {
  account:any;
  constructor(private customerService: CustomerService,
    private dashboardService: DashboardServiceService,
    private router:Router) { }
  

  ngOnInit() {
  }
send()
{
  alert("Money Sent");
  this.router.navigate(["customer-dashboard/transactions"]);
}

// This  function needed to be edited 
makeTransaction(form){
  console.log("in Make Transaction");
  
  let debitaccount=this.dashboardService.getAccount();
  let creditaccount=this.customerService.getAccountByAccountNumber(this.dashboardService.getCustomer() , form.value.creditAccountNumber)
  .subscribe(response=>{
    let creditAccount = response;
    let transaction=new Transaction(debitaccount.balance,form.value.amount,new Date(),creditAccount,debitaccount);
    console.log(transaction);
    this.customerService.postTransactionTransfer(this.dashboardService.getCustomer(),debitaccount.id,transaction)
  });
  

  
  // post this transaction 
  // console.log("Transaction:");
  // console.log(transaction);
  // 
  // .subscribe(response=>console.log(response));

}

}
