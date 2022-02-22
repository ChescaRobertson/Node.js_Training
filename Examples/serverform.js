const express = require('express');
let app = express();

// This launches the page with the form
app.get('/', (request, response) => {
  response.sendFile(__dirname + '//form.html');
});

//This launches the page after the form is submitted, as listed in the form action. Using the entered values from the form
app.get('/doGet', (request, response) => {
  // Requests the info entered from the form
  responseTrack = {
    title: request.query.title,
    artist: request.query.artist,
    album: request.query.album,
  };
  // Responds by returning the data that has been converted to JSON string
  response.send(JSON.stringify(responseTrack));
});
app.listen(8081);
