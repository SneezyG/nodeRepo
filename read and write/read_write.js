
// reading and writing file in node.js

const fs = require('fs');

let streamm;
// create a write stream.
stream = fs.createWriteStream('./node.txt');

stream.write('My name is Ahmad \n');
stream.write("My father's name is ismail \n");
stream.write('I am 25 years of age \n');
stream.write('I am a professional software developer \n');

// create a read stream.
stream = fs.createReadStream('./node.txt');

stream.on('data', function(data) {
  let chunk = data.toString();
  console.log(chunk);
});