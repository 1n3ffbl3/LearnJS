/*
    How to declare an object?

    var objectName = {}

    First word is declarative word (var/let/const) second part is objectName and then after the equal sign
    comes the body of the object
*/

var basicObject = {} //This is an empty object

/*
    Declaring fields/properties of object. We can specify the names of the object fields at the moment of declaration.
    Each field must have a default value, otherwise ReferenceError: "field" is not defined exception will be thrown, i.e.:

    INVALID:

    var obj = { name };

    VALID:
    var obj = { name: "Ksawery" };
*/

var basicObjectWithFields = {
    name: 'Marta'
}

console.log(basicObjectWithFields.name);

/*
    Adding a field to an object. We have two options to do that:
    Names in the curly brackets stands for templates.

    1. object.{field} = {value} i.e. basicObjectWithFields.surname = "secret";
    2. object[{field}] = {value} i.e. basicObjectWithFields['surname'] = "secret";
*/

basicObjectWithFields.age = 18;
console.log(basicObjectWithFields.age);

basicObjectWithFields['surname'] = 'secret';
console.log(basicObjectWithFields.surname);

/*
    If we want to check if given object has a specific field, we can just ask for this field i.e. obj.notExistingField 
    The result of this expression will be undefined in case the field is not existing, otherwise it will return the 
    value that is stored in this field.
*/

var emptyObject = {};

//It will display undefined
console.log(emptyObject.customField);

emptyObject.customField = "my value";
console.log(emptyObject.customField);