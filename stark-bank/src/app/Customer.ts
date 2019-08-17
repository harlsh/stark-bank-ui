export class Customer{
    constructor(private _id:number,
        private _phoneNumber:string, 
        private _firstName:string,
        private _lastName:string,
        private _gender:string,
        private _dateOfBirth:string,
        private _nationalId:string,
        private _userId:string,
        private _password:string
        ){

    }
    get id():number{
        return this._id;
    }
    get phoneNumber(): string{
       return this.phoneNumber;
    }
    get firstName():string{
        return this._firstName;
    }
    get lastName(): string{
        return this.lastName;
    }
    get gender():string{
        return this.gender;
    }
    get dateOfBirth():string{
        return this.dateOfBirth;
    }
    get nationalId():string{
        return this.nationalId;
    }
    get userId():string{
        return this.userId;
    }
    get password():string{
        return this.password;
    }

}