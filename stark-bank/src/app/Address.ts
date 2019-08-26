export class Address {
    constructor(
        private houseNumber:string, 
        private street:string,
        private state:string,
        private pin:string
        ){}
    
    get _houseNumber(){
        return this.houseNumber;
    }

    get _street(){
        return this.street;
    }

    get _state(){
        return this.state;
    }

    get _pin(){
        return this.pin;
    }
}