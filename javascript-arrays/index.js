// let ages = [12, 41, 11, 10, 32, 27, 18, 19, 19, 14, 58, 41, 9]

// let olderThan16 = ages.filter(a => a > 16)
// console.log(olderThan16) // prints [41, 32, 27, 18, 19, 19, 58, 41]
// //_____________________________________________________________________

// let vegetables = [
//     { name: "Eggplant", color: "purple" },
//     { name: "Carrot", color: "orange" },
//     { name: "Squash", color: "orange" },
//     { name: "Tomatoe", color: "red" },
//     { name: "Onion", color: "white" },
//     { name: "Sweet Potato", color: "orange" }]

// let orangeVegetables = vegetables.filter(v => v.color == "orange")
// console.log(orangeVegetables)

// //____________________________________________________________________
// orangeVegetables.forEach(ov => console.log(ov.name))
// //______________________________________________________________________
// let people = [
//     { salary: 1300, goodPerformance: false },
//     { salary: 1500, goodPerformance: true },
//     { salary: 1200, goodPerformance: true },
//     { salary: 1700, goodPerformance: false },
//     { salary: 1600, goodPerformance: true },
// ]


// const raise300 = function (person) {
//     if (person.goodPerformance == true) {
//         person.salary += 300;
//     }
// }
// people.forEach(p => raise300(p))
// people.forEach(p => console.log(p.salary)) //should print 1300, 1800, 1500, 1700, 1900 (on separate lines)

// const updateSalary = function (person) {
//     if (person.goodPerformance) {
//         person.salary += 300
//     }
// }

// people.forEach(updateSalary) //using the named function!


// let poundWeights = [142, 180, 178, 121, 132]

// let kiloWeights = poundWeights.map(pw => Math.round(pw / 2.2))
// console.log(kiloWeights) //prints [65, 82, 81, 55, 60]

// let messagesFromDad = ["HI HONEY", "HOW WAS SCHOOL??", "DID YOU EAT TODAY?", "I CAN'T FIND THE REMOTE CONTROL"]

// let calmMessages = messagesFromDad.map(cm => cm.toLowerCase())

// console.log(calmMessages)

//_________________________________________________________________________
// let users = [
//     {
//         "name": "Leanne Graham",
//         "address": {
//             "street": "Kulas Light", "suite": "Apt. 556", "city": "Gwenborough", "zipcode": "92998-3874",
//             "geo": { "lat": "-37.3159", "lng": "81.1496" }
//         }
//     }, {
//         "name": "Ervin Howell",
//         "address": {
//             "street": "Victor Plains", "suite": "Suite 879", "city": "Wisokyburgh", "zipcode": "90566-7771",
//             "geo": { "lat": "-43.9509", "lng": "-34.4618" }
//         }
//     }
// ]

// usersnew = users.map(u => { return { name: u.name, city: u.address.city } })
// console.log(usersnew)
// //________________________________________________________________________
// let posts = [
//     {
//         id: 0, text: "I'm not here",
//         comments: [{ id: 0, text: "support that" }]
//     },
//     {
//         id: 1, text: "Find me",
//         comments: [
//             { id: 0, text: "here I am" },
//             { id: 1, text: "rock you like a hurricane" },
//             { id: 2, text: "dum dum" }]
//     },
//     {
//         id: 2, text: "Where's waldo anyway",
//         comments: [
//             { id: 0, text: "who's waldo" },
//             { id: 1, text: "he's called Effi" }]
//     },
//     {
//         id: 3, text: "Poof",
//         comments: [{ id: 0, text: "like magic" }]
//     }
// ]

// const findById = id => posts.find(p => p.id === id)
// console.log(findById(1)) // prints {id: 1, text: "Find me", comments: Array(3)}

//find the whole post with the correponding id and commentID
// const findCommentByID = (postID, commentID) => {

//     let postById = posts.find(p => p.id == postID)
//     return postById["comments"].find(cm => cm.id == commentID)
// }
// console.log(findCommentByID(1, 0))
// //___________________________________________________________________
// let ages = [31, 28, 23, 27, 25, 16, 24]
// console.log(ages.every(a => a > 18)) //returns false
// //____________________________________________________________________
// let movies = [
//     { title: "Dareangel", studio: "Marvel", year: 2023 },
//     { title: "Batterfly", studio: "Fox", year: 2021 },
//     { title: "League of Ordinary People", studio: "Blizzard", year: 2025 },
//     { title: "Thor: Ragnarok", studio: "Marvel", year: 2017 },
// ]

