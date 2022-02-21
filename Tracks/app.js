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
    tracks.addTrack(argv.title, argv.artist, argv.album);
    break;
  case 'list':
    let allTracks = tracks.listTracks();
    console.log(`Displaying ${allTracks.length} tracks:\n`);
    allTracks.forEach((track) => {
      tracks.displayTrack(track);
    });
    break;
  case 'get':
    let track = tracks.getTrack(argv.title);
    tracks.displayTrack(track);
    break;
  case 'remove':
    tracks.removeTrack(argv.title);
    break;
  default:
    console.log('Invalid command');
}
