const express = require('express');
let app = express();

app.get('/', (request, response) => {
  response.send('<h1>Hello from Express</h1>');
});

// Setting up a web server with message to confirm
// let server = app.listen(8081, () => {
//   let host = server.address().address;
//   let port = server.address().port;
//   console.log(`Listening on https://${host}${port}`);
// });

// If not bothered about the message can write the above more simply:
app.listen(8081);
