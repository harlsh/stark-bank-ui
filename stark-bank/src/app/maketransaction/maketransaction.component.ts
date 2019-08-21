import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-maketransaction',
  templateUrl: './maketransaction.component.html',
  styleUrls: ['./maketransaction.component.css']
})
export class MaketransactionComponent implements OnInit {

  constructor(private router:Router){
  }

  ngOnInit() {
  }
send()
{
  alert("Money Sent");
  this.router.navigate(["customer-dashboard/transactions"]);
}
}
