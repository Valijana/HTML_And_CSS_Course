
class Vehicle {

    constructor(color, currentSpeed, maxSpeedund) {
        this.color = color;
        this.currentSpeed = currentSpeed;
        this.maxSpeed = maxSpeed;
    }
    move() {
        console.log("Moving at", this.currentSpeed);
    }
    accelerate(amount) {
        this.currentSpeed += amount;
    }
}
class Motorcycle {

    constructor(color, currentSpeed, maxSpeed, fuel) {
        this.color = color;
        this.currentSpeed = currentSpeed;
        this.maxSpeed = maxSpeed;
        this.fuel = fuel;
    }
    doWheelie(){
    comsole.log("Driving on one wheel!")
    }
}
let motor = new Motorcycle("Black", 0, 250, "gasoline");

console.log(motor.color);
console.log(motor.maxSpeed);


