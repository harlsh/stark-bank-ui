export class Account{
    
    
    constructor(
        // private id:any,
        private accountName:string,
        private accountNumber:any,
        private balance:any,
        // private branch_id:number,
        // private customer_id:number
    ){}

    // get _id():any{
    //     return this.id;
    // }
    
    get _accountName():string{
        return this.accountName;
    }
    get _accountNumber():number{
        return this.accountNumber;
    }
    get _balance():any{
        return this.balance;
    }
    // get branch_id_():number{
    //     return this.branch_id;
    // }
    // get _customer_id():number{
    //     return this.customer_id;
    // }


}