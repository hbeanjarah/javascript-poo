let Car = require("./Vehicles");

let Model = class extends Car {
  constructor(name, mod) {
    super(name);
    this.mod = mod;
  }

  showModel() {
    return this.getDetails();
  }
};

module.exports = Model;
