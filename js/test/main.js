var mocha = require('mocha'),
    chai = require('chai');

var assert = chai.assert;
var expect = chai.expect;

//--- your setup code goes here (i.e. create test instances of your Constructors)
var Person = require('../Person.js').Person;
var Student = require('../Student.js').Student;
//--- your setup code goes above here


//--- example tests
describe("Array", function(){ // a Constructor name
    describe("#indexOf()", function(){ // a method of said Constructor
        it("should return -1 when the value is not present", function(){
            expect([1,2,3].indexOf(5)).to.equal(-1);
            expect([1,2,3].indexOf(0)).to.equal(-1);
        })
    })


    describe("#filter()", function(){
        it("should always return an Array", function(){
            expect(
                typeof [].filter(function(){})
            ).to.equal("object");

            expect(
                [].filter(function(){})
            ).to.be.a("array");
        })

        it("should return only items that match the predicate", function(){
            var numbers = [0,1,2,3,4,5,6,7,8,9];

            var evens = numbers.filter(function(value){
                return value % 2 === 0;
            })

            expect(evens).to.deep.equal([0,2,4,6,8]);

            expect(evens.indexOf(3)).to.equal(-1);
        })
    })
})

//--- your tests go here
describe("Person", function(){
    var matt = new Person("Matt");
    describe("#constructor()", function(){

        var createPerson = function(name){
            return new Person(name);
        }

        it("should handle a first argument as a name", function(){
            expect(matt.name).to.equal("Matt");
        })
        it("should not throw an error if name give", function(){
            expect(createPerson.bind(null, "Mark")).to.not.throw(Error);
        })
        it("should throw an error if no name give", function(){
            expect(createPerson.bind(null, "")).to.throw(Error);
        })
    })
    describe("#setName()", function(){
        it("should overwrite the name", function(){
            matt.setName("Bob");
            expect(matt.name).to.not.equal("Matt");
            expect(matt.name).to.equal("Bob");
        })
    })
})

describe("Student", function(){
    describe("#constructor()", function(){
        var ralphy = new Student();
        it("should assign a default name if no name given", function(){
            expect(ralphy.name).to.equal("Ralphy");
        })
        it("should accept only non-empty strings for a name, otherwise name will be default", function(){
            expect(new Student(-1).name).to.equal("Ralphy");
            expect(new Student(NaN).name).to.equal("Ralphy");
            expect(new Student(new Date).name).to.equal("Ralphy");
            expect(new Student(/abc/).name).to.equal("Ralphy");
            expect(new Student(function(){}).name).to.equal("Ralphy");
        })
    })
})

describe("RegExp", function(){
    // String.match
    // String.replace
    describe("it should replace all matches of a RegExp with the second argument", function(){

        var testString = "aa bb aaaa bbbb Mary had a little lamb...";
        var myAssertion = "aaaa bbbb aaaaaaaa bbbbbbbb Mary had a littttle lamb...";

        expect(testString.replace(/your regex here/, "your replacement")).to.equal(myAssertion)

    })
})