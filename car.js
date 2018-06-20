makeConsoleLogSeparator();

console.log("car");

// A car "class"
function Car( model ) {
 
  this.model = model;
  this.color = "silver";
  this.year = "2012";
 
  this.getInfo = function () {
    return this.model + " " + this.year;
  };
 
}

// A car "class"
// strange, but it works...
// using without word new
function StrangeCar( model ) {
 
    this.model = model;
    this.color = "silver";
    this.year = "2012";
   
    this.getInfo = function () {
      return this.model + " " + this.year;
    };



    return this;
}

// this is also like experimental thing for me
// but seems to be that it working quite good
// another possibiity to create object w/o using new keyword
let CarBuilder = ((model) => {
    this.model = model;
    this.color = "black";
    this.year = "2016";
   
    this.getInfo = (() => {
      return this.model + " " + this.year;
    });



    return this;
});
  


makeConsoleLogSeparator();