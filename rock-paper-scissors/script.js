function getRandomComputerResult() {
  const options = ["Rock", "Paper", "Scissors"];
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}

let playerScore = 0;
let computerScore = 0;

function hasPlayerWonTheRound(player, computer) {
  return (
    (player === "Rock" && computer === "Scissors") ||
    (player === "Scissors" && computer === "Paper") ||
    (player === "Paper" && computer === "Rock")
  );
}

function getRoundResults(userOption) {
  const computerResult = getRandomComputerResult();

  if (userOption === computerResult) {
    return `It's a tie! Both chose ${userOption}`;
  }

  if (hasPlayerWonTheRound(userOption, computerResult)) {
    playerScore++;
    return `Player wins! ${userOption} beats ${computerResult}`;
  } else {
    computerScore++;
    return `Computer wins! ${computerResult} beats ${userOption}`;
  }
}


const playerScoreSpanElement = document.getElementById("player-score");
const computerScoreSpanElement = document.getElementById("computer-score");
const roundResultsMsg = document.getElementById("results-msg");
const winnerMsgElement = document.getElementById("winner-msg");
const optionsContainer = document.querySelector(".options-container");
const resetGameBtn = document.getElementById("reset-game-btn");

function showResults(userOption) {
  roundResultsMsg.innerText = getRoundResults(userOption);
  computerScoreSpanElement.innerText = computerScore;
  playerScoreSpanElement.innerText = playerScore;

  if (playerScore === 3) {
    winnerMsgElement.innerText = "Player has won the game!";
    resetGameBtn.style.display = "block";
    optionsContainer.style.display = "none";
  } else if (computerScore === 3) {
    winnerMsgElement.innerText = "Computer has won the game!";
    resetGameBtn.style.display = "block";
    optionsContainer.style.display = "none";
  }
};

function resetGame() {
  playerScore = 0;
  computerScore = 0;

  // Actualizar la interfaz con los nuevos puntajes
  playerScoreSpanElement.innerText = playerScore;
  computerScoreSpanElement.innerText = computerScore;

  // Ocultar el botón de reinicio
  resetGameBtn.style.display = "none";

  // Mostrar las opciones del juego
  optionsContainer.style.display = "block";

  // Limpiar mensajes del resultado de la ronda y del ganador
  winnerMsgElement.innerText = "";
  roundResultsMsg.innerText = "";
};

document.getElementById("rock-btn").addEventListener("click", () => showResults("Rock"));
document.getElementById("paper-btn").addEventListener("click", () => showResults("Paper"));
document.getElementById("scissors-btn").addEventListener("click", () => showResults("Scissors"));
document.getElementById("reset-game-btn").addEventListener("click", resetGame);