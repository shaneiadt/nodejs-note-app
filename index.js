console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const argv = require('yargs').argv;

const notes = require('./notes');

const command = argv._[0];
console.log('Command: ', command);
console.log('Yargs', argv);

if (command === 'add') {
    notes.addNote(argv.title, argv.body);
} else if (command === 'list') {
    notes.getAll();
} else if (command === 'read') {
    notes.getNote(argv.title);
} else if (command === 'remove') {
    notes.removeNote(argv.title);
} else {
    console.log('Command not recognised.');
}