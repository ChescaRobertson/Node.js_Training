// This has the same functionality as tracks.js but utilises a database rather than a flat file structure

const { add } = require('lodash');
const db = require('./dbcrud');

let addTrack = (title, artist, album) => {
  db.insertRow(title, artist, album);
};

let listTracks = () => {
  return db.selectAll();
};

let getTrack = (title) => {
  return db.selectRow(title);
};

let removeTrack = (title) => {
  return db.deleteRow(title);
};

let displayTrack = (track) => {
  if (track) {
    console.log(
      `Title: ${track.title} \nArtist: ${track.artist} \nAlbum: ${track.album}\n`
    );
  } else {
    console.log('No tracks');
  }
};

module.exports = {
  addTrack,
  listTracks,
  getTrack,
  removeTrack,
  displayTrack,
};
