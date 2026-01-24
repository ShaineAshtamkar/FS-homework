const AutoCompleteTrie = require("./index");

describe("addWord", () => {
    test("adds a single word and marks endOfWord at the last character", () => {
        const trie = new AutoCompleteTrie();
        trie.addWord("cat");

        // walk down: c -> a -> t
        const c = trie.children["c"];
        const a = c.children["a"];
        const t = a.children["t"];

        expect(t.endOfWord).toBe(true);
    });

    test("does not mark intermediate nodes as endOfWord (unless they are full words)", () => {
        const trie = new AutoCompleteTrie();
        trie.addWord("cat");

        const c = trie.children["c"];
        const a = c.children["a"];

        expect(c.endOfWord).toBe(false);
        expect(a.endOfWord).toBe(false);
    });

    test("reuses existing path when adding a word with the same prefix", () => {
        const trie = new AutoCompleteTrie();
        trie.addWord("run");

        const firstNNode = trie.children["r"].children["u"].children["n"];

        trie.addWord("running");

        const nAfterReuse = trie.children["r"].children["u"].children["n"];

        // same exact object in memory = path was reused
        expect(nAfterReuse).toBe(firstNNode);
    });

});


describe("findWord", () => {
    test("returns true when the exact word exists in the trie", () => {
        const trie = new AutoCompleteTrie();
        trie.addWord("cat");

        expect(trie.findWord("cat")).toBe(true);
    });

    test("returns false when the word does not exist in the trie", () => {
        const trie = new AutoCompleteTrie();
        trie.addWord("cat");

        expect(trie.findWord("dog")).toBe(false);
    });

    test("returns false when only a prefix exists but not the full word", () => {
        const trie = new AutoCompleteTrie();
        trie.addWord("running"); // creates r-u-n... but "run" is NOT marked as a word unless added

        expect(trie.findWord("run")).toBe(false);
    });
});
