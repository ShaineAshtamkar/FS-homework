import AutoCompleteTrie from "./trie.js";

const trie = new AutoCompleteTrie();
let count = 0;


const addInput = document.querySelector("#add-input");
const addBtn = document.querySelector("#add-btn");
const msg = document.querySelector("#msg");
const searchInput = document.querySelector("#search-input");
const suggestions = document.querySelector("#suggestions");
const countEl = document.querySelector("#count");

const renderSuggestions = function (list) {
    suggestions.innerHTML = "";

    for (let word of list) {
        const div = document.createElement("div");
        div.textContent = word;
        suggestions.appendChild(div);
    }
}

addBtn.addEventListener("click", () => {
    const word = addInput.value;
    if (word === "") {
        msg.textContent = "✗ Cannot add empty word";
        msg.style.color = "red";
        return
    }
    trie.addWord(word);
    count++;
    countEl.textContent = count;

    msg.textContent = `✓ Added ${word} to dictionary`;
    msg.style.color = "green"

    addInput.value = "";

})
searchInput.addEventListener("input", () => {
    const input = searchInput.value;
    if (input == "") {
        suggestions.innerHTML = "";
        return;
    }
    const wordSuggestions = trie.predictWords(input);

    renderSuggestions(wordSuggestions);

})
