// Sketch window
const windowWidth = 620;
const container = document.querySelector(".container");
container.style = `width: ${windowWidth}px; height: ${windowWidth}px`;

// CAUTION:
// if another style is applied, the styles before this get 'overwritten'
// container.style = 'background-color: blue;'

// declaring some useful variables:
let gridSize = 50; // n pixels per side
let numOfPixels = gridSize ** 2; // total number of squares making up the grid
let pixelWidth = windowWidth / gridSize; // width * width of pixels so that all of them fit the container
let pixels = createPixels(numOfPixels);


// createPixels creates n pixels and puts them on display
function createPixels(n) {
  // array holding the pixels
  const pixelArray = [];

  // fill array with necessary num of pixels
  for (let i = 0; i < n; i++) {
    pixelArray.push(document.createElement("div"));
  }

  pixelArray.forEach((pixel) => {
    pixel.style = `width: ${pixelWidth}px; height: ${pixelWidth}px;`;
    container.appendChild(pixel);
  });
}


// grid size button
const gridButton = document.querySelector(".grid-size-button");

function updateGridSize() {
  let n = prompt("Enter a new grid size:");
  if (n < 1 || n > 100) {
    gridSize = 16;
    alert("Grid size must be between 1 and 100");
  } else {
    gridSize = n;
    alert("Grid size set to " + n);
  }
}
gridButton.addEventListener("click", updateGridSize);
