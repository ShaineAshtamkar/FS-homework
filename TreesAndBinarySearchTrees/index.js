// class Node {
//     constructor(value) {
//         this.value = value;
//         this.leftChild = null;
//         this.rightChild = null;
//     }
//     insertLeft(value) {
//         if (!this.leftChild) {
//             this.leftChild = new Node(value);
//         } else {
//             let newNode = new Node(value);
//             newNode.leftChild = this.leftChild;
//             this.leftChild = newNode
//         }
//     }

//     insertRight(value) {
//         if (!this.rightChild) {
//             this.rightChild = new Node(value);
//         } else {
//             let newNode = new Node(value);
//             newNode.rightChild = this.rightChild;
//             this.rightChild = newNode
//         }
//     }
// }


// const H = new Node("H");
// H.insertLeft("E");
// H.insertRight("S");
// E = H.leftChild;
// S = H.rightChild;
// E.insertRight("G");
// S.insertRight('Y');
// S.insertLeft('L');
// L = S.leftChild;
// L.insertLeft('I');
// console.log(H)

class BSNode {
    constructor(value) {
        this.value = value;
        this.leftChild;
        this.rightChild;
    }

    insertNode(newVal) {
        if (!this.value) {
            this.value = newVal
        }
        else if (newVal > this.value && this.rightChild) {
            this.rightChild.insertNode(newVal)
        }
        else if (newVal <= this.value && this.leftChild) {
            this.leftChild.insertNode(newVal)
        }
        else if (newVal <= this.value) {
            this.leftChild = new BSNode(newVal)
        }
        else {
            this.rightChild = new BSNode(newVal)
        }
    }
    findNode(val) {
        if (this.value == val) {
            return true;
        }
        else if (val > this.value && this.rightChild) {
            return this.rightChild.findNode(val)
        }
        else if (val <= this.value && this.leftChild) {
            return this.leftChild.findNode(val)
        }
        else if (val <= this.value) {
            return false;
        }
        else {
            return false;
        }
    }
    findCommonParent(val1, val2) {
        if (this.value == val1 || this.value == val2) {
            return false;
        }

        if (this.rightChild && this.rightChild.value == val1 || this.rightChild && this.rightChild.value == val2) {
            return this.value;
        }
        if (this.leftChild && this.leftChild.value == val1 || this.leftChild && this.leftChild.value == val2) {
            return this.value;
        }
        if (val1 > this.value && val2 < this.value) {
            return this.value;
        }
        if (val1 < this.value && val2 > this.value) {
            return this.value;
        }
        if (val1 > this.value && val2 > this.value) {
            return this.rightChild.findCommonParent(val1, val2)
        }
        if (val1 < this.value && val2 < this.value) {
            return this.leftChild.findCommonParent(val1, val2)
        }

        return false;
    }
}


// const H = new BSNode("H");
// const letters = ["E", "S", "G", "L", "Y", "I"]
// letters.forEach(l => H.insertNode(l))

// console.log(H)

// console.log(H.findNode("F"))

// console.log(H.findNode("H")) // should print true
// console.log(H.findNode("G")) // should print true
// console.log(H.findNode("Z")) // should print false
// console.log(H.findNode("F")) // should print false
// console.log(H.findNode("y")) // should print false (lowercase y != "Y")
// //_________________________________________________________________________

//insert nodes from array
// root node of your BST (example)
const bsTree = new BSNode();  // or whatever your root is

// ... after you build/insert all nodes into the tree ...

const letters = ["J", "H", "R", "E", "S", "P", "G", "B", "L", "Y", "I"]
letters.forEach(l => bsTree.insertNode(l))


console.log(bsTree.findCommonParent("B", "I")); // should return "H"
console.log(bsTree.findCommonParent("B", "G")); // should return "E"
console.log(bsTree.findCommonParent("B", "L")); // should return "J"
console.log(bsTree.findCommonParent("L", "Y")); // should return "R"
console.log(bsTree.findCommonParent("E", "H")); // should return "J"
