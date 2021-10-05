//Declare a variable called age,  assign a value to age (for eg 25) and log it on the console

let myAge=30;
console.log(myAge);
//to see the type of variable
// console.log(typeof(age));

//Declare a variable called myname, assign a value to myname and log it on the console. 

let myName="Amrutha";
console.log(myName);

//Declare a constant greeting with a value of “Good day everyone”

const greeting = "Good Day";
console.log(greeting);

//Declare a boolean variable feelingGoodToday and assign a value to it

// var feelingGoodToday=1;
// console.log(Boolean(feelingGoodToday));
let feelingGoodToday=true;
console.log(feelingGoodToday);

//Concatenate the values above from 1 to 4 to create a sentence like “Good day everyone. My name is Maya and I am 25 years old and my feel good factor is true/false”. 

let myMessage = greeting + " My name is " + myName + " and I am " + myAge + " years old and my feel good factor is " + feelingGoodToday;
console.log(myMessage);
// Inside Console
// console.log(greeting,". My name is",myname,"and I am ",age," years old and my factor is",feelingGoodToday);

//Try the above with a template literal
let sentence2=`${greeting}". My name is"${myName}"and I am "${myAge}" years old and my factor is"${feelingGoodToday}`;
console.log(sentence2);

//Declare a variable lastname as undefined and log it on the console
let myLastname;
console.log(myLastname);

//Declare a variable address and assign a null value to it. Log  it on the console
let myAddress = null;
console.log(myAddress);

//Use typeOf to check the data type of the variables above
typeof(myAddress);

// Declare a variable x with a value of 10. Use the increment operation to increase its value by 1 and use decrement operator to decrease its value by 1.
let x = 10;
x++;
console.log(x);
x--;
console.log(x);

//Declare two numbers 10 and 5. Log the results of addition, subtraction, division and multiplication and modulus to the console
let firstNumber = 10;
let secondNumber = 5;
console.log(firstNumber + secondNumber);
console.log(firstNumber - secondNumber);
console.log(firstNumber * secondNumber);
console.log(firstNumber / secondNumber);
console.log(firstNumber % secondNumber);

//What will the following equation result in?
console.log("Bodmos Rule");
console.log((62 % 20) - 10 + 20 * 2);
let username;
username ? defaultName = username : defaultName = 'Stranger';
console.log(defaultName);
