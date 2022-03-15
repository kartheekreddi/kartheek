class Vehicle {
    constructor(color){
        console.log('This car is '+color+ ' in color');
    }
}
class Tesla extends Vehicle{
}
let model3  = new Tesla('Blue');
