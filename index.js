const _ = require('lodash');

const commands = {
    title: {
        describe: 'Title of the note',
        demand: true,
        alias: 't'
    },
    body: {
        describe: 'Body of the note',
        demand: true,
        alias: 'b'
    }
}

const argv = require('yargs')
    .command('[add]', 'Add a new note.', {title:commands.title,body:commands.body})
    .command('[list]', 'List all notes.')
    .command('[read]', 'Read a note.', {title:commands.title})
    .command('[remove]', 'Remove a specific note.', {title:commands.title})
    .help()
    .argv;

const notes = require('./notes');

const command = argv._[0];


if (command === 'add') {
    const note = notes.addNote(argv.title, argv.body);
    if (note) {
        console.log('Note added successfully.');
        notes.logNote(note);
    } else {
        console.log(`Duplication Error: A note with the title ${argv.title} already exists.`);
    }
} else if (command === 'list') {
    const allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} note(s).`);
    allNotes.forEach(note => notes.logNote(note));
} else if (command === 'read') {
    const readNote = notes.getNote(argv.title);
    if (readNote) {
        console.log('Note retrieved successfully.');
        notes.logNote(readNote);
    } else {
        console.log(`No note with the title "${argv.title}" exists.`);
    }
} else if (command === 'remove') {
    const removedNotes = notes.removeNote(argv.title);
    if (removedNotes) {
        console.log('Note removed successfully.');
    } else {
        console.log('No note with that title exists.');
    }
} else {
    console.log('Command not recognised.');
}