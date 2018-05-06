/*
    Functions in objects.

    To declare a function in we have to follow convention:

    {nameOfFunction}: function({parameters}) {
        //body
    }

    As you can see, it is very similar to declaring a field in the object. The difference
    is in this, that you type function keyword after the colon character (:), and its parameters in the open brackets 
    (at this point in time I assume that you know how the structure of function looks like). 
*/

var objectWithFunction = {

    hello: function() {
        console.log("Hello, Word!");
    }

};

/*
    Accessing fields from object functions.
*/

var objectWithFieldAndFunction = {

    name: "John",

    getName: function() {
        return this.name;
    },

    setName: function(name) {
        this.name = name;
    }

};

console.assert("John" == objectWithFieldAndFunction.getName(), "Name should be equal John");

let newName = "John Doe";
objectWithFieldAndFunction.setName(newName);
console.assert(newName == objectWithFieldAndFunction.getName(), "Name should be changed");

/*
    Get all fields of an object.
*/

console.log(Object.keys(objectWithFieldAndFunction));

/*
    More complex usage of functions and objects. Our goal is to create a Activity Tracker.
    Activity Tracker should be an object that provide following functionality:

        - Add an activity to the list of activities
        - Remove an activity from the list of activities
        
    
*/

var activityTracker = {

};