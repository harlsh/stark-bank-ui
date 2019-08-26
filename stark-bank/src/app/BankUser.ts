export class BankUser
{
    constructor(private _userName:string, private _password: string){}

    get userName(){
        return this._userName;
    }

    get password(){
        return this._password;
    }
}