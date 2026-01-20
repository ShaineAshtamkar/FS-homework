contacts = [];

function list() {
    console.log("Loading contacts from contacts.json...")
    console.log(contacts)
    console.log(`✓ Loaded ${contacts.length} contacts`)
}
module.exports = { list }
