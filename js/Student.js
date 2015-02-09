;(function(m){

    "use strict";

    function Student(name){
        if( (typeof name !== "string") || !name){
            this.name = "Ralphy";
        } else {
            this.name = name;
        }
    }

    Student.prototype = new Person();

    m.Student = Student;

})(typeof module === "object" ? module.exports : window);