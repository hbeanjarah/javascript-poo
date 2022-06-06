/**
 * Object literal
 */

let Vehicles = require("./Classes/Vehicles.js");

let Fruit = require("./Classes/Fruit.js");

const person = {
  firstName: "John",
  lastName: "Doe",
  getFullName: () => person.firstName + " " + person.lastName,
};

console.log("person full name", person.getFullName());

/**
 * Object Constructor
 */

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const person1 = new Person("John", "Doe");
console.log("firstname", person1.firstName);

/**
 * Class constructor
 */

const bmw = new Vehicles("BMW", "Chineese", "RealTime Engine");

console.log("bmw", bmw.getDetails());

const apple = new Fruit("Apple", "Soft", 20, 28);

console.log(apple.divideWeightByNumber(2));
