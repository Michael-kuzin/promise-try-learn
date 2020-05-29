let func = function(p) {
  return p.then((value) => {

  })
}
let promise = new Promise((resolve,reject) => {
  resolve('somthing')
})


let p1 = new Promise((resolve,reject) => {
  setTimeout(() => {
    resolve(func(promise))
  },1000)
});

let p2 = new Promise((resolve,reject) => {
  resolve("p2")
});

let p3 = new Promise((resolve,reject) => {
    reject("its reject1")
});

let p4 = new Promise((resolve,reject) => {
  resolve("its resolve")
});


let p5 = new Promise((resolve,reject) => {
    reject("its reject2")
});


Promise.all([
  p1,
  p2,
  p3,
  p4,
  p5
]).then((value) => {
  setTimeout(() =>  {
    console.log(value)
  },2000)
}).catch((error) => {
  setTimeout(() =>  {
    console.log(error)
  },2000)
})



// p1.finally(() => {
//   console.log(this);
// });
