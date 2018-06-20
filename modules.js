makeConsoleLogSeparator();

var myModule = {
 
    myProperty: "someValue",
   
    // object literals can contain properties and methods.
    // e.g we can define a further object for module configuration:
    myConfig: {
      useCaching: true,
      language: "en"
    },
   
    // a very basic method
    saySomething: function () {
      console.log( "Where in the world is Paul Irish today?" );
      document.getElementById("modules-2").textContent = "Some extra side effect";


      return "Additionaly some text for html, becuase this function in previous version had no return statement";
    },
   
    // output a value based on the current configuration
    reportMyConfig: function () {
      console.log( "Caching is: " + ( this.myConfig.useCaching ? "enabled" : "disabled") );
    },
   
    // override the current configuration
    updateMyConfig: function( newConfig ) {
   
      if ( typeof newConfig === "object" ) {
        this.myConfig = newConfig;
        console.log( this.myConfig.language );
      }
    }
  };

  makeConsoleLogSeparator();
   
  // Outputs: Where in the world is Paul Irish today?
  myModule.saySomething();
   
  // Outputs: Caching is: enabled
  myModule.reportMyConfig();
   
  // Outputs: fr
  myModule.updateMyConfig({
    language: "fr",
    useCaching: false
  });
   
  // Outputs: Caching is: disabled
  myModule.reportMyConfig();

  makeConsoleLogSeparator();




  var myNamespace = (function () {
 
    var myPrivateVar, myPrivateMethod;
   
    // A private counter variable
    myPrivateVar = 0;
   
    // A private function which logs any arguments
    myPrivateMethod = function( foo ) {
        console.log( foo );
    };
   
    return {
   
      // A public variable
      myPublicVar: "foo",
   
      // A public function utilizing privates
      myPublicFunction: function( bar ) {
   
        // Increment our private counter
        myPrivateVar++;
   
        // Call our private method using bar
        myPrivateMethod( bar );
   
      },

      getVar: function() {
          return myPrivateVar;
      }
    };
   
  })();


  makeConsoleLogSeparator();