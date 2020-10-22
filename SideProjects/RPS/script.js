/*
const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors" ||
    userInput === "bomb"
  ) {
    return userInput;
  } else {
    console.log("Error, please choose a valid RPS");
  }
} */
///////////////////////////////////////// USERCHOICE
var playerscore = 0;
var computerscore = 0;
var compoption = 0;
var ploption = 0;
var match;
let outcomeDisplay;
outcomeDisplay = document.getElementById("outcomeDisplay");
let console;
console = document.getElementById("cons");

function scoreUpdate() {
  var compscore = document.querySelector(".computer-score");
  var plscore = document.querySelector(".player-score");
  compscore.innerHTML = computerscore;
  plscore.innerHTML = playerscore;
}

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  // rounds   down  0 to 2 whole value
  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
};
////////////////////////////

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "The game is a tie";
  }
  //check if tie
  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "Sorry, Computer Wins";

      roundend(0);
    } else {
      return "Congratulations, UserWins";

      roundend(1);
    }
  }

  if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "Sorry, Computer Wins";
      roundend(0);
    } else {
      return "Congratulations, UserWins";
      roundend(1);
    }
  }

  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "Sorry, Computer Wins";
      roundend(0);
    } else {
      return "Congratulations, UserWins";
      roundend(1);
    }
  }
  if (userChoice === "bomb") {
    return "SECRET CODE! YOU KILLED THE COMPUTER!";
    roundend(1);
  }
};
//braket closes entire function

//console.log(determineWinner('rock', 'scissors'));
//TEST output User Wins

const playGame = (userChoice) => {
  //const userChoice
  const computerChoice = getComputerChoice();
  //console.log("You threw: " + userChoice);
  //console.log("Computer threw: " + computerChoice);
  outcomeDisplay.innerText = determineWinner(userChoice, computerChoice);
};

/*
function scoreUpdate() {
  var compscore = document.querySelector(".computer-score");
  var plscore = document.querySelector(".player-score");
  compscore.innerHTML = computerscore;
  plscore.innerHTML = playerscore;
}*/
