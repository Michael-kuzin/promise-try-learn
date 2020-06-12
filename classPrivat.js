// class CoffeMachine {
//   _waterAmount = 0;
//
//   set waterAmount(value) {
//     if(value < 0) console.error("low");
//     this._waterAmount = value;
//   }
//
//   get waterAmount() {
//     return this._waterAmount;
//   }
//
//   constructor(power) {
//     this.power = power;
//     console.log(`create coffemachine,power: ${power}`);
//   }
//
// }
//
// let coffeMachine = new CoffeMachine(100);
//
// coffeMachine.waterAmount = -10;

// class CoffeMachine {
//
//   constructor(power) {
//     this._power = power;
//   }
//
//   get power() {
//     return this._power;
//   }
//
// }
//
// let coffeMachine = new CoffeMachine(100);
//
// console.log(`Power: ${coffeMachine.power}W`);
//
// coffeMachine.power = 25;

class CoffeMachine {
  #waterLimit = 200;

  // #checkWater(value) {
  //   if (value < 0) console.error("low");
  //   if (value > this.#waterLimit) console.error("to many");
  // }
}

let coffeMachine = new CoffeMachine();
console.log(coffeMachine.waterLimit)
