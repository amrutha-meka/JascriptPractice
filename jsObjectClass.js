//create an object actor

let actor={
    name:"Mahesh",
    age:46,
    email:"maheshbabu@imdb.com",
    gender:"Male",
    "place of birth":"Hyderabad",
    availability:true,
    talent: ["acting", "dancing", "dialog"],
    // actorIntro(){}
    actorIntro:function(){
        // return `Hi my name is ${actor.name}`;
        return `Hi my name is ${this.name}`;
    },
    //Create three objects with name movies
    // movies:[object1,object2,object3]
    //movies:[{},{},{}]
    movies:[
        {title:"okadu",role:"Ajay",year:"2005"},
        {title:"Pokiri",role:"Police",year:"2010"},
        {title:"BAN",role:"Bharat",year:"2016"},
    ],  
    movieSummary(){
        let summary = `${this.name} movies \n`;
        let movie_list = "";
        actor.movies.forEach((movie) => {
        movie_list += ` ${movie.title} in ${movie.year} as ${movie.role}\n`;
     //console.log(movie_list);
   });
   return summary + movie_list;
 },


};
// console.log(typeof actor);
// console.log(actor);
console.log(actor.name);
console.log(actor.availability);
console.log(actor["place of birth"]);
console.log(actor.actorIntro());
console.log(actor.movieSummary());


//Array of objects

//Create an array of objects named ‘cars’ 
let cars = [
    {
      colour: "purple",
      type: "minivan",
      registration: new Date(),
      capacity: 7,
    },
    {
      colour: "red",
      type: "station wagon",
      registration: new Date(),
      capacity: 5
    }
];
//to print cars with for loop
for(let i=0;i<cars.length;i++){
    console.log(cars[i]);
}

// console.log(cars);

//Add a new car with these details. colour=silver, type=sedan, registration= today’s date and capacity=5
let newcar = {
    colour: "silver",
    type: "sedan",
    registration: new Date(),
    capacity: 5,
};
cars.push(newcar);
//to print cars with forEach loop
cars.forEach((car)=>console.log(car));
// console.log(cars);
console.log("-----------")
//Remove the last object from the array and log the array

cars.pop(newcar);
//to print cars with forEach loop
cars.forEach((car)=>console.log(car));
console.log("-----------");
    
//Remove the first object from the array and log the array

cars.shift(newcar);
//to print cars with forEach loop
cars.forEach((car)=>console.log(car));
console.log("-----------");

//Add a new car with these details. colour=blue, type=hatch, registration= today’s date and capacity=5

newcar = {
    colour: "blue",
    type: "hatch",
    registration: new Date("2020-12-12"),
    capacity: 5,
};

cars.push(newcar);
//to print cars with forEach loop
cars.forEach((car)=>console.log(car));
// console.log(cars);
console.log("-----------");
   
//Log the length of the array 
console.log(`Length of cars array : ${cars.length}`);

//Log the colour of the first car in the array
console.log(`Color of first car : ${cars[0].colour}`);

//Loop through the array to log the types of 

cars.forEach((car)=>console.log(`Types of cars in array : ${car.type}`));

console.log("-----------");
//classes

class Box {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
      // Method
    calcArea() {
      return this.height * this.width;
    }
    // Method
   calcPerimeter() {
      return this.height * 4;
    }
}
const square = new Box(5,5);
console.log(square.calcArea()); 

//Activity
//Declare a class Person
class Person {
    //A constructor accepting firstname and lastname. 
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
    //A getter that returns the full name of the person.
    personIntro() {
      return `Hi my name is , ${this.firstName} ${this.lastName}`;
    }

   }
   const person = new Person("Amrutha", "Meka");
   console.log(person.firstName);
   console.log(person.personIntro());
   