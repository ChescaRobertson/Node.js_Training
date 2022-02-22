const express = require('express');
let app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// This launches the page with the form
app.get('/', (request, response) => {
  response.sendFile(__dirname + '//postform.html');
});

//This launches the page after the form is submitted, as listed in the form action. Using the entered values from the form
app.post('/doPost', (request, response) => {
  // Requests the info entered from the form
  responseTrack = {
    title: request.body.title,
    artist: request.body.artist,
    album: request.body.album,
  };
  // Responds by returning the data that has been converted to JSON string
  response.send(JSON.stringify(responseTrack));
});
app.listen(8081);
