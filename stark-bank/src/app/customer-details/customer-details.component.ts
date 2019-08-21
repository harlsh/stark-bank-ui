import { Component, OnInit } from '@angular/core';
import { Customer } from '../Customer';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {
  customer:Customer[]=[];
  //attr:Customerattributes[]=[];
/*  constructor(private customerService:CustomerService) { }

  }*/
  ngOnInit() {
    //this.customer=this.customerService.findByCustomerId(id);
  }
  isDisabled=true;
  edit()
  {
    this.isDisabled=false;
  }
  save()
  {
    this.isDisabled=true;
    //call a function to update the data.
  }

}
