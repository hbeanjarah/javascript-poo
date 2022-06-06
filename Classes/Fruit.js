let Fruit = class {
  constructor(name, category, weight, price) {
    this.name = name;
    this.category = category;
    this.weight = weight;
  }

  divideWeightByNumber(number) {
    return this.weight / number;
  }

  getName() {
    return `Fruit name : ${this.name}`;
  }
};

module.exports = Fruit;
