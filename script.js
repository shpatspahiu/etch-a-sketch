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

// Default grid size declaring some useful variables:
const gridSize = 16; // n pixels per side

/* createGrid */
function createGrid(size) {
  let numOfPixels = size ** 2; // total number of squares making up the grid
  let pixelWidth = windowWidth / size - 2; // width * width of pixels so that all of them fit the container
  createPixels(numOfPixels, pixelWidth);
}

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

// removePixels will remove elements, making space for new elements to come
function removePixels() {
  container.textContent = "";
}

/* updateGridSize will update grid size based on user request */
function updateGridSize() {
  let n = parseInt(prompt("Enter a new grid size:"));
  removePixels(); 
  if (n < 1 || n > 100) {
    createGrid(gridSize);
    alert("Grid size must be between 1 and 100\nDefault grid size will be set");
  } else {
    createGrid(n);
    alert("Grid size set to " + n);
  }
}

// evt listener for updating grid size
gridButton.addEventListener("click", updateGridSize);

createGrid(gridSize);

