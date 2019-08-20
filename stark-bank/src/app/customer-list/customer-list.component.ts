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
    attributes=["ID","FIRSTNAME","LASTNAME","DATEOFBIRTH","NATIONALID","Accept/Reject"];
    customers=[{
      id:1,
      firstName: "Rachana",
        lastName:"Kavukuntla",
      dateOfBirth:"2/9/0984",
      nationalId:23456

    },
    {
      id:2,
      firstName: "Sandhya",
      lastName:"Lingamalla",
      dateOfBirth:"2/9/0984",
      nationalId:"23456"
    },
    {
      id:3,
      firstName: "Krishna",
      lastName:"Murthy",
      dateOfBirth:"2/9/0984",
      nationalId:"23456"
    }]
  constructor() { }

  ngOnInit() {
  }

}
