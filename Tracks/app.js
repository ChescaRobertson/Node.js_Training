const fs = require('fs');
const tracks = require('./tracks.js');
const yargs = require('yargs');
const _ = require('lodash');

const argv = yargs
  .options({
    c: {
      demand: true,
      alias: 'command',
      describe: 'enter list, add, get or remove',
      string: true,
    },
    t: {
      alias: 'title',
      string: true,
    },
    a: {
      alias: 'artist',
      string: true,
    },
    b: {
      alias: 'album',
      string: true,
    },
  })
  .help()
  .alias('help', 'h').argv;

let command = argv.command;

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
