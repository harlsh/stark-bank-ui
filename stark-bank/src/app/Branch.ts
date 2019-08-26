import { Address } from './Address';

export class Branch{
    constructor(private _id:string, private _branchName:string,  private _ifsc:string, private _address: Address){}

    get branchName(){
        return this._branchName;
    }
    get id(){
        return this._id;
    }

    get ifsc(){
        return this._ifsc;
    }

    get address(){
        return this._address;
    }
}