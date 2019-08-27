import { Component, OnInit } from '@angular/core';
import { Customer } from '../Customer';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  // attr:Customerattributes[]=[];
/*  constructor(private customerService:CustomerService) { }

  }*/

  customer = {};
  isDisabled = true;

  ngOnInit() {
    // this.customer=this.customerService.findByCustomerId(id);
  }
  edit() {
    this.isDisabled = false;
  }
  save() {
    this.isDisabled = true;
    // call a function to update the data.
  }

}
