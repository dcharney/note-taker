const fs = require("fs");
const path = require("path");

// returns the note corresponding to an id
function findById(id, notesArr) {
    const result = notesArr.filter(note => note.id === id)[0];
    return result;
};

// adds note to stored notes db
function createNewNote(noteContent, notesArr) {
    const note = noteContent;
    notesArr.push(note);

    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({notes: notesArr}, null, 2)
    );
    
    return note;
};

module.exports = {
    findById,
    createNewNote
};