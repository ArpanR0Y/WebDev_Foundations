//Main
const slider = document.querySelector(".slider");
const value = document.querySelector("#value");
const displayValue = document.createElement('div');

//Render the default grid
const defaultGridSize = slider.value;
createGrid(defaultGridSize);
draw();

//Display the default grid value
displayValue.textContent = "Value: " + slider.value;
value.appendChild(displayValue);

//Render the resized grid and updated grid value
slider.addEventListener('input', function() {
  clearGrid();
  createGrid(this.value);
  displayValue.textContent = "Value: " + this.value;
  value.replaceChild(displayValue, value.childNodes[0]);
  draw();
});


//clear the grid
const clear = document.querySelector(".clear");
clear.addEventListener('click', clearGridSketch);

/*-------------------------------------------*/

//Functions
function createGrid(gridSize) {
  const grid = document.querySelector(".grid");
  
  for (let i = 0; i < gridSize*gridSize; i++) {
    const item = document.createElement("div");
    item.classList.add("item");
    grid.appendChild(item);
  }
    
  grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
}

function draw() {
  const items = document.querySelectorAll(".item");
  items.forEach(item => {
    item.addEventListener('mouseover', function(e) {
      e.target.classList.add("ink");
    });
  });
}

function clearGridSketch() {
    const items = document.querySelectorAll(".item")
    items.forEach(function(item) {
        item.classList.remove("ink");
    });
}

function clearGrid() {
  const items = document.querySelectorAll(".item");
  items.forEach(function(item) {
    item.remove();
  });
}
