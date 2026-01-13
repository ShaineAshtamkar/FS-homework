console.log((5 > 2) && false)
console.log(!("knife" === "sword"))
console.log((1 < 2) || (-1 > -1) || !false);      // true
console.log("");                                  // "" (empty string)

console.log((31 % 5) == "1");                     // true   (31%5 = 1, and == allows type conversion)
console.log(!!true);                               // true
console.log("5th Avenue" != "5th Avenue");        // false
console.log(52 !== "52");                         // true   (different types: number vs string)
console.log((undefined || null));                 // null   (undefined is falsy, so it returns the next value)

let a = 3
let c = 0
let b = a
b = a
c = a
b = c
a = b

let age = 5;

if (age >= 18) {
    console.log("Congratulations. You are eligible to vote")
} else {
    console.log("Sorry, You are not yet eligible to vote. You are too young")
}
//-------------------------------------------------------------
let score = 50;
let output = "Your Letter Grade is "
// Your conditional code here

// A: 90 - 100
// B: 80 - 89
// C: 70 - 79
// D: 60 - 69
// F: Below 60

if (score >= 90 && score <= 100) {
    console.log(output + 'A')
} else if (score >= 80 && score <= 89) {
    console.log(output + "B");
} else if (score >= 70 && score <= 79) {
    console.log(output + "C");
} else if (score >= 60 && score <= 69) {
    console.log(output + "D");
} else {
    console.log(output + "F");
}
//---------------------------------------------------------
let temperature = 14;
let weather = "windy";
// Your conditional code here
if (weather == "sunny") {
    if (temperature > 24) {
        console.log("Go to the beach")
    } else if (temperature >= 15 && temperature <= 24) {
        console.log("Go for a walk")
    } else if (temperature < 15) {
        console.log("Stay inside and read")
    }
}

else if (weather == "rainy") {
    console.log("Watch a movie indoors")
}
else if (weather == "cloudy") {
    if (temperature > 21) {
        console.log("Go hiking")
    } else if (temperature <= 21) {
        console.log("Visit a museum")
    }
} else {
    console.log("Unknown weather type");
}

let usernameLength = 6;
let passwordLength = 8;
let userAge = 15;
let fail = "Sorry, your account can't be created."
// Your conditional code here
if (userAge < 13) {
    console.log(`${fail} You are Younger than 18.`)
} else if (usernameLength < 5) {
    console.log(`${fail} Username must be at least 5 characters`)
} else if (passwordLength < 8) {
    console.log(`${fail} Password must be at least 8 characters`)
} else {
    console.log("Congratulations! Your account has been created succesfully")
}

let customerType = "premium";
let purchaseAmount = 150;
let dayOfWeek = 6; // 0 = Sunday, 1 = Monday, etc.
let discount = 0;
// Your conditional code here
if (customerType == "vip") {
    discount = discount + 0.2 * (purchaseAmount)
} else if (customerType == "premium") {
    if (dayOfWeek == 6 || dayOfWeek == 0) {
        discount = discount + 0.15 * (purchaseAmount)
    } else if (dayOfWeek >= 0 && dayOfWeek <= 5) {
        discount = discount + 0.1 * (purchaseAmount)
    }
} else if (customerType == "regular") {
    if (purchaseAmount > 100) {
        discount = discount + 0.1 * (purchaseAmount)
    }
    else if (purchaseAmount > 50) {
        discount = discount + 0.05 * (purchaseAmount)
    }
    else {
        discount = 0;
    }
}
console.log(discount)
let isLeapYear = false;
let year = 2000;
// Your conditional code here
// Examples: 2024 = leap, 1900 = not leap, 2000 = leap, 2023 = not leap
if (year % 4 == 0) {
    if (year % 100 == 0) {
        if (year % 400 == 0) {
            isLeapYear = true;
        }
    }
}
if (isLeapYear) {
    console.log("It's a leap year")
} else {
    console.log("It's not a leap year")
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

numbers.splice(1, 2)
console.log(numbers)
numbers[3] = 1;
console.log(numbers)
numbers.splice(numbers.length - 4, 4)
console.log(numbers)
numbers.unshift(0)
console.log(numbers)


const date = 3

const kitchen = {
    owner: "Geraldine",
    hasOven: false, // choose one
    fridge: {
        price: 500,
        works: false, // choose one
        items: [
            { name: "cheese", expiryDate: 7 },
            { name: "raddish", expiryDate: 2 },
            { name: "bread", expiryDate: 1 }
        ]
    }
}

const hasOven = kitchen.hasOven
const fworks = kitchen.fridge.works
const radName = kitchen.fridge.items[1].name
const daysExpired = date - kitchen.fridge.items[1].expiryDate
const fixingPriceFridge = kitchen.fridge.price / 2

//building msgs in parts:
const first = `${kitchen.owner}'s ${radName} expired ` +
    `${daysExpired} days ago.`
const second = fworks
    ? "Weird, considering her fridge works."
    : "Probably because her fridge doesn't work."
const third = hasOven
    ? `Luckily, she has an oven to cook the ${radName} in. `
    : `Too bad she doesn't have an oven to cook the ` +
    `${radName} in .`
const fourth = fworks
    ? ""
    : `And she'll have to pay ${fixingPriceFridge} ` +
    `to fix the fridge.`
console.log(first + " " + second + " " + third + fourth)

const names = ["Ashley", "Donovan", "Lucas"]
const ages = [23, 47, 18]
const people = []

for (let i = 0; i < names.length; i++) {
    let temp = {};
    temp["name"] = names[i];
    temp["age"] = ages[i];
    people.push(temp);
    console.log(`${names[i]} is ${ages[i]} years old `)

}

console.log(people);

// const posts = [
//     { id: 1, text: "Love this product" },
//     { id: 2, text: "This is the worst. DON'T BUY!" },
//     { id: 3, text: "So glad I found this. Bought four already!" }
// ]
// for (i = 0; i < posts.length; i++) {
//     if (posts[i].id == 2) {
//         posts.splice(i, 1);
//     }
// }
// console.log(posts)


const posts = [
    {
        id: 1,
        text: "Love this product",
        comments: []
    },
    {
        id: 2,
        text: "This is the worst. DON'T BUY!",
        comments: [
            { id: 1, text: "Idiot has no idea" },
            { id: 2, text: "Fool!" },
            { id: 3, text: "I agree!" }
        ]
    },
    {
        id: 3,
        text: "So glad I found this. Bought four already!",
        comments: []
    }
]

for (i = 0; i < posts.length; i++) {
    if (posts[i].id == 2) {
        for (let j = 0; j < posts[i].comments.length; j++)
            if (posts[i].comments[j].id == 3) {
                posts[i].comments.splice(j, 1)
            }
    }
}

console.log(posts[1].comments)

let sentence = "Words that begin with"
const dictionary = {
    "A": ["Aardvark", "Abacus", "Actually", "Atomic"],
    "B": ["Banana", "Bonkers", "Brain", "Bump"],
    "C": ["Callous", "Chain", "Coil", "Czech"]
}
letters = Object.keys(dictionary)
for (let i = 0; i < Object.keys(dictionary).length; i++) {
    console.log(`${sentence} : ${Object.keys(dictionary)[i]}`);
    for (let j = 0; j < dictionary[letters[i]].length; j++) {
        console.log(" " + dictionary[letters[i]][j])
    }

}



