// const someModule = function () {
//     const _somethingPrivate = 3;
//     const exposePrivates = () => _somethingPrivate;

//     return {
//         exposePrivates: exposePrivates
//     };
// };

// const m = someModule()
// console.log(m.exposePrivates()) //prints 3

// class Animal {
//     constructor(name, numLegs) {
//         this.name = name
//         this.numLegs = numLegs
//         this.childern = [];
//     }
//     giveBirth(name) {
//         this.childern.push(name);
//     }

// }

// const cat = new Animal("Puss", 4)
// cat.giveBirth("Dolly")
// console.log(cat.childern)
// console.log(cat.name + " has " + cat.numLegs + " legs") //prints "Puss has 4 legs"
// const dog = new Animal("Pup", 4)
// console.log(dog.name)

// this = {}
// this.name = "Puss"
// this.numLegs = 4
// const cat = this


// class Human {
//     constructor(name, age, isFriendly) {
//         this.name = name;
//         this.age = age;
//         this.isFriendly = isFriendly
//     }
// }
// const h1 = new Human("Tom", 34, true)
// console.log(h1)
// console.log(`${h1.name}, who is ${h1.age} years old, is ${h1.isFriendly ? 'friendly' : 'not friendly'}`)

// class Vehicle {
//     static carsSold = 0;
//     constructor(x, y, speed) {
//         this.x = x;
//         this.y = y;
//         this.speed = speed;
//         Vehicle.carsSold++;
//     }

//     static getInfo() {
//         console.log("We've sold " + Vehicle.carsSold + " vehicles.");
//     }
//     static calculateMoney() {
//         const money = Vehicle.carsSold * 30000; //
//         console.log(`Made ${money} dollars.`);


//     }
// }


// const v1 = new Vehicle();
// const v2 = new Vehicle()

// Vehicle.getInfo()
// Vehicle.calculateMoney()



class Vehicle {
    constructor(x, y, speed) {
        this.x = x;
        this.y = y;
        this._speed = speed;
        this._fuel = 0;
    }

    set speed(speed) {
        if (speed < 0) {
            return console.log("Speed must be positive")
        }
        this._speed = speed
    }
    get speed() {
        return this._speed
    }
    get fuel() {

        return this._fuel

    }
    set fuel(fuel) {
        if (fuel < 0) {
            return console.log("Fuel cannot be less than 0")
        }
        else if (fuel > 150) {
            return console.log("Fuel cannot be more than 150")
        }
        this._fuel = fuel;

    }



}
const c = new Vehicle()
c.x = 3
c.y = 1
c.speed = -2 // at this point, we'll get the console log saying speed needs to be positive
console.log(c.speed) // prints undefined
c.speed = 10
console.log(c.speed)
console.log(c.fuel)
c.fuel = 10;
console.log(c.fuel)

