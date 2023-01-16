
// using pipe for data transfer in nodejs

const fs = require('fs');

let rdStream = fs.createReadStream('./original.txt');

let wtStream = fs.createWriteStream('./copy.txt');

rdStream.pipe(wtStream);