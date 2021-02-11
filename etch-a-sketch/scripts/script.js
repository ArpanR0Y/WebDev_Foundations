const gridSize = prompt("Grid Size: ");

function createItem() {
  const container = document.querySelector(".container");
  
  for (let i = 0; i < gridSize*gridSize; i++) {
    const item = document.createElement("div");
    item.classList.add("item");
    container.appendChild(item);
  }

  let gridItemSize = "";
  for (let i = 0; i < gridSize; i++) {
    gridItemSize = gridItemSize.concat("50px ");
  }
  
  container.style.gridTemplateColumns = gridItemSize;
}


createItem();