// const mathOperations = function () {
//     const add = function (x, y) {
//         return x + y
//     }
//     return add
// }
// const math = mathOperations()
// console.log(math(1, 2))

// //________________________________________________

// const foo = function () {
//     const x = 1

//     const bar = function () {
//         console.log(x) //notice this inner function using the outer function's variable
//     }

//     return bar
// }

// const baz = foo() //out here, x doesn't exist
// baz() //but when we invoke baz, we're printing x!
// //___________________________________________________
// const setCounter = function (num) {
//     let counter = 0

//     const count = function () {
//         counter += num;
//         console.log(counter)
//     }

//     return count
// }

// const increment = setCounter(2)
// increment()
// increment()
// console.log(counter)
// //_______________________________________________________________________________________
// function family() {
//     let members = [];
//     const birth = function (name) {
//         members.push(name)
//         console.log(members)
//     }
//     return birth;
// }
// giveBirth = family();
// giveBirth('John');
// giveBirth('Daisy');

// //________________________________________________________________________________
// const mathOperations = function () {
//     const add = function (x, y) {
//         return x + y;
//     }

//     const subtract = function (x, y) {
//         return x - y;
//     }

//     const multiply = function (x, y) {
//         return x * y;
//     }

//     const divide = function (x, y) {
//         return x / y;
//     }
// }
//______________________________________________________________________________________
const mathOperations = require("./math.js");

const ops = mathOperations();
console.log(ops.add(13, 19))
console.log(ops.mult(1.75, 24))
console.log(ops.mult(2, ops.div(36, 6)))
console.log(ops.add(2, 3))
//___________________________________________________________________________________
const UsersModule = function () {
    const _users = ['Aaron', 'Avi'];

    const addUser = function (user) {
        _users.push(user)
    }

    const listUsers = function () {
        for (let user of _users) {
            console.log(user)
        }
    }

    return {
        addUser: addUser,
        listUsers: listUsers
    }
}

const usersModule = UsersModule()

usersModule.addUser('Narkis')
usersModule.addUser('ChinChan')
usersModule.addUser('Pou')
usersModule.listUsers()
// console.log(userModule.users)

//_______________________________________________________________________________________
const StringFormatter = function () {
    const capitalizeFirst = function (text) {
        let lower = text.toLowerCase()
        let result = lower[0].toUpperCase() + lower.slice(1)
        return result;
    }
    const toSkewerCase = function (text) {
        let result = text.split(" ").join('-')
        return result;
    }
    return {
        capitalizeFirst, toSkewerCase
    }
}


const formatter = StringFormatter()

console.log(formatter.capitalizeFirst("dorothy")) //should return Dorothy
console.log(formatter.toSkewerCase("blue box")) //should return blue-box
//__________________________________________________________________________________
const Bank = function () {
    let money = 500;
    const depositCash = function (cash) {
        money += cash;
        console.log(`${cash} deposited`)
    }
    const checkBalance = function () {
        console.log(money)
    }

    return { deposit: depositCash, showBalance: checkBalance }
}


const bank = Bank()


bank.deposit(200)
bank.deposit(250)
bank.showBalance() //should print 950

//___________________________________________________________________________________
const SongsManager = function () {
    const songs = {

    }

    const addSong = function (name, url) {
        let urlSplit = url.split("/")
        let urlNew = urlSplit[urlSplit.length - 1]
        songs[name] = urlNew;
        console.log("Song added")

    }
    const getSong = function (name) {
        return `https://www.youtube.com/${songs[name]}`
    }

    const songList = function () {
        console.log(songs)
    }
    return { addSong, songList, getSong };

}



const songsManager = SongsManager()
songsManager.addSong("sax", "https://www.youtube.com/watch?v=3JZ4pnNtyxQ")
songsManager.addSong("how long", "https://www.youtube.com/watch?v=CwfoyVa980U")
songsManager.addSong("ain't me", "https://www.youtube.com/watch?v=D5drYkLiLI8")
songsManager.songList()
console.log(songsManager.getSong("sax")) // should print https://www.youtube.com/watch?v=3JZ4pnNtyxQ

