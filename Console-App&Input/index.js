// import promptSync from "prompt-sync";

// console.log(process.argv);
// const num1 = Number(process.argv[2]);
// const oper = process.argv[3];
// const num2 = Number(process.argv[4]);
// let result

// if (Number.isNaN(num1) || Number.isNaN(num2) || oper !== "+" && oper !== "-" && oper !== "*" && oper !== "/") {
//     console.log("Invalid syntax");

// } else {

//     if (oper == "+") {
//         result = num1 + num2;

//     } else if (oper == "-") {
//         result = num1 - num2;

//     } else if (oper == "*") {
//         result = num1 * num2;

//     } else if (oper == "/") {
//         result = num1 / num2;

//     }

//     console.log(result)
// }

// const prompt = promptSync();
// let arrPrompts = [
//     { question: 'What is 2 + 2?', answer: 4 },
//     { question: 'What is the capital of France?', answer: 'paris' },
//     { question: 'What year is it?', answer: '2026' }
// ]
// let score = 0;
// for (let i = 0; i < arrPrompts.length; i
//     ++) {

//     if (arrPrompts[i].answer == prompt(`${arrPrompts[i].question}`).toLowerCase()) {
//         score += 1
//     }
// }
// console.log(`Your score is ${score}/${arrPrompts.length}`)

//___________________________________________________________________
// const readline = require("readline");

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// rl.question("What is your name? ", (name) => {
//     rl.question("What is your email? ", (email) => {
//         rl.question("What is your age? ", (age) => {
//             rl.question("What is your favorite color? ", (color) => {
//                 console.log("\nRegistration Summary:");
//                 console.log(`Name: ${name}`);
//                 console.log(`Email: ${email}`);
//                 console.log(`Age: ${age}`);
//                 console.log(`Favorite Color: ${color}`);


//                 rl.close();
//             });
//         });
//     });
// });

//______________________________________________________________________
