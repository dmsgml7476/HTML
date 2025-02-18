let go = [];
let player1 = "x";
let player2 = "y";

function drawGo() {
  const boardGo = document.querySelector(".go");
  boardGo.innerHTML = "";
  for (let i = 0; i < 15; i++) {
    let rowElement = document.createElement("div");
    rowElement.className = "row";
    for (let j = 0; j < 15; j++) {
      const cellElement = document.createElement("div");
      cellElement.textContent = go[i][j];
      rowElement.appendChild(cellElement);
    }
    board.appendChild(rowElement);
  }
}
