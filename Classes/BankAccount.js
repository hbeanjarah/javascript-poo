let BankAccount = class {
  constructor(owner, balance) {
    this.balance = balance;
    this.owner = owner;
  }
  static sayWelcome() {
    console.log("hello");
  }
  showBalance() {
    console.log("Solde: " + this.balance + " Eur, appartient à " + this.owner);
  }

  deposit(amount) {
    this.balance += amount;
  }
  withDraw(amount) {
    this.balance -= amount;
  }
};

module.exports = BankAccount;
