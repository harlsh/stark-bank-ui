import { Component, OnInit } from '@angular/core';
import { Address } from '../Address';
import { Customer } from '../Customer';
import { Branch } from '../Branch';
import { CustomerService } from '../customer.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  customers: Customer[];
  branches: Branch[];
  private subscription:Subscription;

  constructor(private customerService:CustomerService) { }

  ngOnInit() {
    this.subscription = this.customerService
                            .listBranches()
                            .subscribe(response => {
                              this.branches = response;
                              
                            })
  }
  msg()
  {
    alert("Registration succesful");
  }

  handleFormData(data){
    let address:Address = new Address(data.value.houseNumber, data.value.street,data.value.state, data.value.pin);
    let customer:Customer = new Customer(data.value.phoneNumber,
      data.value.firstName,
      data.value.lastName,
      data.value.gender,
      data.value.dateOfBirth,
      data.value.nationalId,
      data.value.userId,
      data.value.password,
      address);
    console.log(customer);
    console.log(data.value.branch);
  }
}
