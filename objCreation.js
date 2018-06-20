makeConsoleLogSeparator();
console.log("obj creation");

// Each of the following options will create a new empty object:
 
let newObject1 = {};
 
// or
let newObject2 = Object.create( Object.prototype );
 
// or
let newObject3 = new Object();


let newObject4 = {};


console.log(newObject1);
console.log(typeof newObject1);


// so simple to add property:
newObject1.newPropertyJustLikeThat = "some text";
console.log(newObject1);


// ECMAScript 3 compatible approaches
 
// 1. Dot syntax
 
// Set properties
newObject2.someKey = "Tekst widoczny z perspektywy index.html";
 
// Get properties
let value2CreatedForNewObj2 = newObject2.someKey;
 
 
 
// 2. Square bracket syntax
 
// Set properties
// this possibility is nice, when we want to add property at runtime - and can generate
// new property, name from simple string
newObject3["someKey"] = "Hello World";
 
// Get properties
let value3ForNewObject3 = newObject3["someKey"];
 
 
 
// ECMAScript 5 only compatible approaches
// For more information see: http://kangax.github.com/es5-compat-table/
 
// 3. Object.defineProperty
 
// Set properties
Object.defineProperty( newObject4, "someKey", {
    value: "for more control of the property's behavior",
    writable: true,
    enumerable: true,
    configurable: true
});
 
// If the above feels a little difficult to read, a short-hand could
// be written as follows:
 
var defineProp = function ( obj, key, value ){
  var config = {
    value: value,
    writable: true,
    enumerable: true,
    configurable: true
  };
  Object.defineProperty( obj, key, config );
};
 
// To use, we then create a new empty "person" object
var person = Object.create( Object.prototype );
 
// Populate the object with properties
defineProp( person, "car", "Delorean" );
defineProp( person, "dateOfBirth", "1981" );
defineProp( person, "hasBeard", false );
 
console.log(person);
// Outputs: Object {car: "Delorean", dateOfBirth: "1981", hasBeard: false}
 
 
// 4. Object.defineProperties
 
// Set properties
Object.defineProperties( newObject4, {
 
  "someKeyExtra": {
    value: "Hello World",
    writable: true
  },
 
  "anotherKey": {
    value: "Foo bar",
    writable: false
  }
 
});


console.log(newObject4);
 
// Getting properties for 3. and 4. can be done using any of the
// options in 1. and 2.




// and now even some decorator:

// Usage:
 
// Create a race car driver that inherits from the person object
var driver = Object.create( person );
 
// Set some properties for the driver
defineProp(driver, "topSpeed", "100mph");
 
// Get an inherited property (1981)
console.log( driver.dateOfBirth );
 
// Get the property we set (100mph)
console.log( driver.topSpeed );


makeConsoleLogSeparator();