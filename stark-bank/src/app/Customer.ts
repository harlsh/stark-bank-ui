import { Address } from './Address';

export class Customer{
    constructor(
        private _phoneNumber:string, 
        private _firstName:string,
        private _lastName:string,
        private _gender:string,
        private _dateOfBirth:string,
        private _nationalId:string,
        private _userId:string,
        private _password:string,
        private _address:Address
        ){

    }
    
    get phoneNumber(): string{
       return this._phoneNumber;
    }
    get firstName():string{
        return this._firstName;
    }
    get lastName(): string{
        return this._lastName;
    }
    get gender():string{
        return this._gender;
    }
    get dateOfBirth():string{
        return this._dateOfBirth;
    }
    get nationalId():string{
        return this._nationalId;
    }
    get userId():string{
        return this._userId;
    }
    get password():string{
        return this._password;
    }
    get address():Address{
        return this._address;
    }
    
}