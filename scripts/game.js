function startGameFunction() {
  if (!players[0].name || !players[1].name) {
    alert("please enter valid names for both players!!");
    return;
  }
  thePlay.style.display = "block";
  activePlayerName.textContent = players[activePlayer].name;
}

function switchPlayer() {
  activePlayerName.textContent = players[activePlayer].name;
  if (activePlayer == 0) {
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }
}
function selectGameField(event) {
  const selectedField = event.target;

  const selectedColumn = selectedField.dataset.col - 1;
  const selectedRow = selectedField.dataset.row - 1;
  if (gameData[selectedRow][selectedColumn] > 0) {
    alert("please select an empty field!");
    return;
  }
  selectedField.textContent = players[activePlayer].Symbol;
  selectedField.classList.add("disabled");
  gameData[selectedRow][selectedColumn] = activePlayer + 1;
  console.log(gameData);
  const winnerId = checkForGameOver();
  if (winnerId != 0) {
    
  }
  switchPlayer();
}
function checkForGameOver() {
  for (let i = 0; i < 3; i++) {
    if (
      gameData[i][0] > 0 &&
      gameData[i][0] === gameData[i][1] &&
      gameData[i][1] === gameData[i][2]
    ) {
      return gameData[i][0];
    }
  }
  for (let i = 0; i < 3; i++) {
    if (
      gameData[0][i] > 0 &&
      gameData[0][i] === gameData[1][i] &&
      gameData[0][i] === gameData[2][i]
    ) {
      return gameData[0][i];
    }
  }
  if (
    gameData[0][0] > 0 &&
    (gameData[0][0] === gameData[1][1]) === gameData[2][2]
  )
    return gameData[0][0];
  if (
    gameData[0][2] > 0 &&
    (gameData[0][2] === gameData[1][1]) === gameData[2][0]
  )
    return gameData[0][2];
  return 0;
}
