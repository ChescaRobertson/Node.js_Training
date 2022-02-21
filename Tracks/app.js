const fs = require('fs');
const tracks = require('./tracks.js');
const yargs = require('yargs');
const _ = require('lodash');

const argv = yargs.argv;
//console.log(argv);
//let command = process.argv[2];
let command = argv._[0];

switch (command) {
  case 'add':
    tracks.addTrack(argv.artist, argv.title, argv.album);
    break;
  case 'list':
    tracks.listTrack;
    break;
  case 'get':
    tracks.getTrack(argv.title);
    break;
  case 'remove':
    tracks.removeTrack(argv.artist, argv.title, argv.album);
    break;
  default:
    console.log('Invalid command');
}
