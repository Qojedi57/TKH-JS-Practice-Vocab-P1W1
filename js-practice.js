//Complete the instructions for each numbered problem. Each numbered problem is worth 10 points

//1. data types built-in methods, variables

//a. define a variable and give it a string value
let animalName = "Dolphin";

//b. define a variable and give it a number value
let age = 10;

//c. define a variable and give it a boolean value
let colorBlue = true;

//2. if else, ternary
//a. define a variable 'metrocard' and give it a value of 5
var metroCard = 5;
//b. write an if statement that has a condition to check if the value of metro card is greater than 2.75, and display the message "you have enough to ride the train", if the condition is true
if (metroCard > 2.75){
console.log("You have enough to ride the train!");
}
//c.write an else statement that displays the message "you do not have enough to pay fare sorry"
else{
console.log("You do not have enough to pay fare sorry!");
}
//d. write the above if/else statement again as a ternary
console.log((metroCard > 2.75) ? "You have enough to ride the train!" : "You do not have enough to pay fare sorry!");
//3. conditionals 2 (1 pt)
//a.  complete this codecademy project: https://www.codecademy.com/courses/introduction-to-javascript/projects/magic-eight-ball-1
//add a screenshot showing your completion of this project to the root folder of this repo

//4. functions
//a. write a function named helloWorld that returns the value 'Hello World!'
function HelloWorld(){
//b. console log the value returned from running the function helloWorld
console.log("Hello World!");
};
HelloWorld();
//3. arrays
//a. define a variable myArray and assign it to a value of an array. Give the array at least 5 elements
var vegetables = ["Brocoloi", "Spinach", "Cauliflower", "Onion", "Carrot"];

console.log(vegetables[0]);
//b. an array's index starts at: It starts at 0 its the numeric value for the first element 0 and so on each element has an index and that determines the position of that elenent in the array.   
//
//4. loops
//a. write a for loop that console logs even numbers starting at 10 and decrementing to 0
for (let i = 10; i > 0; i--){
    console.log(i);
}
//5. objects
//a. define a variable named 'bike'
let bike = {}
//b. assign an object to bike
'Bike Name' = 'Schwinn',
//c. give the object 3 properties: handlebars, color, wheels
handlebars: 'Drop Bars',
color: 'Silver',
wheels: 'Alloy Wheels',
//d. give each property a value
bike. Handle Bars = 'Flat Bars';
bike. Color = 'Blue';
bike. Wheels = 'Wire Spoked';

//6. Chessboard
/*Write a function that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.
var board = "";
var evenRow = "# # # #";
var oddRow = "# # # #";
for (var i = 0; i< 8; i++) {
    if (i % 2 == 0) board += evenRow + '\n';
    else board += oddROW = '\n';
}
console.log(board);
Passing this string to console.log should show something like this:

 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # #
When you have a program that generates this pattern, define a binding size = 8. 
**You do not need to accept user input this differs from Eloquent JS's directions 

read and refer to https://eloquentjavascript.net/02_program_structure.html  there are hints at the bottom of the page 
*/
