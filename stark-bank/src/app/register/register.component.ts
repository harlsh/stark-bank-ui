import { Component, OnInit } from '@angular/core';
import { Address } from '../Address';
import { Customer } from '../Customer';
import { Branch } from '../Branch';
import { CustomerService } from '../customer.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  customers: Customer[];
  branches: Branch[];
  private subscription:Subscription;

  constructor(private customerService:CustomerService, private router: Router) { }

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
    console.log(JSON.stringify(customer, null, "\t"));
    console.log(data.value.branch);
    let branchId = this.branches.filter(branch => branch.branchName || branch.ifsc == data.value.branch)[0].id;
    console.log("Branch ID is : " + branchId);
    this.customerService.saveCustomer(customer, branchId).subscribe(response => {
      this.router.navigate(['/']);
    });
  }
}
