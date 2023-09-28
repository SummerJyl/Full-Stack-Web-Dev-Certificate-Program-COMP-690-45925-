// Larger or Smaller?
// Usage: Use simple conditional statements
// Create an application that accepts two integers within two separate prompts. Then, display only the larger of the two 
// within the browser window. Don’t forget to handle the fact that the two could be equal.let num = int.32.Parse('Enter a number beyween 1 and 10')

if (num === '5')  {}
var num1, num2;
num1 = window.prompt("Input the First integer", "0");
num2 = window.prompt("Input the second integer", "0");
if(parseInt(num1, 10) > parseInt(num2, 10)) 
{ 
console.log("The larger of "+ num1+ " and "+ num2+ " is "+ num1+ ".");
 }   
else
if(parseInt(num2, 10) > parseInt(num1, 10)) 
 {
console.log("The larger of "+ num1+" and "+ num2+ " is "+ num2+ ".");
 }                  
else
{
console.log("The values "+ num1+ " and "+num2+ " are equal.");
}

// The Word Translator
// Usage: Use simple conditional statements
// Create an application that prompts the user for a language code ("es", "de", "en", and "fr"). If they enter one of the four codes, display the translated version of "Hello World" for the given language within the console window. If the user enters anything but those four language codes, the application should default to English. The result should be (for example):Hello World translated in French is: Bonjour le monde
// let en = prompt(‘Hello World’);
// let es = prompt('Hola Mundo');
// let de = prompt(‘Hallo Wereld’);
// let fr = prompt;(‘Bonjour le monde’)

// console.log(prompt('Please enter your language code’));  
// let en  =  Language(prompt(‘Hello World’));
//  {
//     document.write(“Hello World);
// let es  =  Language(prompt(‘Hola Mundo’));
//  {
//     document.write(“Hola Mundo);
// let de  =  Language(prompt(‘Hallo Wereld’));
//  {
//     document.write(“Hallo Wereld);
// let fr  =  Language(prompt(‘Bonjour le monde’));
//  {
//     document.write(‘Bonjour le monde’);
//  }   else {
//      console.log(‘Hello World.’)
//  }


// The “Coin Flip” Game
// Usage: Use nested conditional statements
// In this part of the assignment you will explore what you’ve learned so far about variables, prompts, conditionals, operators, math, and more to create a “coin flip game”. To complete the game follow the steps outlined below:
// 1.   Begin your application by creating a variable called coinFlip and set it equal to a random number. You will have to use a Math method to get this number: let randomNum = Math.round(Math.random());
// 2.   Prompt the user to select “Heads or Tails” and set the result to a new variable called choice.
// 3.   Use a conditional to check the result of the coin flip. If it’s less than a certain number, it will be heads. If it’s greater than a certain number, it will be tails. 
// 4.   If the result is heads and the user selects heads, display the following message within an alert: The flip was heads and you chose heads...you win!
// 5.   If the result is heads and the user selects tails, display the following message within an alert: The flip was heads but you chose tails...you lose!
// 6.   If the result is tails and the user selects heads, display the following message within an alert: The flip was tails but you chose heads...you lose!
// 7.   If the result is tails and the user selects tails, display the following message within an alert: The flip was tails and you chose tails...you win!

// document.write('<h2>Welcome to the Coin Flip Game</h2>')
// console.log(prompt(‘Select Heads or Tails));
// var coinFlip = Math.round(Math.random()) + 1;
// var choice = prompt("Heads or Tails");
// if (coinFlip == 1) {
//    var flipResult = "heads";
// } else {
// var flipResult = "tails";
// }
// if (flipResult == choice) {
// if (flipResult == "heads") {
//        alert("The flip was heads and you chose heads...you win!");
//    } else {
//        alert("The flip was tails and you chose tails...you win!");
//    }
//    } else {
//    if (flipResult == "heads") {
//        alert("The flip was heads and you chose tails...you lose!");
//    } else {
//        alert("The flip was tails and you chose heads...you lose!");
//    }


// The “Grade Assigner” Application
// Usage: Use else if statements
// 1.   Collect the a number between 1 and 100 from the user. 
// 2.   Make sure that number is between 1 and 100, if it is not, let the user know that only numbers between 1 and 100 are accepted.
// 3.   If the score is between 60 and 69, write out “You received a D” into the console.
// If the score is between 70 and 79, write out “You received a C” into the console.
// If the score is between 80 and 89, write out “You received a B” into the console.
// If the score is between 90 and 100, write out “You received an A” into the console.
// If the score is less than 60, write out “You received an F” into the console.

// document.write('<h2>How Grades are assigned</h2>')
// alert(Only numbers between 1 and 100 are accepted.')
//  let grade  =  Number(prompt("Enter the student\'s grade"));
//  else if (grade <= 60) {
//    document.write("You received an F!”);
//  (grade  >= 60 - 69) {
//     document.write(“You received a D”);
//  else if (grade >= 70 - 79) {
//    document.write("You received a C");
//  else if (grade >= 80 - 89) {
//    document.write(“You received a B");
//  (grade  >= 90 - 100) {
//     document.write(“You received an A");
//  }