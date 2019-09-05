var firstName = "Stanslaus";
var lastName = "Odhiambo";
var age = 32;
var fullAge = true;

//This is a single line comment
/*
A multiline comment here
That spans multiple lines
*/
console.log(firstName, lastName, age, fullAge);

//Demonstrating type coersion  - converted number to a string for concatanation
console.log(firstName + ' ' + age);


//Variable Mutation - changing the value/type of a variable
age = 'twenty eight';

console.log(firstName, lastName, age, fullAge);
console.log(firstName + ' ' + age);


/* Basic Math Operators */
var currentYear = 2019;
var yearJohn = currentYear - 32;
var yearMark = currentYear - 28;

console.log(yearMark);

//Falsy values: undefined, null, 0, '', NaN
//Truthy values: all values considered true...aka..non-falsy values

var height = 23;

if(height){
    console.log('Variable is defined');
}else{
        console.log('Variable has NOT been defined');
}





