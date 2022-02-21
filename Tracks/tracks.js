const fs = require('fs');

let fetchTracks = () => {
  try {
    let tracksString = fs.readFileSync('track-data.json');
    return JSON.parse(tracksString);
  } catch (e) {
    return [];
  }
};

let saveTracks = (tracks) => {
  fs.writeFileSync('track-data.json', JSON.stringify(tracks));
};

let displayTrack = (track) => {
  if (track) {
    console.log(
      `Title: ${track.title} \nArtist: ${track.artist} \nAlbum: ${track.album}\n`
    );
  } else {
    console.log('No such track');
  }
};

let addTrack = (title, artist, album) => {
  let tracks = fetchTracks();
  let track = {
    title,
    artist,
    album,
  };

  tracks.push(track);
  saveTracks(tracks);
};

let listTracks = () => {
  return fetchTracks();
};

let getTrack = (title) => {
  let tracks = fetchTracks();
  let filteredTracks = tracks.filter((track) => {
    return track.title === title;
  });
  return filteredTracks[0];
};

let removeTrack = (title) => {
  let tracks = fetchTracks();
  let filteredTracks = tracks.filter((track) => {
    return track.title !== title;
  });
  saveTracks(filteredTracks);
};

module.exports = {
  addTrack,
  listTracks,
  getTrack,
  removeTrack,
  displayTrack,
};
