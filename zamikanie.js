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
// alert( counter() ); // 0
// alert( counter() ); // 1
//
// alert( counter2() ); // ?
// alert( counter2() ); // ?
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
// alert( counter.up() ); // ?
// alert( counter.up() ); // ?
// alert( counter.down() ); // ?
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
//     alert(`${phrase}, ${user}`);
//   }
// }
//
// sayHi();



function sum(a) {
  return function(b) {
    return a + b;
  }
}

console.log(sum(1)(2))
