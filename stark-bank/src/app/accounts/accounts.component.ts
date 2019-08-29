import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { DashboardServiceService } from '../dashboard-service.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {

  constructor(private customerService: CustomerService,private dashboardService: DashboardServiceService) { }
  accounts:Account[]=[];
  

//   accounts=[{
//     id:1,
//     accountNumber:101,
//     accountName:"Harish Reddy",
//     balance:1016
//   },{
//     id:2,
//     accountNumber:102,
//     accountName:"Charan Reddy",
//     balance:505
//   },{
//     id:3,
//     accountNumber:103,
//     accountName:"Krishna Murthy",
//     balance:332
//   }
// ]

  ngOnInit() {
    let id=this.dashboardService.getCustomer();
    this.customerService.getAccounts(id).subscribe(response=>this.accounts=response);
  }

  AcceptFun(event: Event,account){
    this.dashboardService.setAccount(account)
    console.log("Accoount is:");
    console.log(this.dashboardService.getAccount());
  }

}
