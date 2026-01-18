class UniqueArray {
    constructor() {
        this.uniqueStuff = []
        this.uniqueLength = 0
        this.lookup = {}
    }

    // add(item) {
    //     for (let i = 0; i < this.uniqueStuff.length; i++) {
    //         if (this.uniqueStuff[i] == item) {
    //             console.log("Item already exists.")
    //             return;
    //         }
    //     }
    //     this.uniqueStuff[this.uniqueLength] = item;
    //     this.uniqueLength++

    // }
    // add(item) {
    //     if (this.lookup[item]) {
    //         return
    //     } else {
    //         this.lookup[item] = true;
    //         this.uniqueStuff[this.uniqueLength] = item;
    //         this.uniqueLength++;
    //     }
    // }
    add(item) {
        if (this.exists(item)) {
            console.log("Item already exists.")
            return
        }
        this.uniqueStuff[this.uniqueLength] = item
        this.uniqueLength++
    }
    showAll() {
        console.log(this.uniqueStuff)
    }
    // exists(item) {
    //     for (let i = 0; i < this.uniqueStuff.length; i++) {
    //         if (this.uniqueStuff[i] == item) {
    //             return true

    //         }
    //     }
    //     return false
    // }
    // exists(item) {
    //     return this.lookup[item] == true;
    // }


    exists(item) {
        for (let i = 0; i < this.uniqueStuff.length; i++) {
            if (this.uniqueStuff[i] === item) {
                return true
            }
        }
        return false
    }


    // get(index) {
    //    
    //         return this.uniqueStuff[index];
    //     }
    //    
    // 
    get(index) {
        return this.uniqueStuff[index];
    }

}

const uniqueStuff = new UniqueArray()
uniqueStuff.add("toy")
console.log(uniqueStuff.uniqueStuff)
uniqueStuff.showAll() //prints ["toy"]
uniqueStuff.add("toy")
uniqueStuff.showAll() //prints ["toy"]
console.log(uniqueStuff.exists("toy")) //returns true
uniqueStuff.add("poster")
uniqueStuff.add("hydrogen")
console.log(uniqueStuff.get(2)) //prints "hydrogen"
console.log(uniqueStuff.exists(4))

// const letters = new Set(["a", "b", "c"]);


// Create a Set
const letters = new Set();

// Add Values to the Set
letters.add("a");
letters.add("b");
letters.add("c");
console.log(letters)



function add(num) {

    return add2(num2){
        sum = num + num2;
        return sum;
    }


}
console.log(add(5)(2))
