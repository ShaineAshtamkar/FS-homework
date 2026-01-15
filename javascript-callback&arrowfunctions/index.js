// let users = []

// const getData = function () {
//     setTimeout(function () {
//         users = [{ name: "Rick" }, { name: "Morty" }]
//         console.log("Got users")
//     }, 3000);
// }

// const displayData = function () {
//     console.log("Going to display users")
//     for (user of users) {
//         console.log(user.name)
//     }
// }

// getData()
// displayData()
// //_______________________________________________________________
// const first = function (callback) { //receive the function as a parameter
//     setTimeout(function () {
//         console.log("should be first")
//         callback() //this is the `second` function being invoked
//     }, 3000)
// }

// const second = function () {
//     console.log("should be second")
// }

// first(second) //pass the second function to the first, as an argument
//________________________________________________________________
// let users = []

// const getData = function (callback) {
//     setTimeout(function () {
//         users = [{ name: "Rick" }, { name: "Morty" }]
//         console.log("Got users")
//         callback();
//     }, 3000);
// }

// const displayData = function () {
//     console.log("Going to display: ", users)
//     for (user of users) {
//         console.log(user.name)
//     }
// }

// getData(displayData);
//_____________________________________________________________________


// setInterval(function () {
//     console.log(new Date())
// }, 1000)

//________________________________________________________________
// const greet = (name) => {
//     console.log("Hello there, " + name)
// }

// greet("Jolene") //prints "Hello there, Jolene"
// //________________________________________________________________________
// const greet = name => console.log("Hello there, " + name)

// greet("Jolene") //prints "Hello there, Jolene"
// //_____________________________________________________________________

// const square = (num) => console.log(num ** 2)
// square(4) // should print 16
//__________________________________________________________________
// const add = (x, y) => {
//     return x + y
// }

// const sum = add(1, 2)
// console.log(sum) //prints 3

//____________________________________________________________________

// getFormalTitle = (title, name) => `${title} ${name}`;

// formalTitle = getFormalTitle("Madamme", "Lellouche")
// console.log(formalTitle) //returns "Maddame Lellouche"

// //_________________________________________________________________________
// const suspenseBuilder = {
//     name: "El Mysterio",
//     displayName: function () {

//         console.log("You are going to see the name in 3 seconds...")

//         setTimeout(function () { //normal function
//             console.log("The name is: " + this.name)
//         }, 3000)

//     }
// }

// suspenseBuilder.displayName()

//________________________________________________________________________
// const suspenseBuilder = {
//     name: "El Mysterio",
//     displayName: function () {

//         console.log("You are going to see the name in 3 seconds...")

//         setTimeout(() => { //this is the change
//             console.log("The name is: " + this.name)
//         }, 3000)

//     }
// }

// suspenseBuilder.displayName()

//___________________________________________________________________

const push = function () {
    console.log("pushing it!")
}

const pull = function () {
    console.log("pulling it!")
}

const pushPull = (callback) => callback();

pushPull(push) //should print "pushing it!"
pushPull(pull) //should print "pulling it!"

//_______________________________________________________________________


const returnTime = function (time) {
    console.log('The current time is: ' + time)
}

const getTime = (callback) => {
    const time = new Date()
    callback(time)
}

getTime(returnTime)
//_______________________________________________________________

const logData = (data) => console.log(data)
const displayData = function (alertDataFunc, logDataFunc, data) {

    alertDataFunc(data);
    logDataFunc(data);
};

displayData(console.error, logData, "I like to party")
//_____________________________________________________________________

const sum = (a, b, c) => a + b + c;
console.log(sum(2, 3, 5))
//_____________________________________________________________________

const capitalize = (name) => name[0].toUpperCase() + name.slice(1).toLowerCase()

capitalize("bOb") // returns Bob
capitalize("TAYLOR") // returns Taylor
capitalize("feliSHIA") // returns Felishia
console.log(capitalize("feliSHIA"))
//_________________________________________________________________
const determineWeather = temp => {
    if (temp > 25) {
        return "hot"
    }
    return "cold"
}
const commentOnWeather = (temp) => console.log(`It's ${determineWeather(temp)}`)
commentOnWeather(30) //returns "It's hot"
commentOnWeather(22) //returns "It's cold"

//______________________________________________________________________
