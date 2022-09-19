//VEHICLE CLASS 
class Vehicle {
    constructor(color, currentSpeed, maxSpeed) {
        this.color = color;
        this.currentSpeed = currentSpeed;
        this.maxSpeed = maxSpeed;
    }
    move() {
        return "moving at", this.currentSpeed
    }
    accelerate(amount) {
        this.currentSpeed += amount;
    }
}

//VEHICLE SUB CLASS 

class Motorcycle extends Vehicle {
    constructor(color, currentSpeed, maxSpeed, fuel) {
        super(color, currentSpeed, maxSpeed);
        this.fuel = fuel;
    }
    doWheelie() {
        console.log("Driving on one wheel!");
    }
}

let motor = new Motorcycle("Black", 0, 250, "gasoline"); //Instancia
console.log(motor.color);
motor.accelerate(50);
motor.move();

//NOTES
/*Inheritance is used for become a function like a class*/
/*RELACIONES= 
TIENE 1 = ROMBO
ES UN = TRIANGLE*/

class Persona {
    constructor(name, document) {
        this._name = name;
        this.document = document;
    }
    get name() {
        return `This is a test ${this._name}`
    }
    set name(name) {
        this._name = name
    }
}
class Aprendiz extends Persona {
    constructor(name, document, ficha) {
        super(name, document)
        this._ficha = ficha
    }
    get ficha() {
        return `This is the new ficha ${this._ficha}`
    }
    set name(name) {
        this._name = name
    }
}
let obj1 = new Persona('Luisa Rodriguez', 12345)
let obj2 = new Aprendiz('Juan Gonzales', 34543, 'ADSI')
console.log(obj1._name)
console.log(obj2._name)
obj1.name = 'Juan'
console.log(obj1.name)
    //get alterar parametros
    //set