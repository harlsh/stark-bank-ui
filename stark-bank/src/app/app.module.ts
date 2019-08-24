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
import { SidebarComponent } from './sidebar/sidebar.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { MaketransactionComponent } from './maketransaction/maketransaction.component';
import { DepositComponent } from './deposit/deposit.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NameFormatterPipe } from './name-formatter.pipe';
import { BranchFormatterPipe } from './branch-formatter.pipe';


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
    MainDisplayComponent,
    SidebarComponent,
    TransactionsComponent,
    MaketransactionComponent,
    DepositComponent,
    WithdrawComponent,
    NameFormatterPipe,
    BranchFormatterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: 'maindisplay',
        pathMatch:'full'
      },
      {
        path:'maindisplay',
        component:MainDisplayComponent,
        children:[
          {
            path:'',
            component:HomeComponent
          },
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
          },
          {
            path:'bankuserlogin',
            component:BankuserloginComponent
          },
          {
            path:'register',
            component:RegisterComponent
          },
          {
            path:'customer',
            component:CustomerDetailsComponent
          },
          {
            path:'customerList',
            component:CustomerListComponent
          }
        ]
      },


      {
        path: 'customer-dashboard',
        component: CustomerDashboardComponent,
        children: [
          {
            path:'',
            component:CustomerDetailsComponent
          },
          {
             path:'customer',
            component:CustomerDetailsComponent
          },
          {
            path:'accounts',
            component:AccountsComponent
          },
          {
            path: 'dashboard',
            component: DashboardComponent
          },
          {
            path:'customerList',
            component:CustomerListComponent
          },
          {
            path:'transactions',
            component:TransactionsComponent
          },
          {
            path:'makeTransaction',
            component:MaketransactionComponent
          },
          {
            path:'deposit',
            component:DepositComponent
          },
          {
            path:'withdraw',
            component:WithdrawComponent
          }

        ]
      }

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
