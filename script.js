// Sketch window width
const windowWidth = 480;

// Sketch window
const container = document.querySelector(".container");
container.style = `width: ${windowWidth}px; height: ${windowWidth}px`;

// grid size button
const gridButton = document.querySelector(".grid-size-button");

// CAUTION:
// if another style is applied, the styles before this get 'overwritten'
// container.style = 'background-color: blue;'

// declaring some useful variables:
let gridSize = 4; // n pixels per side

/* createGrid */
function createGrid(size) {
  let numOfPixels = size ** 2; // total number of squares making up the grid
  let pixelWidth = windowWidth / size - 2; // width * width of pixels so that all of them fit the container
  createPixels(numOfPixels, pixelWidth);
}

createGrid(gridSize);

/* createPixels creates n pixels and puts them on display */
function createPixels(n, width) {
  // array holding the pixels
  const pixelArray = [];

  // fill array with necessary num of pixels
  for (let i = 0; i < n; i++) {
    pixelArray.push(document.createElement("div"));
  }

  pixelArray.forEach((pixel) => {
    pixel.style = `width: ${width}px; height: ${width}px;`;
    container.appendChild(pixel);
  });
}

/* updateGridSize */
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

createGrid(0);

// TODO: a function to remove every child from the sketch window
// TODO: a function to create a new grid
