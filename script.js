
// get one of three random numbers
function getRandomThree() {
  let computerChoiceInt = Math.floor(Math.random() * 3);
  return computerChoiceInt; 
}

const computerRps = document.querySelector(".computerRps");
// convert random int to one of rps choices
function convertToChoice(randChoice) {
  if (randChoice == 0) {
    computerRps.setAttribute("src", "./images/rock.png");
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

    
  // Declare winner of whole game
  function winner(compScore, humScore) {
    gameSummary.textContent = "Thanks for playing! And the winner is...";
    const whoWon = document.createElement("p");
    gameSummary.appendChild(whoWon);
    
    if (compScore > humScore) {
      whoWon.textContent = "Computer! Too bad...";
    } else {
      whoWon.textContent = "You! Congratulations!";
    }
  }
  
  // declare scores variables
  let humanScore = 0;
  let computerScore = 0;

  // check  winning conditions and log appropriate message
  function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
      roundResult.textContent = "It's a tie!";
    } else if (humanChoice == "rock") {
      if (computerChoice == "paper") {
        roundResult.textContent = "You lose! Paper beats Rock";
        computerScore++;
      } else {
        roundResult.textContent = "You win! Rock beats scissors";
        humanScore++;
      }
    } else if (humanChoice == "paper") {
      if (computerChoice == "rock") {
        roundResult.textContent = "You win! Paper beats rock";
        humanScore++;
      } else {
        roundResult.textContent = "You lose! Scissors beat paper";
        computerScore++;
      }
    } else if (humanChoice == "scissors") {
      if (computerChoice == "rock") {
        roundResult.textContent = "You lose! Rock beats Scissors";
        computerScore++;
      } else {
        roundResult.textContent = "You win! Scissors beat paper";
        humanScore++;
      }
    }

    humanScoreSpan.textContent = `${humanScore}`;
    computerScoreSpan.textContent = `${computerScore}`;
    // 
    if (humanScore === 5 || computerScore === 5) {
      winner(computerScore, humanScore);
      btnRock.setAttribute("hidden", "true");
      btnPaper.setAttribute("hidden", "true");
      btnScissors.setAttribute("hidden", "true");
    }
  }

  // reference buttons
  const btnRock = document.querySelector(".rock");
  const btnPaper = document.querySelector(".paper");
  const btnScissors = document.querySelector(".scissors");

  // reference elements that display dynamic content
  const roundResult = document.querySelector(".result");
  const humanRps = document.querySelector(".humanRps");
  const humanScoreSpan = document.querySelector(".humanScore > span");
  const computerScoreSpan = document.querySelector(".computerScore > span");
  const gameSummary = document.querySelector(".gameSummary");

  // add event listeners to buttons
  btnRock.addEventListener("click", (e) => {
    playRound("rock", getComputerChoice());
    humanRps.setAttribute("src", "./images/rock.png");
  }); 
  btnPaper.addEventListener("click", (e) => {
    playRound("paper", getComputerChoice());
  });
  btnScissors.addEventListener("click", (e) => {
    playRound("scissors", getComputerChoice());
  });

}

playGame();

