

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

    findWord(word) {
        word = word.toLowerCase();
        let current = this;
        for (let ch of word) {
            if (!current.children[ch]) {
                return false;
            }
            current = current.children[ch];
        }
        if (current.endOfWord) {
            return true;
        } else {
            return false;
        }
    }
    _getRemainingTree(prefix, node) {
        prefix = prefix.toLowerCase();
        let current = node;
        for (let ch of prefix) {
            if (!current.children[ch]) {
                return null;  // prefix not found
            }
            current = current.children[ch];
        }
        return current; // node where prefix ends
    }

    _allWordsHelper(prefix, node, allWords) {
        if (node.endOfWord == true) {
            allWords.push(prefix);
        }
        if (!node) {
            return;
        }
        for (let ch in node.children)
            this._allWordsHelper(prefix + ch, node.children[ch], allWords)
    }
    predictWords(prefix) {

    }
}







module.exports = AutoCompleteTrie;