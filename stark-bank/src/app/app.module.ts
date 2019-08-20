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
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { BankuserloginComponent } from './bankuserlogin/bankuserlogin.component';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { AccountsComponent } from './accounts/accounts.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainDisplayComponent } from './main-display/main-display.component';


@NgModule({
  declarations: [
    AppComponent,
    BankUserComponent,
    CustomerListComponent,
    RegisterComponent,
    HeaderComponent,
    CustomerDashboardComponent,
    HomeComponent,
    FooterComponent,
    LoginComponent,
    CustomerDetailsComponent,
    BankuserloginComponent,
    AccountsComponent,
    DashboardComponent,
    MainDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path:'',
        component:MainDisplayComponent,
        children:[
          {
            path:'home',
            component:HomeComponent
          },
          {
            path:'login',
            component:LoginComponent
          },
          {
            path:'bankUser',
            component:BankUserComponent
          },{
            path:'register',
            component:RegisterComponent
          }
        ]
      },


      {
        path:'customerList',
        component:CustomerListComponent
      },

      {
        path:'bankuserlogin',
        component:BankuserloginComponent
      },
      {
        path:'customer/:id',
        component:CustomerDetailsComponent
      },
      {
        path:'accounts',
        component:AccountsComponent
      },
      {
        path:'dashboard',
        component:DashboardComponent,
        children:[
          {
            path:'customer-dashboard',
            component:CustomerDashboardComponent
          },
          {
            path:'sub',
            component:MainDisplayComponent
          }
        ]
      }

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
