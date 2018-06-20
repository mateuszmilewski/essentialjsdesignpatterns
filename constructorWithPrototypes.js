makeConsoleLogSeparator();

console.log("constructor with prototypes");

function Car2( model, year, miles ) {
 
    this.model = model;
    this.year = year;
    this.miles = miles;
   
  }
   
   
  // Note here that we are using Object.prototype.newMethod rather than
  // Object.prototype so as to avoid redefining the prototype object
  Car2.prototype.toString = function () {
    return this.model + " has done " + this.miles + " miles";
  };

  Car2.prototype.toString2 = function() {
      return "Here we have a car: " + this.model + ", which already pass " + this.miles + " miles";
  }
   
  // Usage:
   
  var civic = new Car2( "Honda Civic", 2009, 20000 );
  var mondeo = new Car2( "Ford Mondeo", 2010, 5000 );
   
  console.log( civic.toString() );
  console.log( mondeo.toString() );

  makeConsoleLogSeparator();