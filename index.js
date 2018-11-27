console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const notes = require('./notes');

const user = os.userInfo();

const result = notes.add(7, 3);
console.log(result);

// fs.appendFile('greetings.txt', `Hello ${user.username}, you are ${notes.age}`, (err) => {
//     if (err) {
//         console.log('Unable to write to file.');
//         console.log(err);
//     }
// });