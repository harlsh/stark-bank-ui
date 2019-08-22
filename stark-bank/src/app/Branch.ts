import { Address } from './Address';

export class Branch{
    constructor(private _ifsc:string, private _address: Address){}

    get ifsc(){
        return this._ifsc;
    }

    get address(){
        return this._address;
    }
}