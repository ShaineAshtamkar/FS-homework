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

describe("_getRemainingTree", () => {
    test("returns the node where the prefix ends when prefix exists", () => {
        const trie = new AutoCompleteTrie();
        trie.addWord("cat");
        trie.addWord("car");

        const node = trie._getRemainingTree("ca", trie);

        expect(node).not.toBeNull();
        expect(node.value).toBe("a"); // prefix 'ca' ends at node 'a'
    });

    test("returns null when the prefix does not exist", () => {
        const trie = new AutoCompleteTrie();
        trie.addWord("cat");

        const node = trie._getRemainingTree("cz", trie);
        expect(node).toBeNull();
    });

    test("can start from a non-root node (subtree search)", () => {
        const trie = new AutoCompleteTrie();
        trie.addWord("cat");

        const cNode = trie.children["c"];
        const aNode = trie._getRemainingTree("a", cNode);

        expect(aNode).not.toBeNull();
        expect(aNode.value).toBe("a");
    });
});

describe("_allWordsHelper", () => {
    test("collects all words under a prefix node", () => {
        const trie = new AutoCompleteTrie();
        trie.addWord("cat");
        trie.addWord("car");
        trie.addWord("card");

        const startNode = trie._getRemainingTree("ca", trie);
        const allWords = [];

        trie._allWordsHelper("ca", startNode, allWords);

        expect(allWords.sort()).toEqual(["car", "card", "cat"].sort());
    });

    test("includes the prefix itself if it is a complete word", () => {
        const trie = new AutoCompleteTrie();
        trie.addWord("car");
        trie.addWord("card");

        const startNode = trie._getRemainingTree("car", trie);
        const allWords = [];

        trie._allWordsHelper("car", startNode, allWords);

        // should include 'car' and also 'card'
        expect(allWords.sort()).toEqual(["car", "card"].sort());
    });

    test("returns only one word when the subtree contains only that word", () => {
        const trie = new AutoCompleteTrie();
        trie.addWord("dog");

        const startNode = trie._getRemainingTree("do", trie);
        const allWords = [];

        trie._allWordsHelper("do", startNode, allWords);

        expect(allWords).toEqual(["dog"]);
    });
});
