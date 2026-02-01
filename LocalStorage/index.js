// localStorage.personalData = {
//     averageTimeOnSite: { unit: "hr", amt: 9 },
//     probabilityOfFriends: 0.02,
//     commonKeywords: ["salsa for one", "1 vs. none Chess"]
// }

// localStorage.personalData = JSON.stringify({
//     averageTimeOnSite: { unit: "hr", amt: 9 },
//     probabilityOfFriends: 0.02,
//     commonKeywords: ["salsa for one", "1 vs. none Chess"]
// })

// let userStuff = JSON.parse(localStorage.personalData)

// console.log(userStuff.probabilityOfFriends) //prints 0.02


// userStorage = {
//     darkMode: true,
//     showSideNav: false,
//     defaultResultCount: 9,
//     latestMarks: {
//         sectionA: 92,
//         sectionB: 11
//     },
//     cart: [
//         { id: 3112, count: 2 },
//         { id: 812, count: 16 }
//     ]
// }
// localStorage.setItem("userStorage", JSON.stringify(userStorage));
// let userStuff = JSON.parse(localStorage.userStorage)

// let lastItemCount = userStuff["cart"][userStuff.cart.length - 1].count
inputEl = document.getElementById("input")
buttonEl = document.getElementById("btn-input")
divEl = document.getElementById("display")



arrWisdom = [];
const display = function () {
    divEl.innerHTML = inputEl.value;
    arrWisdom.push({ id: Date.now(), text: inputEl.value })
    if (arrWisdom.length % 2 == 0) {
        localStorage.setItem("wisdom", JSON.stringify(arrWisdom))
    }
}


const renderWisdom = function () {
    divEl.innerHTML = "";
    for (let i = 0; i < arrWisdom.length; i++) {
        const row = document.createElement("div");
        row.dataset.id = arrWisdom[i].id;

        const textSpan = document.createElement("span");
        textSpan.textContent = arrWisdom[i].text + " ";

        const xSpan = document.createElement("span");
        xSpan.textContent = "X";
        xSpan.style.cursor = "pointer";

        xSpan.addEventListener("click", (e) => {
            const rowElToRemove = e.target.parentElement;
            const idToDelete = rowElToRemove.dataset.id;

            rowElToRemove.remove();

            arrWisdom = arrWisdom.filter(w => w.id !== idToDelete)
            localStorage.setItem("wisdom", JSON.stringify(arrWisdom))
        })
        row.appendChild(textSpan)
        row.appendChild(xSpan)
        divEl.appendChild(row)

    }
}
document.addEventListener("DOMContentLoaded", () => {
    arrWisdom = JSON.parse(localStorage.getItem("wisdom")) || [];
    renderWisdom();
    console.log("page loaded / refreshed");
});
const clearWisdomBtn = document.getElementById("clearWisdom")
clearWisdomBtn.addEventListener("click", () => {
    localStorage.removeItem("wisdom");
    arrWisdom = [];
    divEl.innerHTML = "";
})




