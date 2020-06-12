// class CoffeeMachine {
//   _waterAmount = 0;
//
//   set waterAmount(value) {
//     if (value < 0) console.error("Отрицательное количество воды");
//     this._waterAmount = value;
//   }
//
//   get waterAmount() {
//     return this._waterAmount;
//   }
//
//   constructor(power) {
//     this._power = power;
//   }
//
// }
//
// let coffeeMachine = new CoffeeMachine(100);
//
// coffeeMachine.waterAmount = -10;


class Worker {
  constructor(name,surname,rate,days) {
    this.name = name,
    this.surname = surname,
    this.rate = rate,
    this.days = days
  }

  getSalary() {
    return this.rate * this.days
  }
}

let worker = new Worker("Mike","Kuzin",100,30);
console.log(worker.getSalary())
