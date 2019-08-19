import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";


@Component({
  selector: 'app-bankuserlogin',
  templateUrl: './bankuserlogin.component.html',
  styleUrls: ['./bankuserlogin.component.css']
})
export class BankuserloginComponent implements OnInit {

  constructor(private  router:Router) { }
  muFunc(form){
    console.log('sdfdsfdsf')
    //this.router.navigate(['/customers-details']);
  }

  ngOnInit() {
  }

}
