const editAncher = document.querySelectorAll("#edit");
const allOverLay = document.getElementById("all-overlay");
const playerNames = document.querySelectorAll("#player-name");
const cancel = document.getElementById("cancel");
const confirm = document.getElementById("confirm");
const form = document.querySelector("form");
const error = document.getElementById("error");
const inputField = document.querySelector("input");
const startGame = document.getElementById("start-game");
const thePlay = document.getElementById("the-play");
const activePlayerName = document.getElementById("active-player-name");
const gameFieldElements = document.querySelectorAll("#play-box li");
const gameOverElement = document.getElementById("game-over");

let isPlayer1 = true;
let playerwon = false;
let selectedPlayer = 0;
let activePlayer = 0;
let currentRound = 1;
const gameData = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];
const players = [
  {
    name: "",
    Symbol: "X",
  },
  {
    name: "",
    Symbol: "O",
  },
];
for (const fieldElement of gameFieldElements) {
  fieldElement.addEventListener("click", selectGameField);
}

editAncher[0].addEventListener("click", onName1);
editAncher[1].addEventListener("click", onName2);
cancel.addEventListener("click", offName);
form.addEventListener("submit", confirmName);
startGame.addEventListener("click", startGameFunction);
