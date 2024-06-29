
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

function playGame() { 
  // function to get computer choice, outputs rock, paper or scissors randomly
  function getComputerChoice() {
    //  get random int 0, 1 or 2
    let randInt = getRandomThree();
    // assign random int to rps string
    return convertToChoice(randInt);
  }

  // get human choice and return it lowercase
  function getHumanChoice() {
    let humanChoice = prompt("Enter your choice (rock, paper or scissors): ");
    return humanChoice.toLowerCase();
  }
  
  // Declare winner of whole game
  function winner(compScore, humScore) {
    console.log("Thanks for playing! And the winner is...");

    if (compScore == humScore) {
      console.log("No one! It's a tie");
    } else if (compScore > humScore) {
      console.log("Computer! Too bad.");
    } else {
      console.log("You! Congratulations!");
    }
  }
  
  // declare scores variables
  let humanScore = 0;
  let computerScore = 0;

  // check  winning conditions and log appropriate message
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

    // summary after round
    console.log(`Your score: ${humanScore}`);
    console.log(`Computer score: ${computerScore}`);
  }

  // get choices and play round 5 times
  // let humanSelection = getHumanChoice();
  // let computerSelection = getComputerChoice();
  // need to call functions to get choices, variables doesn't change during rounds
  for (i = 0; i < 5; i++) {
    playRound(getHumanChoice(), getComputerChoice());
  }

  // declare winner
  winner(computerScore, humanScore);
}