function welcome() {
    console.log("=== AutoComplete Trie Console ===");
    console.log("Type 'help' for commands\n");
}

function help() {
    console.log("Commands:");
    console.log("  add <word>         - Add word to dictionary");
    console.log("  find <word>        - Check if word exists");
    console.log("  complete <prefix>  - Get completions");
    console.log("  help               - Show this message");
    console.log("  exit               - Quit program");
}

function added(word) {
    console.log(`✓ Added '${word}' to dictionary`);
}

function found(word) {
    console.log(`✓ '${word}' exists in dictionary`);
}
function notFound(word) {
    console.log(`✗ '${word}' not found in dictionary`);
}

function suggestions(prefix, allWords) {
    const result = `Suggestions for : '${prefix}': ${allWords.join(",")}`;
    console.log(result)

}

function error(msg) {
    console.log(`✗ ${msg}`);
}


function goodbye() {
    console.log("Goodbye!");
}

module.exports = {
    welcome,
    help,
    added,
    found,
    notFound,
    suggestions,
    error,
    goodbye
};