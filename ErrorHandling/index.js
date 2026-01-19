

const fs = require("fs");

function safeJsonParse(input) {
    try {
        return JSON.parse(input);
    } catch (err) {
        return "Invalid JSON format";
    }
}

console.log(safeJsonParse('{"name": "John"}'));

console.log(safeJsonParse("invalid json"));

function readFileWithErrorHandling(filePath, callback) {
    fs.readFile(filePath, (err, data) => {
        if (err) {
            if (err.code === "ENOENT") {
                return callback(`File not found: ${filePath}`);
            }
            if (err.code === "EISDIR") {
                return callback(`Path is a directory, not a file: ${filePath}`);
            }
            if (err.code === "EACCES") {
                return callback(`Permission denied: ${filePath}`);
            }
            return callback(`Error reading file "${filePath}": ${err.message}`);
        }
        callback(`File read successfully. Size: ${data.length} bytes`);


    }

    )
}

// 1) Existing file (create one if you want to test quickly)
readFileWithErrorHandling("existing.txt", console.log);

// 2) Non-existing file
readFileWithErrorHandling("does-not-exist.txt", (result) => {
    console.log(result);

});

// 3) Directory instead of file (use current folder as an example)
readFileWithErrorHandling(".", (result) => {
    console.log(result);

});