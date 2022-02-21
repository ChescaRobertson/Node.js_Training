function executor(toNumber) {
  let result = 42;
  return toNumber(result);
}

function toNumber(param) {
  return Number(param);
}

console.log(executor(toNumber));

console.log(
  executor(function (param) {
    return Number(param);
  })
);

// Above can be written as an arrow function, i.e. without the function keyword
console.log(
  executor((param) => {
    return Number(param);
  })
);

//If only one param you do not need the () however, prettier formatting will add them
// If only one command, you do not need the curly brackets
// Do not require the return keyword if a one line command
console.log(exector((param) => Number(param)));
