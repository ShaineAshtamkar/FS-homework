// const getRandomWord = function (callback) {
//     let words = ['Bonanza', 'Elusive', 'Hindrance', 'Astute', 'Polaroid', 'Phonic', 'Yonder']
//     setTimeout(() => {
//         callback(words[Math.floor(Math.random() * words.length)])
//     }, 1000);
// }

// const getSynonyms = function (word, callback) {
//     let thesauraus = {
//         'Absolute': ['Definitive', 'Certain', 'Sure', 'Unequivocal'],
//         'Astute': ['Sharp', 'Poignant', 'Clever'],
//         'Azure': ['Blue', 'Cyan', 'Sky-blue'],
//         'Bright': ['Luminous', 'Brilliant'],
//         'Bonanza': ['Plethora', 'Smorgasboard', 'Copious', 'Plenty'],
//         'Elusive': ['Slick', 'Slippery', 'Ethereal', 'Loose'],
//         'Erode': ['Destroy', 'Wear out', 'Tarnish'],
//         'Hindrance': ['Bother', 'Disturbance', 'Problematic'],
//         'Phonic': ['Soundful'],
//         'Ploy': ['Plan', 'Ruse'],
//         'Polaroid': ['Photograph'],
//         'Yap': ['Bark', 'Blab', 'Chatter'],
//         'Yonder': ['There', 'Away', 'Far', 'Afar']
//     }

//     setTimeout(() => {
//         callback(thesauraus[word])
//     }, 1000)
// }

// const getSentiment = function (word, callback) {
//     let wordSentiment = {
//         'Definitive': 1,
//         'Sharp': 1,
//         'Blue': 0,
//         'Luminous': 1,
//         'Plethora': 1,
//         'Slick': -1,
//         'Destroy': -1,
//         'Bother': -1,
//         'Soundful': 0,
//         'Plan': 0,
//         'Photograph': 0,
//         'Bark': -1,
//         'There': -1
//     }
//     setTimeout(() => {
//         callback(JSON.stringify(wordSentiment[word]))
//     }, 1000)
// }

// const getSentimentDescription = function (sentiment) {
//     return sentiment == "1" ? "Positive" : sentiment == "-1" ? "Negative" : "Neutral"
// }

// getRandomWord((randomWord) => {
//     console.log(randomWord)
//     getSynonyms(randomWord, (synonyms) => {
//         console.log(synonyms)
//         firstSynonymn = synonyms[0];
//         getSentiment(firstSynonymn, (sentiment) => {
//             console.log(sentiment)
//             sentiment = getSentimentDescription(sentiment)
//             console.log(`The word ${randomWord} has a synonym ${firstSynonymn} which has a ${sentiment} sentiment.
// `)
//         })
//     })

// });


// const getRandomWord = function () {
//     let words = ['Bonanza', 'Elusive', 'Hindrance', 'Astute', 'Polaroid', 'Phonic', 'Yonder']
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(words[Math.floor(Math.random() * words.length)])
//         }, 1000);
//     })
// }

// const getSynonyms = function (word) {
//     let thesauraus = {
//         'Absolute': ['Definitive', 'Certain', 'Sure', 'Unequivocal'],
//         'Astute': ['Sharp', 'Poignant', 'Clever'],
//         'Azure': ['Blue', 'Cyan', 'Sky-blue'],
//         'Bright': ['Luminous', 'Brilliant'],
//         'Bonanza': ['Plethora', 'Smorgasboard', 'Copious', 'Plenty'],
//         'Elusive': ['Slick', 'Slippery', 'Ethereal', 'Loose'],
//         'Erode': ['Destroy', 'Wear out', 'Tarnish'],
//         'Hindrance': ['Bother', 'Disturbance', 'Problematic'],
//         'Phonic': ['Soundful'],
//         'Ploy': ['Plan', 'Ruse'],
//         'Polaroid': ['Photograph'],
//         'Yap': ['Bark', 'Blab', 'Chatter'],
//         'Yonder': ['There', 'Away', 'Far', 'Afar']
//     }
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(thesauraus[word])
//         }, 1000);
//     })
// }

// const getSentiment = function (word) {
//     let wordSentiment = {
//         'Definitive': 1,
//         'Sharp': 1,
//         'Blue': 0,
//         'Luminous': 1,
//         'Plethora': 1,
//         'Slick': -1,
//         'Destroy': -1,
//         'Bother': -1,
//         'Soundful': 0,
//         'Plan': 0,
//         'Photograph': 0,
//         'Bark': -1,
//         'There': -1
//     }
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(wordSentiment[word])
//         }, 1000);
//     })
// }

