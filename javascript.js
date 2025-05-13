const gridWidth = 16;
const gridLength = 16;

const canvas = document.querySelector("#container");

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

      pixelRow.appendChild(pixelDiv);
    }
  }
}

createCanvas();