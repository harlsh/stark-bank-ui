import { logging } from 'protractor';

export class Transaction{
    constructor(
        //  private id:any ,
         private account_balance:any,
         private transaction_amount:any, 
         private transaction_time:any, 
         private credited_account:any, 
         private debited_account:any)
         {}
    // get _id(){
    //     return this.id;
    // }
    
    get _account_balance(){
        return this.account_balance;
    }
    get _transaction_amount(){
        return this.transaction_amount;
    }
    get _transaction_time(){
        return this.transaction_time;
    }
    get _credited_account(){
        return this.credited_account;
    }
    get _debited_account(){
        return this.debited_account;
    }
}