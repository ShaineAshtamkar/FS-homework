// const add = function (a, b) {
//     return a + b
// }

// const calculateHyp = function (a, b) {
//     return Math.sqrt(a ** 2 + b ** 2)
// }
// const removeBugs = function (code) {
//     return code.map(c => c != "BUG")
// }

// const clearLowPriority = function (objects) {
//     return objects.find((o) => o.priority.toLowerCase() == "high")

// }

// class PictureManager {
//     constructor() {
//         this.pictureURLs = []
//     }

//     addPicture(picURL) {
//         this.pictureURLs.push(picURL)
//     }

//     removePicture(picURL) {
//         this.pictureURLs.splice(this.pictureURLs.indexOf(picURL), 1)
//     }
// }

// class ArrayManipulator {
//     manipulate(arr1, arr2) {
//         let obj = {}
//         for (let i in arr1) {
//             obj[i] = arr2[i]
//         }
//         return obj
//     }
// }
class Exercises {
    constructor() {
    }
    //should return true if n is even, false otherwise
    isEven(n) {
        return n % 2 == 0 ? true : false
    }
    //should remove at least one element from the array `arr`
    removeAtLeastOne(arr) {
        let numItemsToRemove = Math.floor(Math.random() * (arr.length - 1)) + 1
        arr.splice(0, numItemsToRemove)
        return arr
    }
    //should return a clean string without these symbols: "!", "#", ".", ",", "'"
    simplify(str) {
        let symbols = ["!", "#", ".", ",", "'"]
        return str.split("").filter(c => symbols.indexOf(c) == -1).join("")
    }

    validate(arr) {
        let countTrue = 0;
        let countFalse = 0;
        let atleastOne = arr.some(item => {
            return typeof (item) == "boolean";
        })
        if (!atleastOne) {
            return { error: "Need at least one boolean" }
        }

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] == true) {
                countTrue++;
            } else if (arr[i] == false) {
                countFalse++;
            }
        }
        if (countTrue > countFalse) {
            return true;
        } else {
            return false;
        }


    }
    add(x, y) {
        let stuff = []
        stuff.push(x, y)

    }



}

module.exports = { Exercises }
//module.exports = { add, calculateHyp, removeBugs, clearLowPriority, PictureManager, ArrayManipulator, Exercises };
