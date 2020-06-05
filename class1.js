// const animal = {
//   name: "Animal",
//   age: 5,
//   hasTail: true
// }

class Animal {

  constructor(options) {
    this.name = options.name
    this.age = options.age
    this.hasTail = options.hasTail
  }

  voice() {
    console.log("I am Animal!")
  }
}

// const animal = new Animal({
//
// })

class Cat extends Animal {
  static type = "CAT"

  constructor(options) {
    super(options)
    this.id = options.id;
    this.color = options.color
  };

  voice() {
    super.voice()
    console.log("I am Cat")
  }
};


let pro = [];

 for ( let i = 0; i < 100; i++) {
   pro.push( new Cat({
     id: i,
    name: "Cat",
    age: 7,
    hasTail: true,
    color: "black"
})) }
console.log(pro)

















// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('foo');
//   }, 300);
// });
//
// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('foo');
//   }, 300);
// }).then((value) => {
//   console.log(value);
// });
