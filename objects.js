/*****************************
*
*Objects and Properties
*/


//Object literal syntax
var john = {
    firstName: 'John',
    lastName: 'Doe',
    yearOfBirth: 1990,
    job: 'Designer',
    familyMembers: ['Jane','Peter','Sharon']
}


console.log(john);
console.log(john.firstName);
console.log(john.familyMembers);
console.log(john["yearOfBirth"]);

//new Object syntax
var jane = new Object();
jane.firstName= 'Jane';
    jane.lastName= 'Doe';
    jane.yearOfBirth= 1990;
    jane.job= 'Designer';
    jane.familyMembers= ['Jane','Peter','Sharon'];


var janeDoe = new Array();
janeDoe[0] = 'Jane';
janeDoe[1] = 'Marketer';
janeDoe[2] = 32;

console.log(jane);
console.log(janeDoe);