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
    error.textContent = "";
  }
  function confirmName(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const userInput = formData.get('input-name').trim();
    if(!userInput){
        error.textContent = "please enter your name!"
        error.style.color = "red";
        error.style.margin = "0px";
        return;
    }
    allOverLay.style.display = "none";
    if (isplayer1) {
      console.log(playerNames[0]);
      playerNames[0].textContent = userInput;
    } else {
      playerNames[1].textContent = userInput;
    }
  }