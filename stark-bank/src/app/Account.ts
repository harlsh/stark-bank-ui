export class Account{
    
    
    constructor(
        // private id:any,
        private account_name:string,
        private account_number:any,
        private balance:number,
        private branch_id:number,
        private customer_id:number
    ){}

    // get _id():any{
    //     return this.id;
    // }
    
    get _account_name():string{
        return this.account_name;
    }
    get _account_number():number{
        return this.account_number;
    }
    get _balance():number{
        return this.balance;
    }
    get branch_id_():number{
        return this.branch_id;
    }
    get _customer_id():number{
        return this.customer_id;
    }


}