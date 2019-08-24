export class Address {
    constructor(
        private _houseNumber:string, 
        private _street:string,
        private _state:string,
        private _pin:string
        ){}
    
    get houseNumber(){
        return this._houseNumber;
    }

    get street(){
        return this._street;
    }

    get state(){
        return this._state;
    }

    get pin(){
        return this._pin;
    }
}