// // No need for promises here
// const getSentimentDescription = function (sentiment) {
//     return sentiment === 1 ? "Positive" : sentiment === -1 ? "Negative" : "Neutral"
// }



// getRandomWord()
//     .then((word) => {
//         getSynonyms(word)
//             .then((synonyms) => {
//                 let firstSynonym = synonyms[0];
//                 getSentiment(firstSynonym)
//                     .then((sentiment) => {
//                         sentiment = getSentimentDescription(sentiment)
//                         console.log(`The word ${word} has a synonym ${firstSynonym} which has a ${sentiment} sentiment.`)
//                     }
//                     )
//             })
//     })

// getRandomWord()
//     .then((randomWord) => {
//         paramWord = randomWord;
//         return getSynonyms(randomWord)
//     })
//     .then((synonyms) => {
//         firstSynonym = synonyms[0];
//         return getSentiment(firstSynonym)
//     })
//     .then((sentiment) => {
//         sentimentDes = getSentimentDescription(sentiment)
//         console.log(sentimentDes, paramWord, firstSynonym)

//     })

// let word = null

// getRandomWord()
//     .then((wordParam) => {
//         word = wordParam
//         let synonymsPromise = getSynonyms(word)
//         let sentimentPromise = getSentiment(word)
//         return Promise.all([synonymsPromise, sentimentPromise])
//     })
//     .then((promiseResults) => {
//         // The first item in the array is our synonyms array, and the second is the sentiment for the word we got.
//         let [synonyms, sentiment] = promiseResults
//         const sentimentDescription = getSentimentDescription(sentiment)
//         console.log(`The word ${word} has a ${sentimentDescription} sentiment and synonyms ${synonyms}`)
//     })
// //________________________________________________________________________________________
// class APIManager {
//     fetch() {
//         return $.get('/data')
//     }
// }

// class Renderer {
//     render(dataPromise) {
//         dataPromise.then(function (data) {
//             $("#body").append(`<div>${data}</div>`)
//         })
//     }
// }

// const apiManager = new APIManager()
// const renderer = new Renderer()

// let initialDataPromise = apiManager.fetch()
// renderer.render(initialDataPromise) //initial page load

// $(".some-thing").on("click", function () {
//     let newDataPromise = apiManager.fetch()
//     renderer.render(newDataPromise)
// })
//_________________________________________________________________________________________________________________
// function checkLuckyNumber(num) {
//     // TODO: Create and return a promise that:
//     // 1. Waits 800ms (use setTimeout)
//     // 2. Resolves with "Lucky!" if number is divisible by 7
//     // 3. Resolves with "Not lucky" for other positive numbers
//     // 4. Rejects with Error("Invalid number") if number is negative or zero
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (num == 0 || num < 0) {
//                 reject("Invalid number")
//             }
//             if (num % 7 == 0)
//                 resolve("Lucky")
//             else {
//                 resolve("Not Lucky")
//             }
//         }, 800)
//     })
// }

// number = -4;
// checkLuckyNumber(number)
//     .then((message) => {
//         console.log(message)
//     })
//     .catch((message) => {
//         console.log(message)
//     })

// //________________________________________________________________________________________________________________
// function processFile(filename, processingTime) {
//     return new Promise((resolve, reject) => {
//         console.log(`Starting to process ${filename}...`);

//         setTimeout(() => {
//             // 15% chance of failure for realistic simulation
//             if (Math.random() < 0.15) {
//                 reject(new Error(`Failed to process ${filename}`));
//             } else {
//                 const result = {
//                     filename: filename,
//                     size: Math.floor(Math.random() * 1000) + 100, // Random size
//                     processedAt: new Date().toLocaleTimeString()
//                 };
//                 console.log(`✓ Completed ${filename}`);
//                 resolve(result);
//             }
//         }, processingTime);
//     });
// }

// // TODO: Use Promise.all() to process these files concurrently:
// const files = [
//     { name: "document1.pdf", time: 2000 },
//     { name: "image1.jpg", time: 1500 },
//     { name: "data.csv", time: 3000 },
//     { name: "report.docx", time: 1000 }
// ];

// // TODO:
// // 1. Create an array of promises using the files array
// const arrPromises = [];
// const start = Date.now();
// for (let i = 0; i < files.length; i++) {
//     let filePromised = processFile(files[i].name, files[i].time);
//     arrPromises[i] = filePromised
// }
// Promise.all(arrPromises)
//     .then((arrPromises) => {
//         const totalMs = Date.now() - start;
//         console.log(`Total processing time: ${totalMs}ms`);
//         for (let i = 0; i < arrPromises.length; i++) {
//             console.log(arrPromises[i])
//         }
//     })
//     .catch((error) => {
//         const totalMs = Date.now() - start;
//         console.log(` Failed after: ${totalMs}ms`);
//         console.log(error)
//     })

// Promise.allSettled(arrPromises)
//     .then((outcomes) => {
//         console.log(outcomes);
//     });

// 2. Use Promise.all() to wait for all files to complete
// 3. Log total processing time and all results
// 4. Handle the case where any file fails

// Bonus: Try Promise.allSettled() to see results even if some files fail
//____________________________________________________________________________________________________________________

// Simulated inventory database
const inventory = {
    'laptop': { price: 999, stock: 5 },
    'mouse': { price: 25, stock: 10 },
    'keyboard': { price: 75, stock: 0 }, // Out of stock
    'monitor': { price: 299, stock: 3 }
};

function checkInventory(items) {
    // TODO: Return a promise that:
    // 1. Waits 500ms (simulating database check)
    // 2. Checks if all items are in stock
    // 3. Resolves with items if all available
    // 4. Rejects with specific item that's out of stock
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            for (const i of items) {
                if (!inventory[i]) {
                    return reject(new Error(`Item not found:${i}.`))
                }
                if (!inventory[i].stock) {
                    return reject(new Error(`Item out of Stock: ${i}.`))
                }
            }
            resolve(items)
        }, 500)

    })

}

