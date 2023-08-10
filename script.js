console.log("Hello World");

// Sketch window
const windowWidth = 620;
const container = document.querySelector(".container");
container.style = `width: ${windowWidth}px; height: ${windowWidth}px`;

// CAUTION:
// if another style is applied, the styles before this get 'overwritten'
// container.style = 'background-color: blue;'

// declaring some useful variables:
let gridSize = 4; // n pixels per side
let numOfPixels = gridSize ** 2; // total number of squares making up the grid
let pixelWidth = windowWidth / gridSize; // width * width of pixels so that all of them fit the container
