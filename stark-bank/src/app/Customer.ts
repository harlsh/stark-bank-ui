import { Address } from './Address';

export class Customer{
    constructor(
        private phoneNumber:string, 
        private firstName:string,
        private lastName:string,
        private gender:string,
        private dateOfBirth:string,
        private nationalId:string,
        private userId:string,
        private password:string,
        private address:Address
        ){ }
    
    get _phoneNumber(): string{
       return this.phoneNumber;
    }
    get _firstName():string{
        return this.firstName;
    }
    get _lastName(): string{
        return this.lastName;
    }
    get _gender():string{
        return this.gender;
    }
    get _dateOfBirth():string{
        return this.dateOfBirth;
    }
    get _nationalId():string{
        return this.nationalId;
    }
    get _userId():string{
        return this.userId;
    }
    get _password():string{
        return this.password;
    }
    get _address():Address{
        return this.address;
    }
    
}