function calculateTotal(items) {
    // TODO: Return a promise that:
    // 1. Waits 200ms
    // 2. Calculates total price including 8% tax
    // 3. Resolves with { subtotal, tax, total }
    const tax = 0.08;
    let subtotal = 0;
    let total;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            for (const i of items) {
                subtotal = subtotal + inventory[i].price;
            }
            total = subtotal + tax * subtotal;
            resolve({ subtotal, tax, total })
        }, 200)

    })
}

function processPayment(amount) {
    // TODO: Return a promise that:
    // 1. Waits 1500ms (simulating payment processing)
    // 2. 90% success rate
    // 3. Resolves with { transactionId, amount, status: 'success' }
    // 4. Rejects with payment failure error
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const random = Math.random();
            if (random <= 0.9) {
                const transactionId = `TX-${Date.now()}`;
                resolve({ transactionId, amount, status: 'success' })
            } else {
                reject(new Error(`Payment failed`))
            }
        }, 1500)
    })
}

function updateInventory(items) {
    // TODO: Return a promise that:
    // 1. Waits 300ms
    // 2. Reduces stock for each item
    // 3. Resolves with updated inventory status
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            for (const item of items) {
                inventory[item].stock--;
            }
            resolve(inventory)

        }, 300)
    })
}

// TODO: Create a complete checkout function that:
// 1. Takes an array of item names
// 2. Chains all the above functions
// 3. Returns a promise with the final order result
// 4. Handles all possible errors appropriately




// getRandomWord()
//     .then((randomWord) => {
//         paramWord = randomWord;
//         return getSynonyms(randomWord)
//     })
//     .then((synonyms) => {
//         firstSynonym = synonyms[0];
//         return getSentiment(firstSynonym)
//     })
//     .then((sentiment) => {
//         sentimentDes = getSentimentDescription(sentiment)
//         console.log(sentimentDes, paramWord, firstSynonym)

//     })


function checkout(itemNames) {
    let items;
    let subtotal, tax, total;
    let transactionId, status
    // TODO: Implement the complete checkout flow
    return checkInventory(itemNames)
        .then(
            (checkedItems) => {
                items = checkedItems;
                return calculateTotal(items)
            })
        .then(
            (pricing) => {
                ({ subtotal, tax, total } = pricing);
                return processPayment(total)
            }
        )
        .then(
            (payment) => {
                transactionId = payment.transactionId;
                status = payment.status;

                return updateInventory(items)
            }
        )
        .then(
            (updatedInventory) => {
                return {
                    items: items,
                    subtotal: subtotal,
                    tax: tax,
                    total: total,
                    transactionId: transactionId,
                    status: status,
                    updatedInventory
                }
            }
        )
}

// Test cases:
checkout(['laptop', 'mouse'])           // Should succeed
    .then(result => console.log('Order success:', result))
    .catch(error => console.log('Order failed:', error.message));

checkout(['laptop', 'keyboard'])        // Should fail - keyboard out of stock
    .then(result => console.log('Order success:', result))
    .catch(error => console.log('Order failed:', error.message));

checkout(['monitor', 'mouse', 'laptop']) // Might fail at payment (10% chance)
    .then(result => console.log('Order success:', result))
    .catch(error => console.log('Order failed:', error.message));
