const size = 4;
const field = document.querySelector(".field");

if (field) {
  for (let i = 0; i < size ** 2; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    field.appendChild(cell);
  }
}
const cells = Array.from(document.querySelectorAll(".cell"));

function SetgoblinImg(position, new_position) {
  if (position !== -1) {
    cells[position].classList.remove("has_goblin");
  }
  const goblinImgCell = cells[new_position];
  goblinImgCell.classList.add("has_goblin");
}

setInterval(() => {
  const position = cells.findIndex((item) =>
    item.className.includes("has_goblin"),
  );
  let new_position = Math.floor(Math.random() * cells.length);
  if (position === new_position) {
    new_position = Math.floor(Math.random() * cells.length);
  } else {
    SetgoblinImg(position, new_position);
  }
}, 1000);
