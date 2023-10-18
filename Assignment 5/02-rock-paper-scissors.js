// Rock, paper, scissors is a classic 2 player game. Each player chooses rock, paper or scissors. The possible outcomes include:

// Rock destroys scissors.
// Scissors cut paper.
// Paper covers rock.
// Our code will break the game into 3 phases:

// User makes a choice. How will we collect the user’s choice?
// Computer makes a choice. How will we collect the computer’s choice?
// A conditional that determines who wins.
// You will be responsible for figuring out some of the logic. These next steps will attempt to guide you down the right path:

// Step 1
// Begin by prompting the user for their choice.
// let playerSelect = prompt("Lets play Rock, Paper, Scissors");
// console.log ("you choose " +playerSelect.toLowerCase());

// Step 2
// Create the computer’s choice. This will be generated similarly to the coin flip that you did in the last assignment. Remember though, rather than 2 options, there will
// be 3 here.
// let computerPlay = () => {
//     let compChoices = ["rock", "paper", "scissors"]; //array storing computer possible actions
//     let i = Math.floor(Math.random() * 3);
//     let choice = prompt ("Select Rock, Paper or Scissors"[i]

//     if (compChoice === 'rock') {
//         alert('The choice was rock and you chose rock...you win!')
//     }
// }   else {
//         alert('The choice was rock and you chose paper...you lose!'); 
// }   else {
//         alert('The choice was rock and you chose scissors...you lose!'); 
//     }

// Step 3
// Depending on what the numeric value of the computer’s choice is, reset it to a string value of rock, paper, or scissors instead.
// let Rock=0;
// let Paper=1;
// let Scissors=2;

// Step 4
// Create a conditional statement that checks the user’s choice in relation to the computer’s choice. Once a winner is defined, display a message within an alert box 
// indicating who the winner is.
// let choice = prompt("Rock, Paper or Scissors");
// if (compChoice == 1) {
//     let compChoice = "paper";
//         alert('The choice was paper and you chose paper...you win!');
// }   else {
//     if (choice === 'paper') {
//           alert('The choice paper was rock but you chose rock...you lose!');
//     } else {
//           alert('The choice was paper and you chose scissors...you lose!');
//     }
//     let compChoice = "scissors";
//     alert('The choice was scissors and you chose scissors...you win!');
// }   else {
// if (choice === 'paper') {
//       alert('The choice was paper but you chose rock...you lose!');
// } else {
//       alert('The choice was paper and you chose scissors...you lose!');
// }   

// Step 5
// What if the result ends in a tie? Figure out how to handle that as well.
// const tie= "This round is a tie!\n -------";
// else if (playerSelect() == computerSelect[compPlay]){
//     tieScore++;
//      return tie;
//    } //if player input rock compare to rock, its a tie

// Step 6
// What if the user enters something other than rock, paper, or scissors into the prompt? Figure out how to handle that as well.
// else {
//     return "you must input rock, paper or scissors";

