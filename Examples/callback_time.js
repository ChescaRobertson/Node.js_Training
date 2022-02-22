// Simulates a callback with a complex task that takes some time, not processing information until the program is ready

function doWork(callback) {
  let result = null;
  setTimeout(function () {
    result = 'My work here is done';
    callback(result);
  }, 2000);
}

doWork(function (output) {
  console.log(output);
});