// if (movies.some(m => m.studio == "Marvel")) {
//     console.log("Let's go watch some movies")
// } else {
//     console.log("Let's stay home")
// }

// if (movies.every(m => m.year > 2020)) {
//     console.log("Futuristic stuff")
// } else {
//     console.log("Yawn")
// }
// ______________________________________________________________________
let prices = [12.99, 8.50, 23.75, 4.25, 16.00]

let total = prices.reduce((sum, price) => sum + price, 0)
console.log(total) // prints 65.49
//____________________________________________________________________
let scores = [87, 92, 78, 95, 88, 91]

let largenum = scores.reduce((max, num) => { if (num > max) { return num } return max }, -Infinity)
console.log(largenum)
//_____________________________________________________________________
let votes = ["pizza", "tacos", "pizza", "burgers", "pizza", "tacos", "salad"]

let voteCounts = votes.reduce((counts, vote) => {
    counts[vote] = (counts[vote] || 0) + 1
    return counts
}, {})
// Result: { pizza: 3, tacos: 2, burgers: 1, salad: 1 }

console.log(voteCounts)

// groups = arr.reduce((groups, item) => { groups[item.category] = groups[item.category] || []; groups[item.category].push(item); return groups }, {})

//_____________________________________________________________________
let countries = [
    { name: "Greece", population: 500 },
    { name: "Namibia", population: 1200 },
    { name: "Finland", population: 100 },
    { name: "Switzerland", population: 300 },
    { name: "Peru", population: 200 }
]

let smallCountries = countries.filter(c => c.population < 500).map(c => c.name)


