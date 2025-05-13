const gridWidth = 16;
const gridLength = 16;

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

for (let pixel = 0; pixel < totalPixels; pixel++){
  pixels[pixel].addEventListener("mouseover", () => changeColor(pixels[pixel]))
}

function changeColor(divPixel) {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  const rgb = `rgb(${r}, ${g}, ${b})`;

  divPixel.style.backgroundColor = rgb;
  console.log(rgb);
}

createCanvas();