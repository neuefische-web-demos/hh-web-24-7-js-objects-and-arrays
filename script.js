// ARRAYS

// Declaring an array
// const arrayName = [item1, item2, item3, ...]
//                      0         1
const shoppingList = ["apple", "tomato"];

// Accessing array element via bracket notation and the item's index
console.log(shoppingList[0]);
console.log(shoppingList[1]);

// Getting the length of an array
console.log(shoppingList.length);

// Nesting array in another array
const complexArray = [1, 2, ["hello", false], true];

// Accessing element in nested array
console.log(complexArray[2][1]);

// Manipulating arrays

// Overwrite value in array
shoppingList[0] = "banana";
console.log(shoppingList);

// Append data to end of array
shoppingList.push("orange");
console.log(shoppingList);

// Remove data from the end of array
shoppingList.pop();
console.log(shoppingList);

// OBJECTS

// Declaring an object
// const objectName = { key1: value1, key2: value2, ...}

// const person = {
//   name: "Max Blub",
//   age: 21,
//   isStudent: false,
// };

// Accessing property via dot notation
// console.log(person.name);
// console.log(person.age);

// Accessing property via bracket notation
// console.log(person["name"]);
// console.log(person["age"]);

// Nesting object in another object
const person = {
  name: "Max Blub",
  age: 21,
  isStudent: false,
  address: {
    street: "Berliner Str.",
    houseNumber: 42,
    city: "Leipzig",
    zipCode: "12345",
  },
};

// Accessing property in nested object
console.log(person.address.street);

// Manipulating objects

// Overwrite existing property
person.name = "Max Bla";
console.log(person);
person["name"] = "Max Blub";
console.log(person.name);

// Add new property
person.score = 15;
console.log(person);

// Delete property
delete person.score;
console.log(person);

// Nested objects and arrays
const peopleArray = [
  {
    name: "John",
    age: 22,
  },
  {
    name: "Alex",
    age: 33,
  },
];

console.log(peopleArray[1].name);
console.log(peopleArray[1]["name"]);

const user = {
  userId: "1234",
  mail: "test@mail.com",
  shoppingCart: ["tomato", "banana", "chocolate"],
};

console.log(user.shoppingCart[0]);
console.log(user["shoppingCart"][0]);