console.log(smallCountries)
//___________________________________________________________________
let users =
    [
        {
            "id": 1,
            "name": "Leanne Graham",
            "username": "Bret",
            "email": "Sincere@april.biz",
            "address": {
                "street": "Kulas Light",
                "suite": "Apt. 556",
                "city": "Gwenborough",
                "zipcode": "92998-3874",
                "geo": {
                    "lat": "-37.3159",
                    "lng": "81.1496"
                }
            },
            "phone": "1-770-736-8031 x56442",
            "website": "hildegard.org",
            "company": {
                "name": "Romaguera-Crona",
                "catchPhrase": "Multi-layered client-server neural-net",
                "bs": "harness real-time e-markets"
            }
        },
        {
            "id": 2,
            "name": "Ervin Howell",
            "username": "Antonette",
            "email": "Shanna@melissa.tv",
            "address": {
                "street": "Victor Plains",
                "suite": "Suite 879",
                "city": "Wisokyburgh",
                "zipcode": "90566-7771",
                "geo": {
                    "lat": "-43.9509",
                    "lng": "-34.4618"
                }
            },
            "phone": "010-692-6593 x09125",
            "website": "anastasia.net",
            "company": {
                "name": "Deckow-Crist",
                "catchPhrase": "Proactive didactic contingency",
                "bs": "synergize scalable supply-chains"
            }
        },
        {
            "id": 3,
            "name": "Clementine Bauch",
            "username": "Samantha",
            "email": "Nathan@yesenia.net",
            "address": {
                "street": "Douglas Extension",
                "suite": "Suite 847",
                "city": "McKenziehaven",
                "zipcode": "59590-4157",
                "geo": {
                    "lat": "-68.6102",
                    "lng": "-47.0653"
                }
            },
            "phone": "1-463-123-4447",
            "website": "ramiro.info",
            "company": {
                "name": "Romaguera-Jacobson",
                "catchPhrase": "Face to face bifurcated interface",
                "bs": "e-enable strategic applications"
            }
        },
        {
            "id": 4,
            "name": "Patricia Lebsack",
            "username": "Karianne",
            "email": "Julianne.OConner@kory.org",
            "address": {
                "street": "Hoeger Mall",
                "suite": "Apt. 692",
                "city": "South Elvis",
                "zipcode": "53919-4257",
                "geo": {
                    "lat": "29.4572",
                    "lng": "-164.2990"
                }
            },
            "phone": "493-170-9623 x156",
            "website": "kale.biz",
            "company": {
                "name": "Robel-Corkery",
                "catchPhrase": "Multi-tiered zero tolerance productivity",
                "bs": "transition cutting-edge web services"
            }
        },
        {
            "id": 5,
            "name": "Chelsey Dietrich",
            "username": "Kamren",
            "email": "Lucio_Hettinger@annie.ca",
            "address": {
                "street": "Skiles Walks",
                "suite": "Suite 351",
                "city": "Roscoeview",
                "zipcode": "33263",
                "geo": {
                    "lat": "-31.8129",
                    "lng": "62.5342"
                }
            },
            "phone": "(254)954-1289",
            "website": "demarco.info",
            "company": {
                "name": "Keebler LLC",
                "catchPhrase": "User-centric fault-tolerant solution",
                "bs": "revolutionize end-to-end systems"
            }
        },
        {
            "id": 6,
            "name": "Mrs. Dennis Schulist",
            "username": "Leopoldo_Corkery",
            "email": "Karley_Dach@jasper.info",
            "address": {
                "street": "Norberto Crossing",
                "suite": "Apt. 950",
                "city": "South Christy",
                "zipcode": "23505-1337",
                "geo": {
                    "lat": "-71.4197",
                    "lng": "71.7478"
                }
            },
            "phone": "1-477-935-8478 x6430",
            "website": "ola.org",
            "company": {
                "name": "Considine-Lockman",
                "catchPhrase": "Synchronised bottom-line interface",
                "bs": "e-enable innovative applications"
            }
        },
        {
            "id": 7,
            "name": "Kurtis Weissnat",
            "username": "Elwyn.Skiles",
            "email": "Telly.Hoeger@billy.biz",
            "address": {
                "street": "Rex Trail",
                "suite": "Suite 280",
                "city": "Howemouth",
                "zipcode": "58804-1099",
                "geo": {
                    "lat": "24.8918",
                    "lng": "21.8984"
                }
            },
            "phone": "210.067.6132",
            "website": "elvis.io",
            "company": {
                "name": "Johns Group",
                "catchPhrase": "Configurable multimedia task-force",
                "bs": "generate enterprise e-tailers"
            }
        },
        {
            "id": 8,
            "name": "Nicholas Runolfsdottir V",
            "username": "Maxime_Nienow",
            "email": "Sherwood@rosamond.me",
            "address": {
                "street": "Ellsworth Summit",
                "suite": "Suite 729",
                "city": "Aliyaview",
                "zipcode": "45169",
                "geo": {
                    "lat": "-14.3990",
                    "lng": "-120.7677"
                }
            },
            "phone": "586.493.6943 x140",
            "website": "jacynthe.com",
            "company": {
                "name": "Abernathy Group",
                "catchPhrase": "Implemented secondary concept",
                "bs": "e-enable extensible e-tailers"
            }
        },
        {
            "id": 9,
            "name": "Glenna Reichert",
            "username": "Delphine",
            "email": "Chaim_McDermott@dana.io",
            "address": {
                "street": "Dayna Park",
                "suite": "Suite 449",
                "city": "Bartholomebury",
                "zipcode": "76495-3109",
                "geo": {
                    "lat": "24.6463",
                    "lng": "-168.8889"
                }
            },
            "phone": "(775)976-6794 x41206",
            "website": "conrad.com",
            "company": {
                "name": "Yost and Sons",
                "catchPhrase": "Switchable contextually-based project",
                "bs": "aggregate real-time technologies"
            }
        },
        {
            "id": 10,
            "name": "Clementina DuBuque",
            "username": "Moriah.Stanton",
            "email": "Rey.Padberg@karina.biz",
            "address": {
                "street": "Kattie Turnpike",
                "suite": "Suite 198",
                "city": "Lebsackbury",
                "zipcode": "31428-2261",
                "geo": {
                    "lat": "-38.2386",
                    "lng": "57.2232"
                }
            },
            "phone": "024-648-3804",
            "website": "ambrose.net",
            "company": {
                "name": "Hoeger LLC",
                "catchPhrase": "Centralized empowering task-force",
                "bs": "target end-to-end models"
            }
        }
    ]


// console.log(users)

// usersshort = users.map(u => { return { email: u.email, companyName: u.company.name } })
// console.log(usersshort)

const usersWithZip5 = users.filter(u => u.address.zipcode[0] == '5')
console.log(usersWithZip5)

const usersStartsC = users.filter(u => u.name[0] == 'C')
    .map(u => { return { name: u.name } })

console.log(usersStartsC)

let allInSouthChristy = users.every(u => u.address.city == "South Christy")
console.log(allInSouthChristy)

let userWithSuite = (suite) => users.find(u => u.address.suite == "Apt. 950")
console.log(userWithSuite().company.name)

