// function to get computer choice, outputs rock, paper or scissors randomly
function getComputerChoice() {
  //  get random int 0, 1 or 2
  let randInt = getRandomThree();
  // assign random int to rps string
  return convertToChoice(randInt);
}

// get one of three random numbers
function getRandomThree() {
  let computerChoiceInt = Math.floor(Math.random() * 3);
  return computerChoiceInt; 
}

// convert random int to one of rps choices
function convertToChoice(randChoice) {
  if (randChoice == 0) {
    return "rock";
  } else if (randChoice == 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

// get human choice and return it lowercase
function getHumanChoice() {
  let humanChoice = prompt("Enter your choice (rock, paper or scissors): ");
  return humanChoice.toLowerCase();
}

// declare scores variables
let humanScore = 0;
let computerScore = 0;

// check  winning conditions and log appriopriate message
function playRound(humanChoice, computerChoice) {
  if (humanChoice == computerChoice) {
    console.log("It's a tie!");
  } else if (humanChoice == "rock") {
    if (computerChoice == "paper") {
      console.log("You lose! Paper beats Rock");
      computerScore++;
    } else {
      console.log("You win! Rock beats scissors");
      humanScore++;
    }
  } else if (humanChoice == "paper") {
    if (computerChoice == "rock") {
      console.log("You win! Paper beats rock");
      humanScore++;
    } else {
      console.log("You lose! Scissors beat paper");
      computerScore++;
    }
  } else if (humanChoice == "scissors") {
    if (computerChoice == "rock") {
      console.log("You lose! Rock beats Scissors");
      computerScore++;
    } else {
      console.log("You win! Scissors beat paper");
      humanScore++;
    }
  }
}