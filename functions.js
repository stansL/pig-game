/**
* Functions
*
**/

function calculateAge(yearOfBirth){
    var currentYear = 2019;
    return currentYear  - yearOfBirth;
    
}

console.log(calculateAge(1987));



function yearsToRetire(yearOfBirth, firstName){
    var age = calculateAge(yearOfBirth);
    var retirementAge = 65 - age;
    if(retirementAge > 0){ 
        console.log(firstName, 'retires in ', retirementAge,'years');
    }else{
        console.log(firstName, 'is already retired!');

    }
    
    
}


yearsToRetire(1947,'Stanslaus');


/********
* Function Statements and Expressions
*/

//Function declaration
//function jobQuestion(job,firstName){
//    
//}

//Function Expression
var jobQuestion = function(job, firstName){
    switch(job){
        case 'teacher':{
            return firstName + ' teaches programming';
        }
        case 'driver':{
            return firstName + ' drives the school van';

        }
        case 'designer':{
            return firstName + ' designs the school logos';

        }
        default:{
            return firstName + ' does something else';
        }
    }
    
}

console.log(jobQuestion('designer','James'));