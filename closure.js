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



// function sum(a) {
//   return function(b) {
//     return a + b;
//   }
// }
//
// console.log(sum(1)(2))
//
//
//
// var colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];
// var p_collect = document.getElementsByTagName('p');
//
//
// var f1 = function() {
// 	var k = 0;
// 	return function() {
// 		this.style.color = colors[k];
// 		k++;
// 		if (k == colors.length){k=0};
// 	}
// }
//
// for (var i = 0; i < p_collect.length; i++) {
// 	p_collect[i].addEventListener('click', f1());
// }



//
// let obj = {
//   number:2,
//   func:(function () {
//         let num = this.number;
//         let a = 1;
//         let b = 1;
//         return function() {
//           for(let i = 1;i <= num; i++) {
//             let c = a + b;
//             a = b;
//             b = c;
//           }
//           num = b;
//           return num;
//         }
//   }())
// }
// console.log(obj.func());
// console.log(obj.func());
// console.log(obj.func());
// console.log(obj.func());
// // console.log(obj.func());
// console.log(obj.func());




// if (!("a" in global)) {
//     var a = 1;
// }
// console.log(a);



// var b = function a(x) {
//     x && a(--x);
// };
// console.log(a);

var users = [{
  name: "Вася",
  surname: 'Иванов',
  age: 20
}, {
  name: "Петя",
  surname: 'Чапаев',
  age: 25
}, {
  name: "Маша",
  surname: 'Медведева',
  age: 18
}];

function byField(field) {
    return function(a, b) {
      return a[field] > b[field] ? 1 : -1;
    }
  }

users.sort(byField('name'));
users.forEach(function(user) {
  console.log(user.name)
});

users.sort(byField('age'));
users.forEach(function(user) {
  console.log(user.name)
});




function inBetween(a, b) {
  return function(x) {
    return x >= a && x <= b;
  };
}

let arr = [1, 2, 3, 4, 5, 6, 7];
alert( arr.filter(inBetween(3, 6)) );


function inArray(arr) {
  return function(x) {
    return arr.includes(x);
  };
}

let arr = [1, 2, 3, 4, 5, 6, 7];
alert( arr.filter(inArray([1, 2, 10])) );
