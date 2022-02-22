function promiseTime(time) {
  return new Promise(function (resolve, reject) {
    if (time > 0) {
      setTimeout(resolve, time);
    } else {
      reject();
    }
  })
    .then(function () {
      console.log(`Success, ran setTimeout after ${time}ms`);
    })
    .catch(function () {
      console.log(`Fail, Timeout of ${time}ms is too short`);
    })
    .finally(function () {
      console.log('Finished');
    });
}

promiseTime(10);