const namedFunc = (user) => users.forEach(u => console.log(`${u.name} lives in ${u.address.city}, and owns the company ${u.company.name}`))
namedFunc()
//____________________________________________________________________
let inventory = [
    { name: "Laptop", price: 899.99, quantity: 5 },
    { name: "Mouse", price: 24.99, quantity: 12 },
    { name: "Keyboard", price: 79.99, quantity: 8 },
    { name: "Monitor", price: 249.99, quantity: 3 },
    { name: "Headphones", price: 149.99, quantity: 6 }
]
let sumPrice = (inventory) => inventory.reduce((sum, item) => sum + item.price * item.quantity, 0)
console.log(sumPrice(inventory))
//______________________________________________________________________
let studentScores = [92, 87, 76, 95, 88, 72, 91, 83, 79, 96, 85, 74, 89, 93, 81]

countLetterGrade = (studentScores) => {
    return studentScores.reduce((letterGradeCount, score) => {
        if (score >= 90 && score <= 100) {
            letterGradeCount["A"] = letterGradeCount["A"] + 1;
        } else if (score >= 80 && score <= 89) {
            letterGradeCount["B"] = letterGradeCount["B"] + 1;
        } else if (score >= 70 && score <= 79) {
            letterGradeCount["C"] = letterGradeCount["C"] + 1;
        } else if (score < 70) {
            letterGradeCount["F"] = letterGradeCount["F"] + 1;
        }
        return letterGradeCount
    }, { A: 0, B: 0, C: 0, F: 0 }
    )
}

console.log(countLetterGrade(studentScores))
//___________________________________________________________________________________________________
let cartItems = [
    { name: "T-shirt", price: 19.99, category: "clothing", quantity: 2 },
    { name: "Laptop", price: 1299.99, category: "electronics", quantity: 1 },
    { name: "Coffee Beans", price: 12.99, category: "food", quantity: 3 },
    { name: "Headphones", price: 89.99, category: "electronics", quantity: 1 },
    { name: "Jeans", price: 59.99, category: "clothing", quantity: 1 }
]

let taxRates = {
    clothing: 0.08,    // 8% tax
    electronics: 0.10, // 10% tax  
    food: 0.05        // 5% tax
}
let totalPrice = (cartItems, taxRates) => {
    return cartItems.reduce((total, item) => total + item["price"] * item["quantity"] * (1 + taxRates[item["category"]]), 0)

}
console.log(totalPrice(cartItems, taxRates))

//_________________________________________________________________________________________________
const people = [
    { id: 1, name: "Humbert", money: 499, hasAC: false },
    { id: 2, name: "Bellatrix", money: 499, hasAC: true },
    { id: 3, name: "Mola", money: 720, hasAC: false }
]

let isCool = function (humbert) {
    return (humbert.money > 500 || humbert.hasAC)
}

let print = (p) => console.log(p)

people.filter(isCool).map(p => p.name).forEach(print)

console.log(people.find(p.id === 2))

// //________________________________________________________________________________________________
// arr.forEach(x => console.log(x))     // uses x, ignores return
// arr.map(x => x * 2)                  // returns new array
// arr.filter(x => x > 3)               // returns new array
// arr.find(x => x > 3)                 // returns one element
// arr.some(x => x > 3)                 // returns boolean
// arr.every(x => x > 3)                // returns boolean
// arr.reduce((sum, x) => sum + x, 0)   // returns one value

// arr.forEach((x, i, a) => console.log(x))
// // callback receives: (element x, index i, array a)
// // return ignored

// arr.map((x, i, a) => x * 2)
// // callback receives: (element x, index i, array a)
// // return: NEW value for that position
// // returns: new array

// arr.filter((x, i, a) => x > 3)
// // callback receives: (element x, index i, array a)
// // return: true/false (keep it?)
// // returns: new array (subset)

// arr.find((x, i, a) => x > 3)
// // callback receives: (element x, index i, array a)
// // return: true/false (match?)
// // returns: first matching element (or undefined)

// arr.some((x, i, a) => x > 3)
// // callback receives: (element x, index i, array a)
// // return: true/false
// // returns: true if ANY element returns true

// arr.every((x, i, a) => x > 3)
// // callback receives: (element x, index i, array a)
// // return: true/false
// // returns: true if ALL elements return true

// arr.reduce((sum, x, i, a) => sum + x, 0)
// // callback receives: (accumulator sum, element x, index i, array a)
// // return: new accumulator
// // returns: one final value
