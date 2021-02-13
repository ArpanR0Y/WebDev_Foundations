function createGrid() {
  const container = document.querySelector(".container");
  
  for (let i = 0; i < gridSize*gridSize; i++) {
    const item = document.createElement("div");
    item.classList.add("item");
    container.appendChild(item);
  }
    
  container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
}

function changeColor(e) {
    e.target.classList.add("highlighted");
}

function clearGrid() {
    const items = document.querySelectorAll(".item")
    items.forEach(item => {
        console.log(item.classList.remove("highlighted"));
    });
}


//Main
const gridSize = prompt("Grid Size: ");
createGrid();

const items = document.querySelectorAll(".item");
items.forEach(item => {
    item.addEventListener('mouseover', changeColor);
});

const clear = document.querySelector(".clear");
clear.addEventListener('click', clearGrid);
