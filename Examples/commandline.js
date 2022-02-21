let args = process.argv;

//console.log(args[2]);

for (let i = 2; i < args.length; i++) {
  console.log(args[i]);
}

// arrow functon
args.forEach((element) => {
  console.log(element);
});
