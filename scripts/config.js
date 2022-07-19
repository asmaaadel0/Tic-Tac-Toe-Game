let isplayer1 = true;
let playerwon = false;

function onName1() {
    allOverLay.style.display = "block";
  isplayer1 = true;
}
function onName2() {
    allOverLay.style.display = "block";
  isplayer1 = false;
}
function offName() {
    allOverLay.style.display = "none";
  }
  function confirmName() {
    console.log(0);
    if (document.getElementById("input-name").value == "") return;
    allOverLay.style.display = "none";
    const userInput = document.getElementById("input-name").value;
    if (isplayer1) {
      console.log(playerNames[0]);
      playerNames[0].textContent = userInput;
    } else {
      playerNames[1].textContent = userInput;
    }
  }