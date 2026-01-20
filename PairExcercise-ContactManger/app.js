const ui = require('./ui');
const contacts = require('./contacts');
const v = require("./validations");

function run() {
    let command;
    try {
        command = process.argv[2];
        const args = process.argv.slice(3);

        v.validateCommand(command);
        v.validateArgs(command, args);


        switch (command) {
            case "add":
                const [name, email, phone] = args;
                v.validateContact(name, email, phone);
                //contacts.add()
                break;
            case "list":
                contacts.list()
                break;
            case "search":
                break;
            case "delete":
                break;
            case "help":
                ui.printHelp();
                return;


        }
    } catch (err) {
        ui.handleError(err, command);
        process.exitCode = 1;

    }

}

run();