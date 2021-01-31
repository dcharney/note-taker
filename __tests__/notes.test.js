const fs = require("fs");
const { findById, createNewNote } = require("../lib/notes.js");
const { notes } = require("../db/db");

jest.mock('fs');
test("creates a new note", () => {
    const note = createNewNote(
        { title: "Test Note 1", text: "Lorem Ipsum" },
        notes
    );

    expect(note.title).toBe("Test Note 1");
    expect(note.text).toBe("Lorem Ipsum");
});

test("find by id", () => {
    const startingNotes = [
        {
            id: "3",
            title: "Test Note 1",
            text: "Lorem Ipsum"
        },
        {
            id: "4",
            title: "Test Note 2",
            text: "loremIpsum"
        },
    ];
    const result = findById("3", startingNotes);

    expect(result.title).toBe("Test Note 1");
});