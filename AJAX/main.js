// $.get("https://www.googleapis.com/books/v1/volumes?q=isbn:0439023521", function (result) {
//     console.log(result)
// })
// const btn = document.querySelector(".btn");

// $.get("https://www.googleapis.com/books/v1/volumes?q=intitle:Name+of+the+Wind", function (result) {
//     console.log(result.items[0].volumeInfo.description)
// })


// //request the data with a GET request
// $.get("https://jsonplaceholder.typicode.com/users", function (users) {
//     //extract the geo data of the first user

//     let lat = users[0].address.geo.lat
//     let long = users[0].address.geo.lng

//     let lastUser = users[users.length - 1];
//     let catchphrase = lastUser.company.catchPhrase
//     console.log(catchphrase)

//     //log the data
//     console.log(`${lat}, ${long}`) //prints -37.3159, 81.1496
// })


// const useData = function (data) {
//     console.log(data)
// }

// $.ajax({
//     method: "GET",
//     url: 'https://www.googleapis.com/books/v1/volumes?q=isbn:0439023521',
//     success: useData
// });

// const fetch = function () {
//     ($.ajax({
//         method: "GET",
//         url: 'https://www.googleapis.com/books/v1/volumes?q=isbn:0439023521',
//         success: function (data) {
//             console.log(data);
//         },
//         error: function (xhr, text, error) {
//             console.log(text);
//         }
//     })
//     )
// }

// btn.addEventListener("click", () => {
//     fetch(9781945048470);
// })

// const fetch = function (isbn) {
//     ($.ajax({
//         method: "GET",
//         url: `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`,
//         success: function (data) {
//             console.log(data);
//         },
//         error: function (xhr, text, error) {
//             console.log(text);
//         }
//     })
//     )
// }

// const fetch = function (isbn) {
//     ($.ajax({
//         method: "GET",
//         url: `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`,
//         success: function (data) {
//             console.log(data);
//         },
//         error: function (xhr, text, error) {
//             console.log(text);
//         }
//     })
//     )
// }

// const list = function (queryType, queryValue) {
//     const q =
//         queryType == "isbn"
//             ? `isbn:${queryValue}`
//             : `intitle:${encodeURIComponent(queryValue)}`;
//     $.ajax({
//         method: "GET",
//         url: `https://www.googleapis.com/books/v1/volumes?q=${q}`,
//         success: function (data) {
//             const items = data.items || [];
//             items.forEach((item) => {
//                 const title = item.volumeInfo.title;
//                 const authors = item.volumeInfo.authors.join(",");
//                 const ids = item.volumeInfo.industryIdentifiers || [];
//                 const isbn = ids.find((x) => x.type == "ISBN_13")?.identifier ||
//                     ids.find((x) => x.type == "ISBN_10")?.identifier || "No ISBN";

//                 console.log(`Title: ${title}`);
//                 console.log(`Author(s): ${authors}`);
//                 console.log(`ISBN: ${isbn}`);
//                 console.log("------");
//             });

//         },
//         error: function (xhr, text, error) {
//             console.log(text);
//         }

//     })
// }
// list("title", "The Wise Man's Fears");
// list("isbn", 9789814561778);
// list("title", "How to Win Friends and Influence People");


// const fetchBook = function (queryType, queryValue) {
//     const q =
//         queryType == "isbn"
//             ? `isbn:${queryValue}`
//             : `intitle:${encodeURIComponent(queryValue)}`
//     $.ajax({
//         method: "GET",
//         url: `https://www.googleapis.com/books/v1/volumes?q=${q}`,
//         success: function (data) {
//             console.log(data);
//         },
//         error: function (xhr, text, error) {
//             console.log(text);

//         }

//     })
// }


const input = document.getElementById("searchInput");
const btn = document.getElementById("searchBtn");
const gifBox = document.getElementById("gifBox");

const KEY = "7iLtfregd6Jih0emYVN6Q4YPHm9KgGK9";
const go = function () {
    $.get(`https://api.giphy.com/v1/gifs/search?api_key=${KEY}&q=${input.value}&limit=1`, function (gifs) {
        const first = gifs.data[0];
        gifBox.innerHTML = `<iframe src="${first.embed_url}" width="480" height="270"></iframe>`;
    })



}

searchBtn.addEventListener("click", go);




