let gridWidth = 16;
let gridLength = 16;

const inpGridSize = document.querySelector("#grid-size");
const btnChangeGrid = document.querySelector("#change-grid");
btnChangeGrid.addEventListener("click", () => validateInput());

const canvas = document.querySelector("#container");

function validateInput(){
  gridSize = Math.floor(inpGridSize.value);
  if (gridSize > 0 && gridSize <= 100){
    gridWidth = gridSize;
    gridLength = gridSize;

    createCanvas();
    pixelListeners();
  } else {
    window.alert("Value must be from 1 to 100");
    inpGridSize.value = 16;
  }
}

function createCanvas(){
  // clears the container before creating the canvas
  while (canvas.firstElementChild){
    canvas.removeChild(canvas.firstElementChild)
  }

  for (let canvas_Y = 0; canvas_Y < gridWidth; canvas_Y++){
    const pixelRow = document.createElement("div");
    pixelRow.setAttribute("class", "row");
    pixelRow.style.display = "flex";
    pixelRow.style.flex = "1 1 0";
    pixelRow.style.flexDirection = "row";
    
    canvas.appendChild(pixelRow);

    for (let canvas_X = 0; canvas_X < gridWidth; canvas_X++){
      const pixelDiv = document.createElement("div");
      pixelDiv.setAttribute("class", "pixel");
      pixelDiv.style.flex = "1 1 0";
      pixelDiv.style.opacity = 0;

      pixelRow.appendChild(pixelDiv);
    }
  }
}

function pixelListeners(){
  const pixels = document.getElementsByClassName("pixel");
  const totalPixels = pixels.length;
  
  for (let px_index = 0; px_index < totalPixels; px_index++){
    pixels[px_index].addEventListener("mouseenter", (event) => changeColor(pixels[px_index]));
  }

}

function changeColor(pixel){
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  let a = parseFloat(pixel.style.opacity) + .1;
  if (a>1) a = 1;
  
  const rgba = `rgba(${r}, ${g}, ${b}, ${a})`;

  pixel.style.backgroundColor = rgba;
  pixel.style.opacity = a;
  console.log(rgba + " " + a);
}

function adjustCanvasDimensions(){
  let canvasHeight = canvas.getBoundingClientRect().height;
  let canvasWidth = canvas.getBoundingClientRect().width;

  if (canvasHeight > canvasWidth){
    canvas.setAttribute("style", `height:${canvasWidth}px`);
  }
  else {
    canvas.setAttribute("style", `width:${canvasHeight}px`);
  }
  console.log(canvasHeight + " " + canvasWidth);
}

adjustCanvasDimensions();
createCanvas();
pixelListeners();