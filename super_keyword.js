class Vehicle{
    constructor(){
        console.log('The base Vehicle');
    }
}
class Tesla extends Vehicle{
    constructor(){
        super();
        console.log('The class Vehicle');
    }
}
let model = new Tesla();
