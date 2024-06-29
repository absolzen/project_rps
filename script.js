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

