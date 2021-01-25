//Write a function called myAlphabetLength which console.logs the length of the array

var myAlphabet = ['A', 'B', 'C', 'D','E','F', 'G']; 
console.log(myAlphabet.length);
/* OR
function myAlphabetLength(A, B, C, D, E, F, G) {
} 
console.log(myAlphabetLength.length);*/

//Declare and initialize an array called 'Planets' with 5 string values.
var planets = ['Saturn','Neptune', 'Mars','Jupiter', 'Venus'];

// Console.log each item using index in the array of Planets

console.log(planets[0]);
console.log(planets[1]);
console.log(planets[2]);
console.log(planets[3]);
console.log(planets[4]);
/*OR
for (let i = 0; i < planets.length; i++) {
console.log(planets[i]) } */

//Declare and initialize an array called wowDatatypes which has 3 different data types (NOT OBJECTS) and console.log the values.

var wowDatatypes = ["true","food","36"];

wowDatatypes = true;   // wowDatatypes is now a boolean
console.log(typeof(counter)); // "boolean"

wowDatatypes = "food";   // wowDatatypes is now a string
console.log(typeof(wowDatatypes)); // "string"

wowDatatypes = 36; // wowDatatypesr is a number
console.log(typeof(counter)); // "number"

// Declare a variable hello. Assign a function to it returning 'Hello world!'.

   var Hello = function(){
   return 'Hello World';
};
var result= Hello();

//Console.log the hello function.
console.log(Hello);


