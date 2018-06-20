makeConsoleLogSeparator();


console.log("car handler");


var myCar = new Car("Opel");
 
myCar.year = "2010";


console.log(typeof myCar);



// returns undefined...
/*
let justForTest = Car("Opel");
console.log(typeof justForTest);
*/



// strange, but it works...
/*
let myCar2 = StrangeCar("Volvo");
console.log(typeof myCar2);
console.log(myCar2.getInfo());
*/

// this also works - returning object inside (thanks to this keyword)
// let give a try with car builder
/*
let myCar3 = CarBuilder("Audi");
console.log(typeof myCar3);
console.log(myCar3.getInfo());
*/


makeConsoleLogSeparator();