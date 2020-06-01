let user = {};
user.name = "Jhon";
 user.surname = "Smith";
user.name = "Pete";
delete user.name;


function isEmpty(obj) {
  for (key in obj) {
      return false
    }
  return true
}
// console.log(isEmpty(user))


let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

function allsal(obj) {
  let sum
  for (key in obj) {
    let sum  obj[key] + obj[key]
      return sum
  }
  return 0
}
console.log(allsal(salaries))
