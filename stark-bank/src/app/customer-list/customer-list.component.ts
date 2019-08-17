import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  
  /* customers:Customer[]=[];
  constructor(private customerService:CustomerService) { }

  ngOnInit() {
    this.customers = this.customerService.listCustomers();
  }

  findById(id):Customer{customer return this.customerService.findByCustomerId(id);
  }
  */
    attributes=["ID","NAME","Accept/Reject"];
    customers=[{
        id:1,
        name:"a"
    },
    {
        id:2,
        name:"b"
    },
    {
        id:3,
        name:"c"
    }]
  constructor() { }

  ngOnInit() {
  }

}
