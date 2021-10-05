// The purpose of "use strict" is to indicate that the code should be executed in "strict mode".
"use strict";

//FUNCTIONS

//To log “Good Afternoon” to the console - use a named function

function greet(){
    console.log('Declared in function : Good Afternoon');
}

greet();

//That takes the greeting as a parameter and logs the greeting to the console (use a simple function)

function greetParameter(greeting){
    console.log(`Value given with parameters : ${greeting}`);
}

greetParameter('Good Morning');

//That takes a number as a parameter and checks if it is divisible by 5.

const checkDivision=function (x) {
    if(x%5===0)
    {
        console.log(`${x} is divisible by 5`);
    }
    else{
        console.log(`${x} is not divisible by 5`);
    }
}

checkDivision(58);

//That takes two number parameters and adds them. Use return to return the result. - (Try fat arrow function)

const addTwoNum = (x,y) => {
    // let result = x+y;
    // return result; 
    return(x+y);
}

//OR
// const addTwoNum = (x,y) => (x+y);

console.log(`Sum of two given numbers : ${addTwoNum(3,5)}`);


//LOOPS

//To print “I am a happy programmer” 10 times (While Loop)

let count=1;
while(count<=10){
    console.log('I am a happy programmer');
    count++;
}

//FOR Loop
//Log all numbers from 1 to 20 

let allNumbers;

for(allNumbers=1;allNumbers<=20;allNumbers++){
    console.log(allNumbers);
}

// Loop through all numbers from 50 to 1 backwards and display their sum 

let sumOfNumbers=0;
for(allNumbers=50;allNumbers>=1;allNumbers--){
    sumOfNumbers += allNumbers;
}
console.log(`Sum of all the numbers from 50 to 1 : ${sumOfNumbers}`);

//ARRAYS

/* Declare and initialise an single-dimensional array with 5 names
a)	Log the table to the console*/

let names5 = ["Amrutha","Ravi","Lisa","Lavina","Lucy"]
console.table(names5);

// Use a for loop to loop through the array and log the array index and values

for (let index = 0; index < names5.length; index++) {
    console.log(`In index ${index} of the array value is ${names5[index]}`);
}

// Log the length of the array
console.log(`Length of the array declared is : ${names5.length}`);


//2 Dimensional Array

let array2Dimentional = [
    ['apple', 'orange', 'pear'],
    ['carrots', 'beans', 'peas'],
    ['cookies', 'cake', 'muffins', 'pie']
];
console.table(array2Dimentional);

