const editAncher = document.querySelectorAll("#edit");
const allOverLay = document.getElementById("all-overlay");
const playerNames = document.querySelectorAll("#player-name");
const cancel = document.getElementById("cancel");
const confirm = document.getElementById("confirm");

editAncher[0].addEventListener("click", onName1);
editAncher[1].addEventListener("click", onName2);
cancel.addEventListener("click", offName);
confirm.addEventListener("click", confirmName);

