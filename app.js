const editAncher = document.querySelectorAll("#edit");
const cancel = document.getElementById("cancel");
const confirm = document.getElementById("confirm");
const playerNames = document.querySelectorAll("#player-name");
let isplayer1 = true;
let playerwon = false;

function onName1() {
  document.getElementById("all-overlay").style.display = "block";
  isplayer1 = true;
}
function onName2() {
  document.getElementById("all-overlay").style.display = "block";
  isplayer1 = false;
}

function offName() {
  document.getElementById("all-overlay").style.display = "none";
}
function confirmName() {
  if (document.getElementById("input-name").value == "") return;
  document.getElementById("all-overlay").style.display = "none";
  const userInput = document.getElementById("input-name").value;
  if (isplayer1) {
    console.log(playerNames[0]);
    playerNames[0].textContent = userInput;
  } else {
    playerNames[1].textContent = userInput;
  }
}
editAncher[0].addEventListener("click", onName1);
editAncher[1].addEventListener("click", onName2);
cancel.addEventListener("click", offName);
confirm.addEventListener("click", confirmName);

// while(!playerwon){

// }
