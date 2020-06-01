class User {
  constructor(name,surname) {
    this.name = name,
    this.surname = surname
    console.log(constructor)
  }
  who() {
    console.log(this.name)
  }
  some() {
    console.log(constructor)
  }
  static say() {
  return console.log("hi")
  }
}
let user = new User("Mike","Kuzin")
User.say();
user.who();
user.some();








class Promise {
  constructor(caalback) {
    caalback(resolve,reject)
  }

  resolve(payload) {
    console.log(payload)
  }

  reject(payload) {
    console.log(payload)
  }

  then(caalback) {
    caalback(payload) {

    }
  }

  catch(caalback) {
    caalback(payload) {

    }
  }
}
