;(function(m){

    "use strict";

    function Classroom(){
        this.students = [];
        this.numberOfStudents = 0;
    }

    Classroom.prototype = {
        addPerson: function(name){
            try {
                this.students.push(new Person(name))
            } catch(e){
                this.students.push(new Person("No Name Given."));
            }
            this.numberOfStudents++;
        }
    }

    m.Classroom = Classroom;

})(typeof module === "object" ? module.exports : window);