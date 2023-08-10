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

// createPixels creates n pixels and returns an array of them
function createPixels(n, pixelWidth) {
  const pixelElement = document.createElement("div");
  pixelElement.setAttribute("class", "pixel");
  //test
  pixelElement.style = `width: 12px; height:12px;`;

  // array holding the pixels
  const pixelArray = [];

  // fill array with necessary num of pixels
  for (let i = 0; i < n; i++) {
    pixelArray.push(pixelElement);
  }

  return pixelArray;
}

createPixels(1).forEach((pixel) => {
  container.appendChild(pixel);
});

// const testParagraph = document.createElement("p");
// testParagraph.textContent = 'Hello I"m a test paragraph';
// container.appendChild(testParagraph);
