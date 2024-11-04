let playerScore = 0;
let computerScore = 0;

function getRandomComputerResult() {
    const options = ["Rock", "Paper", "Scissors"];
    const random = Math.floor(Math.random() * options.length);
    return options[random];
}

function hasPlayerWonTheRound(player, computer) {

    if (player == "Rock" && computer == "Scissors") {
        return true;
    } else if (player == "Scissors" && computer == "Paper") {
        return true;
    } else if (player == "Paper" && computer == "Rock") {
        return true;
    } else {
        return false;
    }
}
  
function getRoundResults(userOption) {
    const computerResult = getRandomComputerResult();

    if (hasPlayerWonTheRound(userOption, computerResult)) {
        playerScore++;
        return `Player wins! ${userOption} beats ${computerResult}`; 
  } else if (computerResult === userOption) {
        return `It's tie! Both choose ${userOption}`;
  } else {
        computerScore++;
        return `Computer wins! ${computerResult} beats ${userOption}`;
  }
}

const playerScoreSpanElement = document.getElementById("player-score");
const computerScoreSpanElement = document.getElementById("computer-score");
const roundResultsMsg = document.getElementById("results-msg");

function showResults(userOption) {
    const resultMsg = getRoundResults(userOption)

    computerScoreSpanElement.innerText = computerScore;
    playerScoreSpanElement.innerText = playerScore;
    roundResultsMsg.innerText = resultMsg;
}

showResults("Rock");