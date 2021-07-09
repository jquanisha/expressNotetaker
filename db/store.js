const uuidv1 = require('uuid/v1')
const util = require('util');
const fs = require('fs');
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class Store {
    read() {
        return readFileAsync('db/db.json')
    }
    write(newNote) {
        return writeFileAsync('db/db.json', JSON.stringify(newNote));
    }
    getNotes() {
        return this.read().then((notes) => {
            var parseData
            try { parseData = [].concat(JSON.parse(notes)) } catch (e) { parseData = [] }
            return parseData
        })
    }
    addNote(newNote) {
        const { title, text } = newNote
        const latestNote = {
            title,
            text,
            id: uuidv1()
        }
        return this.getNotes()
            .then((notes) => {
                [...notes, latestNote]
            })
            .then((updatedNotes) => this.write(updatedNotes))
            .then(() => latestNote)
    }

}
module.exports = new Store()