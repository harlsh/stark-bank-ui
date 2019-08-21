import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {

  constructor() { }
  accounts=[{
    id:1,
    accountNumber:101,
    accountName:"Harish Reddy",
    balance:1016
  },{
    id:2,
    accountNumber:102,
    accountName:"Charan Reddy",
    balance:505
  },{
    id:3,
    accountNumber:103,
    accountName:"Krishna Murthy",
    balance:332
  }
]

  ngOnInit() {
  }

}
