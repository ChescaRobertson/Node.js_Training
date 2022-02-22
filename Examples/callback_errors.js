const fs = require('fs');

function readFiles(files, callback) {
  let filesLeft = files.length;
  const contents = {};
  const error = null;

  const processContent = function (filePath) {
    return function (err, data) {
      // An error was previously encountered and the callback was invoked
      if (error !== null) {
        return;
      }
      // An error happended while trying to read the file, invoke the callback
      if (err) {
        error = err;
        return callback(err);
      }
      contents[filePath] = data;

      // After last file is read, invoke the callback
      if (!--filesLeft) {
        callback(null, contents);
      }
    };
  };
  files.forEach(function (filePath) {
    fs.readFile(filePath, processContent(filePath));
  });
}

readFiles(['input.txt', 'output.txt'], function (err, contents) {
  if (err) {
    console.log(err);
  } else {
    console.log(contents);
  }
});
