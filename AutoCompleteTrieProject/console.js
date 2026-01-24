const AutoCompleteTrie = require("./index");
const ui = require("./ui");
const promptSync = require("prompt-sync");

const prompt = promptSync();
const trie = new AutoCompleteTrie();


ui.welcome();


function run() {
    while (true) {
        const line = prompt("> ").trim();
        if (!line) continue;

        const parts = line.split(" ");
        const command = parts[0].toLowerCase();
        const args = parts.slice(1).join(" ");
        try {

            switch (command) {
                case "add": {
                    const word = args;
                    trie.addWord(word);
                    ui.added(word);
                    break;
                }

                case "complete": {
                    const prefix = args;
                    const allWords = trie.predictWords(prefix);
                    ui.suggestions(prefix, allWords);
                    break;
                }

                case "find": {
                    const word = args;
                    const isFound = trie.findWord(word);
                    if (isFound) {
                        ui.found(word)
                    } else {
                        ui.notFound(word);
                    }
                    break;
                }

                case "help":
                    ui.help();
                    break;

                case "exit":
                    ui.goodbye();
                    return;


            }
        } catch (err) {
            ui.error(err)


        }

    }
}


run();