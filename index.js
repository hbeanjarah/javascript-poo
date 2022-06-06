/**
 * Object literal
 */

// let Vehicles = require("./Classes/Vehicles.js");
// let Fruit = require("./Classes/Fruit.js");
// let Episode = require("./Classes/Episode.js");
// let BankAccount = require("./Classes/BankAccount.js");
let Car = require("./Classes/Model.js");

// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   getFullName: () => person.firstName + " " + person.lastName,
// };

// console.log("person full name", person.getFullName());

/**
 * Object Constructor
 */

// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }

// const person1 = new Person("John", "Doe");
// console.log("firstname", person1.firstName);

/**
 * Class constructor
 */

// const bmw = new Vehicles("BMW", "Chineese", "RealTime Engine");

// console.log("bmw", bmw.getDetails());

// const apple = new Fruit("Apple", "Soft", 20, 28);

// console.log(apple.divideWeightByNumber(2));

/**
 * Class manipulation
 */

// const firstEpisode = new Episode("Game of Thrones", 2, false);
// const secondEpisode = new Episode("The mentalist", 1, true);
// const thirdEpisode = new Episode("Elementary", 4, true);

// console.log("firstEpisode", firstEpisode.duration);
// console.log("secondEpisode", secondEpisode);
// console.log("thirdEpisode", thirdEpisode);

// const johnAccount = new BankAccount("John Doe", 50000);

// console.log(johnAccount.deposit(1000));
// console.log(johnAccount.showBalance());

// BankAccount.sayWelcome();

const carOne = new Car("test");

console.log("carOne", carOne);
