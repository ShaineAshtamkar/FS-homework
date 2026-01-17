const person = {
    hungry: true,

    feed: function () {
        if (this.hungry) {
            this.hungry = false;
            console.log('Im no longer hungry!')
        }
    }
}

person.feed() //should log "I'm no longer hungry"
//______________________________________________________________________________________________________
const pump = function (amount) {
    this.liters += amount;
    console.log('You put ' + amount + ' liters in ' + this.name);
};

const garage = {
    car1: {
        name: 'Audi',
        liters: 3,
        fillTank: pump
    },
    car2: {
        name: 'Mercedes',
        liters: 1,
        fillTank: pump
    }
};

garage.car1.fillTank(2);
console.log('Audi should have 5 liters: ', garage.car1.liters);

garage.car2.fillTank(30);
console.log('Mercedes should have 31 liters: ', garage.car2.liters);
//_______________________________________________________________________________________________________
const pumpFuel = function (plane) {
    plane.fuel += 1;
};

const airplane = {
    fly: function () {
        if (this.fuel < 2) {
            return 'on the ground!';
        }
        else {
            return 'flying!';
        }
    },
    fuel: 0
};

console.log('The plane should not be able to fly (yet): ' + airplane.fly());

pumpFuel(airplane);
console.log('The plane should STILL not be able to fly: ' + airplane.fly());

pumpFuel(airplane);
console.log('Take off! ' + airplane.fly());
//______________________________________________________________________________________________________
const tipJar = {
    coinCount: 20,
    tip: function () {
        this.coinCount += 1;
    },
    stealCoins: function (coins) {
        this.coinCount -= coins;
    }
};

tipJar.tip();
console.log('Tip jar should have 21 coins: ' + tipJar.coinCount);

tipJar.stealCoins(3);
console.log('Tip jar should have 18 coins: ' + tipJar.coinCount);

tipJar.stealCoins(10);
console.log('Tip jar should have 8 coins: ' + tipJar.coinCount);

//_______________________________________________________________________________________________________
// const revealSecret = function (person) {
//     return person.secret;
// };

// const shoutIt = function (person, func) {
//     revealItAll = func;
//     const result = revealItAll(person);
//     console.log(person.name + " said: " + result);
// };

// const avi = {
//     name: "Avi",
//     secret: "Im scared of snakes!"
// };

// const narkis = {
//     name: "Narkis",
//     secret: "I don't have secrets because I'm zen like that."
// };

// shoutIt(avi, revealSecret);
// shoutIt(narkis, revealSecret);

// intended solution:
const revealSecret = function () {
    return this.secret;
};

const shoutIt = function (person, func) {
    person.revealItAll = func;
    const result = person.revealItAll();
    console.log(person.name + " said: " + result);
};

const avi = {
    name: "Avi",
    secret: "Im scared of snakes!"
};

const narkis = {
    name: "Narkis",
    secret: "I don't have secrets because I'm zen like that."
};

shoutIt(avi, revealSecret);
shoutIt(narkis, revealSecret);

//_________________________________________________________________________________________________
const coffeeShop = {
    beans: 40,
    money: 2000,

    drinkRequirements: {
        latte: { beanRequirement: 10, price: 5 },
        americano: { beanRequirement: 5, price: 5 },
        doubleShot: { beanRequirement: 15, price: 5 },
        frenchPress: { beanRequirement: 12, price: 5 }
    },
    buyBeans: function (numBeans) {
        beanPrice = 5;
        this.money -= beanPrice * numBeans;
    }
    ,

    makeDrink: function (drinkType) {
        // TODO: Finish this method
        if (this.drinkRequirements[drinkType] != undefined) {
            if (this.beans > this.drinkRequirements[drinkType]) {
                this.beans -= this.drinkRequirements[drinkType];
                console.log(`Please have your ${drinkType}`)
            }
            else { console.log("Sorry, we're all out of beans") }
        } else {
            console.log(`Sorry, we don't make ${drinkType}`)
        }

    },
    buyDrink: function (drinkType) {
        this.money += this.drinkRequirements[drinkType].price
    }
}

coffeeShop.makeDrink("latte");
coffeeShop.makeDrink("americano");
coffeeShop.makeDrink("filtered"); //should console "Sorry, we don't make filtered"
coffeeShop.makeDrink("doubleShot");
coffeeShop.makeDrink("frenchPress"); //should console "Sorry, we're all out of beans"
coffeeShop.buyBeans(5);
console.log(coffeeShop.money);
coffeeShop.buyDrink("latte");
console.log(coffeeShop.money);



//___________________________________________________________________________________________________


