const fs = require('fs');
//const tracks = require('./tracks.js');
const tracks = require('./tracksdb.js');
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
    tracks
      .listTracks()
      .then((allTracks) => {
        console.log(`Displaying ${allTracks.length} tracks:\n`);
        allTracks.forEach((track) => {
          tracks.displayTrack(track);
        });
      })
      .catch((err) => {
        console.log(err);
      });
    break;
  case 'get':
    tracks
      .getTrack(argv.title)
      .then((track) => {
        tracks.displayTrack(track);
      })
      .catch((err) => {
        console.log(err);
      });
    break;
  case 'remove':
    tracks.removeTrack(argv.title);
    console.log(`Removed ${argv.title}`);
    break;
  default:
    console.log('Invalid command');
}
