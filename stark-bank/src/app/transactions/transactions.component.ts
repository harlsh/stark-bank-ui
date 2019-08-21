import { Component, OnInit ,PACKAGE_ROOT_URL} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']

})
export class TransactionsComponent implements OnInit {

  constructor(private router:Router){
  }

  ngOnInit() {
  }
  attributes = ["ID","TRANSACTIONAMOUNT","DEBITEDACCOUNT","CREDITEDACCOUNT"];
  transactions = [
    {
      id:1,
      transactionAmount: 20000,
      creditedAccount: 234563748,
      debitedAccount:6475894,
    },
    {
      id:2,
      transactionAmount: 40000,
      creditedAccount: 234563748,
      debitedAccount:6475894,
    },
    {
      id:3,
      transactionAmount: 4560000,
      creditedAccount: 234563748,
      debitedAccount:6475894,
    },
    {
      id:4,
      transactionAmount: 245600,
      creditedAccount: 234563748,
      debitedAccount:6475894,
    },
    {
      id:5,
      transactionAmount: 890000,
      creditedAccount: 234563748,
      debitedAccount:6475894,
    }

    ]
  makeTransaction()
  {
    this.router.navigate(["makeTransaction"]);
  }
}
