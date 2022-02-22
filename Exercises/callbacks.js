const getUser = (id, name, callback) => {
  const user = {
    id: id,
    name: name,
  };
  setTimeout(() => {
    callback(user);
  }, 3000);
};

getUser(112, 'Fred', (userObject) => {
  console.log(userObject);
});
