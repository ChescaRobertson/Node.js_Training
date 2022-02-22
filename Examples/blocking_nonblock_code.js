// Example of blocking code - the program blocks until it reads the file and only then proceeds to end of program
let fs = require('fs');
let data = fs.readFileSync('input.txt');
console.log(data.toString());
console.log('Program Ended');

// Example of Non-Blocking Code - the program doesn't wait for file reading, proceeds to print 'Program Ended' at the same time as the program continues reading the file
let fs = require('fs');
fs.readFile('input.txt', function (err, data) {
  if (err) return console.log(err);
  console.log(data.toString());
});
console.log('Program Ended');
