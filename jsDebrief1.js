//Checkpoint 1
// 1st question

let skyColor = "blue"; 
let carColor = "blue";
let hairColor = "black";
console.log(skyColor === carColor);
console.log(skyColor === hairColor);
console.log(skyColor !== hairColor);

// 2nd question

let x=6;
let y=3;
console.log(x < 10 && y > 1);
console.log(x == 5 || y == 5);
console.log(!(x == y) );

//Checkpoint 2
//3rd Question

let question3=25;
if(question3<20){
    console.log('Your number is less than 20.');
}
else
{
    console.log('Your number is greater than or equal to 20'); 
}

//4th question

let question4=33;
if(question4%2==0){
    console.log('Given number is even');
}
else{
    console.log('Given number is odd');
}

//5th question

let question5=0;
if(Math.sign(question5)==1)
{
    console.log('Given number is positive');
}
else if(Math.sign(question5)==-1){
    console.log('Given number is negative');
}
else{
    console.log('Given number is Zero');
}

//Checkpoint 3
//6th question

let question6A=10;
let question6B=18;
(question6A>question6B) ? console.log('A>B'): ((question6A<question6B) ? console.log('A<B') : console.log('A=B'));

//7th question

let question7='June';
if(question7==='January'|| question7==='February'||question7==='December' )
{
    console.log('Given month is Summer in Australia');
}
else if(question7==='April'|| question7==='May'||question7==='March' )
{
    console.log('Given month is Autumn in Australia');
}
else if(question7==='June'|| question7==='July'||question7==='August' )
{
    console.log('Given month is Winter in Australia');
}
else{
    console.log('Given month is Rainy in Australia');
}

//8th Question

let question8='Gre';
switch(question8.toLowerCase())
{
    case 'green':
        console.log('You should go!');
        break;
    case 'red':
        console.log('You should stop!');
        break;
    case 'orange':
            console.log('You should go faster!');
            break;
    default:
        console.log('wrong input');
         break; 
}

//9th Question

let question9 = 60;
switch (true) {
    case question9 < 50:
            console.log("Fail");
            break;

    case question9 < 70 && question9 >= 50:
            console.log("Pass");
            break;

    case question9 < 86 && question9 >= 70:
            console.log("Credit");
            break;
         
    case question9 >= 86:
            console.log("Distinction");
            break;
         
    default:
            console.log("Please enter a mark");
            break;
}

// Bonus Exercise


         

