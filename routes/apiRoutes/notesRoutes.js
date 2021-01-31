const router = require('express').Router();
const { findById, createNewNote } = require("../../lib/notes.js");
const { notes } = require('../../db/db');

router.get('/notes', (req, res) => {
    res.json(notes);
});

router.get('/notes/:id', (req, res) => {
    const result = findById(req.params.id, animals);
    if (result) {
        res.json(result);
    } else {
        res.send(404);
    }
});

router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();
    
    const note = createNewNote(req.body, notes);
    res.json(note); 
});

module.exports = router;