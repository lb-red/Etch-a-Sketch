let gridWidth = 16;
let gridLength = 16;

const canvas = document.querySelector("#container");
let pixels;

function createCanvas(){
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

      pixelDiv.addEventListener("mouseover", () => changeColor(pixelDiv))

      pixelRow.appendChild(pixelDiv);
    }
  }
}

pixels = document.getElementsByClassName("pixel");
const totalPixels = pixels.length;

for (let px_index = 0; px_index < totalPixels; px_index++){
  pixels[px_index].addEventListener("mouseover", () => changeColor(pixels[px_index]))
}

function changeColor(pixel) {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const rgb = `rgb(${r}, ${g}, ${b})`;

  pixel.style.backgroundColor = rgb;
  console.log(rgb);
}

createCanvas();