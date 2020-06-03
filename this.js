// function makeUser() {
//   return {
//     name: "Джон",
//     ref() {
//       return this;
//     }
//   };
// };
//
// let user = makeUser();
//
// alert( user.ref().name );
//
// let calculator = {
//   sum() {
//     return this.a + this.b;
//   },
//
//   mul() {
//     return this.a * this.b;
//   },
//
//   read() {
//     this.a = +prompt('a?', 0);
//     this.b = +prompt('b?', 0);
//   }
// };
//
// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() );
//
//
// let ladder = {
//   step: 0,
//   up() {
//     this.step++;
//     return this;
//   },
//   down() {
//     this.step--;
//     return this;
//   },
//   showStep() {
//     alert( this.step );
//     return this;
//   }
// }
//
// ladder.up().up().down().up().down().showStep();


//  function getPrice() {
//   console.log(this.price);
//   return this
// }
//
// function getName() {
//   console.log(this.name);
//   return this
// }


// const prod1 = {
//   name: 'Intel',
//   price: 100,
//   getPrice,
//   getName,
//   info: {
//     information: ["2.3ghz"],
//     getInfo: function() {
//       console.log(this.information);
//     },
//   },
// };
// prod1.getPrice();
// prod1.info.getInfo();
// prod1.getName();
//
// const prod2 = {
//   name: 'AMD',
//   price: 50,
//   getPrice,
// };
//
// prod2.getName = prod1.getName
//
// let str = "Hello world"
//
// const reversstr = str
//     .split('')
//     .reverse()
//     .join('');
// console.log(reversstr);
//
// const prod3 = {
//   name: 'ARM',
//   price: 200,
//   getPrice,
//   getName,
// };
//
// prod3
//   .getName()
//   .getPrice();


// let chevy = {
//   make: "chevy",
//   model: "aveo",
//   year: 1955,
//   color: "red",
//   passengers: 4,
//   convertible: false,
//   mileage: 8000,
//   started: false,
//   fuel: 0,
//   light: function() {
//     console.log('Light on');
//   },
//   start: function() {
//     if(this.fuel <= 0) {
//       this.started = false
//       console.log("you must get fuel")
//     } else {
//     this.started = true;
//    }
//   },
//   stop: function() {
//     this.started = false;
//   },
//   drive: function() {
//     if(this.started){
//     if (this.fuel > 0) {
//       console.log(this.make + " " + this.model + " " + "Go");
//       this.fuel = this.fuel - 1;
//     } else {
//       console.log("You must  get fuel")
//       this.stop();
//     }
//   } else {
//     console.log("you must turn car")
//   }
// },
//   addFuel: function(amount) {
//     this.fuel = this.fuel + amount;
//   }
// };
//
// chevy.start();
// chevy.drive();
// chevy.addFuel(2);
// chevy.start();
// console.log(chevy.fuel);
// chevy.drive();
// console.log(chevy.fuel);
// chevy.drive();
// chevy.stop();
// console.log(chevy.fuel);







// window.hello = "hello";
// console.log(this.hello);

// let helloWorld = function () {
//   console.log(this);
// };
//
// helloWorld();
//
// let human = {
//   name: 'Alexa',
//   getName: function() {
//     console.log('getName',this.name);
//   }
// };
//
// human.getName();
//
// let Mail = function () {
//   this.letter = "this is my letter";
//   console.log(this);
// };
//
// Mail.prototype.getLetter = function () {
//   console.log(this);
// };
//
// let mail = new Mail();
// mail.getLetter();


// let sport = {
//   tournament: "The Masters",
//   players: [
//     {
//       name: "Wood",
//       age: 37
//     },
//     {
//       name: "Mike",
//       age: 43
//     }
//   ],
//   show: function() {
//     console.log(this);
//     let self = this;
//     this.players.forEach( person => {
//       console.log(person.name + ' is plaing ' + self.tournament);
//     });
//   }
// }
//
// sport.show();







// function Calculator() {
//   this.read = function() {
//      this.a = 1
//      this.b = 1
//    };
//   this.sum = function() {
//        return this.a + this.b;
//      };
//      this.mul = function() {
//        return this.a * this.b;
//      };
// }



function Accumulator(startingValue) {
  this.value = startingValue;
  this.read = function() {
     this.value += 1
      console.log(this.value);
   };
}
let accumulator = new Accumulator(1);
// console.log(accumulator.value)
accumulator.read();
accumulator.read();
accumulator.read();
// console.log(accumulator.value)
