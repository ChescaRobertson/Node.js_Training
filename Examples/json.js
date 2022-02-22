let person = {
  name: 'Fred',
  age: 24,
};

let personJson = JSON.stringify(person);
console.log(personJson);

let personObj = JSON.parse(personJson);
console.log(`${personObj.name} is ${personObj.age}`);
