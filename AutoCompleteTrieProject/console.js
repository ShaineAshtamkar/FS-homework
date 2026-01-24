const AutoCompleteTrie = require("./index");
const ui = require("./ui");

function run() {
    let command;
    try {
        command = process.argv[2];
        const args = process.argv.slice(3);

        switch (command) {
            case "add":
                word = args;
                addWord(word)
                break;

            case "complete":
                prefix = args;
                allWords = predictWords(prefix);
                ui.printSuggestions(allWords);
                break;

            case "find":
                const query = args[0];

                break;

            case "help":
                ui.printHelp();
                break;

            case "exit":

                return;


        }
    } catch (err) {
        ui.handleError(err, command);
        process.exitCode = 1;

    }

}

run();