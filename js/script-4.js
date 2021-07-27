const username = "Fedor";
const age = 5;
const hobby = "swim";

//const messageSchema = `My name is ${username}, I'm ${age} and I like to ${hobby}`;

//const messageShema = `My name is $(username), I'm $(age) and I like to $(hobby)`;

const messageShema =
  "My name is " + username + ", I'm " + age + "  and I like to " + hobby;

console.log(messageShema);
