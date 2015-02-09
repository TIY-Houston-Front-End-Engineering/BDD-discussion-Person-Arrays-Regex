;(function(m){

    "use strict";

    function Person(name){
        if(!name) {
            throw new Error("Name not given to this Person.")
        }
        this.name = name;
    }

    Person.prototype = {
        setName: function(name){
            this.name = name;
        }
    }

    m.Person = Person;

})(typeof module === "object" ? module.exports : window);