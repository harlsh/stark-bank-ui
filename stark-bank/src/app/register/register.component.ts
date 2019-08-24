import { Component, OnInit } from '@angular/core';
import { Address } from '../Address';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  msg()
  {
    alert("Registration succesful");
  }

  handleFormData(data){
    console.log(data.value);
    let address:Address = new Address(data.value.dateOfBirth, data.value.street,data.value.state, data.value.pin);
   
  }
}
