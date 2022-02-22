let express = require('express');
let app = express();
let tracks = require('./tracks');
let path = require('path');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '//tracks.html');
});

app.get('/getTrack', (req, res) => {
  let responseTrack = tracks.getTrack(req.query.title);
  res.send(JSON.stringify(responseTrack));
});

app.get('/remove', (req, res) => {
  let title = req.query.title;
  tracks.removeTrack(title);
  res.send(`<h2>Removed track ${title}<h2>`);
});

app.get('/list', (req, res) => {
  res.send(JSON.stringify(tracks.listTracks()));
});

app.post('/addTrack', (req, res) => {
  tracks.addTrack(req.body.title, req.body.artist, req.body.album);
  let responseTrack = {
    title: req.body.title,
    artist: req.body.artist,
    album: req.body.album,
  };
  res.send(JSON.stringify(responseTrack));
});

app.listen(8081);
