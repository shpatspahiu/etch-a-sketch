console.log("Hello World");

// Sketch window
const windowWidth = 620;
const container = document.querySelector(".container");
container.style = `width: ${windowWidth}px; height: ${windowWidth}px`;

// CAUTION:
// if another style is applied, the styles before this get 'overwritten'
// container.style = 'background-color: blue;'
