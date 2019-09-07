

function calculateAge(year) {
    console.log(2019 - year);
    console.log(this);
}
calculateAge(1987);
//calc(1987);

var calc = function(year) {
    console.log(2019 - year);
};
//calc(1987);

//console.log(test);
//var test = 24;
//console.log(test);


/****
The this keyword
*/

//console.log(this);


var john = {
    firstName: 'John',
    lastName: 'Doe',
    yearOfBirth: 1990,
    job: 'Designer',
    familyMembers: ['Jane','Peter','Sharon'],
    calculateAge: function(){
        console.log(this);        
        function innerFunction(){
            console.log(this);
        }
        innerFunction();
    }
};

//john.calculateAge();


var mike = {
    name: "Mike",
    yearOfBirth: 1984
};

mike.calculateAge = john.calculateAge;
mike.calculateAge();