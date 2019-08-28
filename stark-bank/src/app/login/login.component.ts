import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';
import { DashboardServiceService } from '../dashboard-service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private dashboardService:DashboardServiceService,private customerService: CustomerService , private router:Router){
  }

  ngOnInit() {
  }
handleFormData(form)
{
  console.log(form.value);
  this.customerService.loginCustomer({userId: form.value.userId, password: form.value.password}).subscribe(response => {
    this.dashboardService.setCustomer(response.id);
    console.log(response.id);
    this.router.navigate(["customer-dashboard"]);});
  
}
  register()
  {
    this.router.navigate(["maindisplay/register"]);
  }
}

