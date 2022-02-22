const colors = require('colors');
const msg = require('./messageHolder');

console.log('A message'.green);
console.log(msg.message.red);
console.log(msg.message2.blue);
console.log(msg.doSomething().rainbow);
