import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BankUserComponent } from './bank-user/bank-user.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { BankuserloginComponent } from './bankuserlogin/bankuserlogin.component';

@NgModule({
  declarations: [
    AppComponent,
    BankUserComponent,
    CustomerListComponent,
    RegisterComponent,
    HeaderComponent,
    CustomerDetailsComponent,
    HomeComponent,
    LoginComponent,
    BankuserloginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path:'home',
        component:HomeComponent
      },
      {
        path:'bankUser',
        component:BankUserComponent
      },
      {
        path:'customerList',
        component:CustomerListComponent
      },{
        path:'register',
        component:RegisterComponent
      },{
        path:'customer/:id',
        component:CustomerDetailsComponent
      },
      {
        path:'login',
        component:LoginComponent
      },
      {
        path:'bankuserlogin',
        component:BankuserloginComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
