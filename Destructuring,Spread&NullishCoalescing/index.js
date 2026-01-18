// let facts = { numPlanets: 8, yearNeptuneDiscovered: 1846 };
// let { numPlanets, yearNeptuneDiscovered } = facts;

// console.log(numPlanets); // ?
// console.log(yearNeptuneDiscovered); // ?

//what it means
//let numPlanets = facts.numPlanets;                 // 8
//let yearNeptuneDiscovered = facts.yearNeptuneDiscovered; // 1846

let planetFacts = {
    numPlanets: 8,
    yearNeptuneDiscovered: 1846,
    yearMarsDiscovered: 1659
};

let { numPlanets, ...discoveryYears } = planetFacts;

console.log(discoveryYears); // ?
//what it means
//numPlanets = planetFacts.numPlanets

//discoveryYears = { yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659 }

// function getUserData({ firstName, favoriteColor = "green" }) {
//     return `Your name is ${firstName} and you like ${favoriteColor}`;
// }

// console.log(getUserData({ firstName: "Alejandro", favoriteColor: "purple" })) // ?
// console.log(getUserData({ firstName: "Melissa" })) // ?
// console.log(getUserData({})) // ?
// let [first, second, third] = ["Maya", "Marisa", "Chi"];

// console.log(first); // ?
// console.log(second); // ?
// console.log(third); // ?


// let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
//     "Raindrops on roses",
//     "whiskers on kittens",
//     "Bright copper kettles",
//     "warm woolen mittens",
//     "Brown paper packages tied up with strings"
// ]

// console.log(raindrops); // ?
// console.log(whiskers); // ?
// console.log(aFewOfMyFavoriteThings); // ?

// let meatArr = ["beef", "chicken"];
// let vegetableArr = ["rabbit", "carrots", "potatoes", "lettuce"];

// meatArr = [...meatArr, vegetableArr[0]];
// vegetableArr = [...vegetableArr].splice(1);

// console.log(meatArr);
// console.log(vegetableArr);

// var firstPiece = { id: 101, name: 'Ofri' }

// var seoncdPiece = { country: 'Israel' }

// var onePiece = { ...firstPiece, ...seoncdPiece }
// console.log(onePiece)

//

//let name = null;
//let text = "missing";
//let result = name ?? text;
//Description
//The ?? operator returns the right operand when the left operand is nullish (null or undefined), otherwise it returns the left operand.

let employeesArr = [
    { name: "Joey", id: 1, age: 26 },
    { name: "Lily", id: null, age: 24 },
    { name: "Alice", id: 7, age: null },
    { name: "Sam", id: 8, age: 24 },
    { name: "Ray", id: null, age: null }
]

// arr.find((x, i, a) => x > 3)
// // callback receives: (element x, index i, array a)
// // return: true/false (match?)
// // returns: first matching element (or undefined)

// arr.find(x => x > 3)        


let missArr = []
for (let i = 0; i < employeesArr.length; i++) {
    let idMissing = (employeesArr[i].id ?? "Missing") == "Missing"
    let ageMissing = (employeesArr[i].age ?? "Missing") == "Missing"
    if (idMissing || ageMissing) {
        missArr.push(employeesArr[i])
    }
}

console.log(missArr)













