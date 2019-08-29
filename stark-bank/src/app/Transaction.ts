import { logging } from 'protractor';

export class Transaction{
    constructor(
        //  private id:any ,
         private accountBalance:any,
         private transactionAmount:any, 
         private transactionTime:any, 
         private creditedAccount:any, 
         private debitedAccount:any)
         {}
    // get _id(){
    //     return this.id;
    // }
    
    get _accountBalance(){
        return this.accountBalance;
    }
    get _transactionAmount(){
        return this.transactionAmount;
    }
    get _transactionTime(){
        return this.transactionTime;
    }
    get _creditedAccount(){
        return this.creditedAccount;
    }
    get _debitedAccount(){
        return this.debitedAccount;
    }
}