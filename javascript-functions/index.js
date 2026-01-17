greet() //works without a problem
// greetExpression() //throws an error

function greet() {
    console.log("Hello there, from the wild, wild West")
}

const greetExpression = function () {
    console.log("Uh oh")
}

const person = {
    name: "Julius",
    speak: function () {
        console.log("Et tu, Brutus?")
    },
    eat: function (food) {
        console.log(food)
    }
}
console.log(person.name) //you know what this will do

person.speak() //and this? Try it out!
person.eat("cake")


//excercises

function isEven(number) {
    if (number % 2 == 0) {
        return true
    } else { return false }
}

console.log(isEven(10))
console.log(isEven(4))
console.log(isEven(5))

function oddnums(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 == 0) {
            console.log(numbers[i])
        }
    }
}
oddnums([2, 3, 7, 8, 10])


function checkExists(integers, num) {
    for (let i = 0; i < integers.length; i++) {
        if (integers[i] == num) {
            return true;

        }

    }
    return false;
}
console.log(checkExists([1, 4, 3, 6, 7], 8))



const calculator = {
    add: function (a, b) {
        return a + b;
    },
    subtract: function (a, b) {
        return a - b;
    }
}
const result1 = calculator.add(20, 1)
const result2 = calculator.subtract(30, 9)

console.log(calculator.add(result1, result2)) //should print 42



const turnToKing = function (name, money) {
    name = name.toUpperCase()
    money = increaseByNameLength(money, name)
    name = makeRegal(name)

    console.log(name + " has " + money + " gold coins")
}

turnToKing("martin luther", 100) // should print "His Royal Highness, MARTIN LUTHER has 1300 gold coins"

function makeRegal(name) {
    return `His Royal Highness, ${name}`
}
function increaseByNameLength(money, name) {
    money = money + money * name.length
    return money;
}

function armStrong(number) {
    let lastDigit = number % 10;
    let midDigit = Math.floor(number / 10) % 10;
    let firstDigit = Math.floor(number / 100) % 10;
    if ((lastDigit) ** 3 + (midDigit) ** 3 + (firstDigit) ** 3 == number) {
        return true;
    }
    return false;
}

armStrong(153)
for (let i = 1; i < 10; i++)
    for (let j = 0; j < 10; j++)
        for (let k = 0; k < 10; k++) {
            num = `${i}${j}${k}`
            if (armStrong(num)) {
                console.log(num)
            }
        }
const people_info = [
    {
        name: "guido",
        profession: "bungalow builder",
        age: 17,
        country: "canaland",
        city: "sydurn",
        catchphrase: "what a piece of wood!"
    },
    {
        name: "petra",
        profession: "jet plane mechanic",
        age: 31,
        country: "greenmark",
        city: "bostork",
        catchphrase: "that's my engine, bub"
    },
    {
        name: "damian",
        profession: "nursery assistant",
        age: 72,
        country: "zimbia",
        city: "bekyo",
        catchphrase: "with great responsibility comes great power"
    }
]
const capitalize = function (str) {
    let capitalizedStr = ""
    capitalizedStr += str[0].toUpperCase()      // first letter, capitalized
    capitalizedStr += str.slice(1)              // rest of the string
    return capitalizedStr
}
function getAge(age) {
    if (age < 21) {
        return "an underage";
    }
    else if (age > 55) {
        return "55+";
    } else {
        return age;
    }
}

function getCatchPhrase(str) {
    str = capitalize(str);
    return `"${str}"`
}
const getSummary = function (person) {
    let summary = ""
    summary += capitalize(person.name)
    summary += ` is ${getAge(person.age)} ` //Yes - you can put a function call inside the tick quotes!
    summary += `${capitalize(person.profession)} `//call function for profession
    summary += `from ${capitalize(person.city)}, ${capitalize(person.country)}. `//call function for country + city
    summary += `${capitalize(person.name)} loves to say ${getCatchPhrase(person.catchphrase)}. `//call function for catchphrase
    return summary;
}
for (let i = 0; i < people_info.length; i++) {
    console.log(getSummary(people_info[i]))
}


const story = "In the beginning there was light. Then there were wolves. Finally there was a big fire. Ultimately, Shelob the wolf-master put out the fire with her feet. But until then, the fire caused one heck of a lot of damage."
const specialChars = [",", ".", "'", '"', "?", "!", ";"]
const wordCounts = {}
function cleanText(sentence) {
    for (let i = 0; i < specialChars.length; i++) {
        sentence = sentence.split(`${specialChars[i]}`).join(" ")
    }

    let words = sentence.split(" ")
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].toLowerCase()
    }
    return words;

}


function addToCounter(word) {
    wordCounts[word] = (wordCounts[word] || 0) + 1;

}


function countWords(sentence) {
    words = cleanText(sentence);
    for (i = 0; i < words.length; i++) {
        addToCounter(words[i]);
    }
    console.log(wordCounts);
}

countWords(story);




