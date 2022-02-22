function product(num1, num2, callback) {
  let result = num1 * num2;
  callback(result);
}

// function print(result) {
//   console.log(result);
// }

product(2, 3, function (result) {
  console.log(result);
});
