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
  

//   accountss=[{
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

  useAccount(event: Event, aid){
    console.log("Hello useAccount");
    // console.log("AccoountId is set:"+this.dashboardService.setAccountId(aid));
    this.dashboardService.setAccountId(aid);
  }

}
