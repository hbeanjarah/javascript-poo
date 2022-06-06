let Vehicles = class {
  constructor(name, maker, engine) {
    this.name = name;
    this.maker = maker;
    this.engine = engine;
  }

  getDetails() {
    return `the details of the vehicle are : ${this.name} ${this.maker}`;
  }
};

module.exports = Vehicles;
