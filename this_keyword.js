class Vehicle{
    constructor()
    {
        this.kindof = 'Car';
    }
}
class Tesla extends Vehicle{
  constructor(){
      super();
      this.kindof = 'Electric '+ this.kindof; 
  }
}
 let car = new Tesla();
 console.log(car.kindof);