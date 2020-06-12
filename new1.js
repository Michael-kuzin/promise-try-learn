var Car = (function() {
  // Create a store to hold the private objects.
 var privateStore = {};
  var uid = 0;

  function Car(mileage) {
    this.id = uid;
    privateStore[this.id = ++uid] = {};
    privateStore[this.id].mileage = mileage || 0;
    this.drive =  function(miles) {
    if (typeof miles == 'number' && miles > 0)
      privateStore[this.id].mileage += miles;
    else
     throw new Error('drive can only accept positive numbers');
    };
    this.readMileage = function() {
    return privateStore[this.id].mileage;
  };
  }
  return Car;
}());
let car = new Car();
 console.log(car.id);
 console.log(car.readMileage());
 car.drive(100);
 console.log(car.readMileage());
 console.log(car.miles);
let car1 = new Car();
console.log(car1.id);
