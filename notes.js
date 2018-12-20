const fs = require('fs');
const _ = require('lodash');

const fetchNotes = () => {
    try {
        const notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    } catch (error) {
        return [];
    }
};

const saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

const addNote = (title, body) => {
    let notes = fetchNotes();
    const note = {
        title,
        body
    };
    const duplicateNotes = notes.filter(note => note.title === title);

    if (duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
    }
};

const getAll = () => {
    return fetchNotes();
};

const getNote = (title) => {
    const notes = fetchNotes();
    return _.find(notes, note => note.title === title);
};

const removeNote = (title) => {
    let notes = fetchNotes();
    const newNotes = notes.filter(note => note.title !== title);

    if (newNotes.length === notes.length - 1) {
        saveNotes(newNotes);
        return newNotes;
    }
};

const logNote = (note) => {
    console.log('----');
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
    console.log('---------');
};

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote,
    logNote
};