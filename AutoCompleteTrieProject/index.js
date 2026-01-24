class AutoCompleteTrie {
    constructor(value = "") {
        this.value = value;
        this.children = {};
        this.endOfWord = false;
    }

    addWord(word) {
        word = word.toLowerCase();
        let current = this;
        for (let ch of word) {
            if (!current.children[ch]) {
                current.children[ch] = new AutoCompleteTrie(ch);
            }
            current = current.children[ch];
        }
        current.endOfWord = true;
    }
}