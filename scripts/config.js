function onName1() {
  allOverLay.style.display = "block";
  isPlayer1 = true;
  selectedPlayer = 1;
}
function onName2() {
  allOverLay.style.display = "block";
  isPlayer1 = false;
  selectedPlayer = 2;
}
function offName() {
  allOverLay.style.display = "none";
  error.textContent = "";
  inputField.value = "";
}
function confirmName(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const userInput = formData.get("input-name").trim();
  if (!userInput) {
    error.textContent = "please enter your name!";
    error.style.color = "red";
    error.style.margin = "0px";
    return;
  }
  allOverLay.style.display = "none";
  if (isPlayer1) {
    console.log(playerNames[0]);
    players[0].name = userInput;
    playerNames[0].textContent = userInput;
  } else {
    players[1].name = userInput;
    playerNames[1].textContent = userInput;
  }
  inputField.value = "";
}
