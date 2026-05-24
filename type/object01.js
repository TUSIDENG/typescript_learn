"use strict";
// Declare a variable called person with a specific object type annotation
let person;
// Assign person to an object with all the necessary properties and value types
person = {
    name: 'Danny',
    location: 'UK',
    isProgrammer: true,
};
person.isProgrammer = 'Yes'; // ERROR: should be a boolean
console.log(person);
person = {
    name: 'John',
    location: 'US',
};
console.log(person);
// ERROR: missing the isProgrammer property
