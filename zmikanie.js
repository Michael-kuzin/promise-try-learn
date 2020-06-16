// let name = "John";
//
// function sayHi() {
//   console.log("Hi, " + name);
// }
//
// name = "Pete";
//
// sayHi();
//
// function makeWorker() {
//   let name = "Pete";
//
//   return function() {
//     console.log(name);
//   };
// }
//
// let name = "John";
//
// let work = makeWorker();
//
// work();
//
//
//
//
// function makeCounter() {
//   let count = 0;
//
//   return function() {
//     return count++;
//   };
// }
//
// let counter = makeCounter();
// let counter2 = makeCounter();
//
// console.log( counter() ); // 0
// console.log( counter() ); // 1
//
// console.log( counter2() ); // ?
// console.log( counter2() ); // ?
//
//
//
//
//
// function Counter() {
//   let count = 0;
//
//   this.up = function() {
//     return ++count;
//   };
//   this.down = function() {
//     return --count;
//   };
// }
//
// let counter = new Counter();
//
// console.log( counter.up() ); // ?
// console.log( counter.up() ); // ?
// console.log( counter.down() ); // ?
//
//
//
//
//
// let phrase = "Hello";
//
// if (true) {
//   let user = "John";
//
//   function sayHi() {
//     console.log(`${phrase}, ${user}`);
//   }
// }
//
// sayHi();



// function sum(a) {
//   return function(b) {
//     return a + b;
//   }
// }
//
// console.log(sum(1)(2))




function counter() {
  this.a = 0;
  const func = function() {
     return this.a++
  }
  // this.a = undefined;
  return func;
}


let counter1 = counter();
console.log(counter1());
console.log(counter1());
console.log(counter1());

let counter2 = counter();
console.log(counter2());
