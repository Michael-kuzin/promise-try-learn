let object = {
  name: "Вася",
  surname: 'Иванов',
  age: 20
}

let checkValue = function(obj,str) {
  if(obj[str]) {
    return true
  } else {
    return false
  }
}
console.log(checkValue(object,"surname"));


let checkValue2 = function(obj,str) {
  for (var prop in obj) {
    if(prop === str) {
      return true
    } else if(prop !== str) {
      continue
    }
  }
  return false
}
console.log(checkValue2(object,"surname"));

let checkValue3 = function(obj,str) {
  if(Object.keys(obj) === str) {
    return true
  } 
    return false
}

console.log(checkValue3(object,"surname"));
