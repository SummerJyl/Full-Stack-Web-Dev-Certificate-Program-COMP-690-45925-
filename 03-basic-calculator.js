// In this part of the assignment you will build a simple calculator using the skills you’ve acquired in regards to functions. You will ask the user for a number, a
// second number, and then finally ask them what kind of operation they want to perform, either add, subtract, multiply, or divide. Depending on what they select, you
// will perform that operation. To complete this part of the assignment follow the steps outlined here:

// ADD A FUNCTION CALLED CALCULATE
// Create a function that will serve as the main calculation logic of your application. This function should be called calculate and will accept three parameters: x, y,
// and operation.
// function calculate() {
//     const display = document.getElementById('display');
//     try {
//       display.value = eval(display.value);
//     } catch (error) {
//       display.value = 'Error';
//     }

// COLLECT FIRST NUMBER FROM USER
// In the script, prompt the user for a number and store that in a variable. Convert that to a number.
// let num1 = prompt('Enter first  number: '); 
// let num1 = parseInt(x); 

// // COLLECT SECOND NUMBER FROM USER
// Then, prompt the user for a second number and store that in a variable. Convert that to a number.
// let num2 = prompt('Enter second number: '); 
// let num2 = parseInt(y);

// // COLLECT OPERATION TO PERFORM (+,-,*,/) FROM USER
// Next, prompt the user for the operation they would like to perform (add, subtract, multiply, divide) and store that in a variable.
// const operator = prompt('Enter operator ( either +, -, * or / ): ');

// Finally, pass the three parameters into the calculate function to return the result of the calculation. You'll need to add a switch statement inside the calculate
// function to evaluate the operation and perform the appropriate calculation on the x and y numbers based on the operation passed in. 
// let result;

// const num1 = parseFloat(prompt('Enter first number: '));
// const num2 = parseFloat(prompt('Enter second number: '));

// switch(operator) {
//     case '+':
//          result = num1 + num2;
//         console.log(`${num1} + ${num2} = ${result}`);
//         break;

//     case '-':
//          result = num1 - num2;
//         console.log(`${num1} - ${num2} = ${result}`);
//         break;

//     case '*':
//          result = num1 * num2;
//         console.log(`${num01} * ${num2} = ${result}`);
//         break;

//     case '/':
//          result = num1 / num2;
//         console.log(`${num1} / ${num2} = ${result}`);
//         break;
// }

// CALL THE FUNCTION AND RETURN THE RESULT WITHIN AN ALERT
// Display the result of the calculation within an alert.
// alert(`${num1} ${operator} ${num2} = ${result}`);

// Figure out how to make it so that if the user doesn’t enter either add, subtract, multiply, or divide, they are displayed an alert message telling them that. Then
// you’ll have to rerun the application so that the application asks the user for the numbers and operation once more. You’ll have to add this functionality within a do
// while loop similarly how the labs were done in the previous lecture.

// operator = prompt('Enter operator ( either +, -, * or / ): ');
// else {
//     return "you must input either +, -, * or / ";
// do {
//     let num1 = prompt('Enter first  number: '); let num1 = parseInt(x);
//     let num2 = prompt('Enter second number: '); let num2 = parseInt(y);
//         if const operator = prompt('Enter operator ( either +, -, * or / ): '); {
//             const num1 = parseFloat(prompt('Enter first number: '));
//             } else {
//                 alert('One or both entries are invalid.');
//     }
//     again = prompt('Run again? (y or n)', 'y');
//         } while (again === 'y');
// console.log('Application has exited.')
