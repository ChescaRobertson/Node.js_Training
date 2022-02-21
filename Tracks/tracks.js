let addTrack = (artist, title, album) => {
  console.log('Adding a track: ', artist, title, album);
};

let listTrack = () => {
  console.log('Listing all tracks: ');
};

let getTrack = (title) => {
  console.log('Getting track', title);
};

let removeTrack = (artist, title, album) => {
  console.log('Removing track: ', artist, title, album);
};

module.exports = {
  addTrack,
  listTrack,
  getTrack,
  removeTrack,
};
