let fs = require('fs');
let zlib = require('zlib');

let data = '';
let readerStream = fs.createReadStream('input.txt');
let writeStream = fs.createWriteStream('output.txt');

readerStream.setEncoding('UTF8');
// Pipes the read stream into the write stream so that the data in input.txt is written to output.txt
//readerStream.pipe(writeStream);
readerStream.pipe(zlib.createGzip()).pipe(writeStream);

readerStream.on('data', (chunk) => {
  data += chunk;
});

readerStream.on('end', () => {
  console.log(data);
});
