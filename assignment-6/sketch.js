/* ARTG 2262 Prototyping with Code
Alexis Bray
bray.a@northeastern.edu
Assignment #6
"Under the Sea" */
  
/*instructions:
click the buttons at the top to change the colors
click or drag to draw
*/

let currentColor;
let brushSize = 10;
let userheight = 110;
let currentLabel = "Coral";

function setup() {
  createCanvas(800, 600);
  // coral first
  currentColor = color("coral");
  drawOcean(); 
}

function draw() {
  // heading with colors and clear,save,erase functions
  noStroke();
  fill(240); 
  rect(0, 0, width, userheight);
  
  // buttons for each color option
  drawButton(10, 15, 80, 35, "Coral", color("coral"));
  drawButton(100, 15, 80, 35, "Bubbles", color("skyblue"));
  drawButton(190, 15, 80, 35, "Seaweed", color("green"));
  drawButton(280, 15, 80, 35, "Fish", color("orange"));
  drawButton(370, 15, 80, 35, "Rocks", color("grey"));
  drawButton(460, 15, 80, 35, "Creatures", color("purple"));
  
  // buttons for erasing, clearing, and saving
  drawActionButton(560, 15, 70, 35, "ERASER");
  drawActionButton(640, 15, 70, 35, "CLEAR");
  drawActionButton(720, 15, 70, 35, "SAVE");

  // instructions for brush sizes and save/clear canvas
  fill(0);
  textSize(13);
  textAlign(LEFT, TOP);
  text("BRUSH SIZE: " + brushSize + " (Keys 1, 2, 3, 4, 5)", 15, 70);
  text("Click and drag to draw", 15, 88); 
  text("Shortcut: [S] Save | [C] Clear Canvas", 550, 70);
  
  stroke(180);
  line(0, userheight, width, userheight);
}

function drawOcean() {
  // ocean blue background
  background("cornflowerblue"); 
  // sand for background
  noStroke();
  fill("sandybrown");
  rect(0, height - 60, width, 60);
}

function drawButton(x, y, w, h, label, col) {
  let isSelected = (currentLabel === label);
  stroke(0);
  strokeWeight(isSelected ? 3 : 1);
  fill(col);
  rect(x, y, w, h, 5);
  
  fill(brightness(col) < 50 ? 255 : 0);
  noStroke();
  textAlign(CENTER, CENTER);
  text(label, x + w/2, y + h/2);
}

function drawActionButton(x, y, w, h, label) {
  stroke(0);
  strokeWeight(1);
  fill(220);
  if (label === "ERASER" && currentLabel === "Eraser") fill(150);
  rect(x, y, w, h, 5);
  fill(0);
  noStroke();
  textAlign(CENTER, CENTER);
  text(label, x + w/2, y + h/2);
}

function mouseDragged() {
  if (mouseY > userheight) {
    if (currentLabel === "Eraser") {
      noStroke();
      // erase based on sand or water
      if (mouseY > height - 60) fill("sandybrown"); 
      else fill("cornflowerblue");
      circle(mouseX, mouseY, brushSize * 2);
    } 
    else if (currentLabel === "Bubbles") {
      // bubble effect to make it look floating and shiny
      noStroke();
      let shim = random(20, 50);
      for (let i = 3; i > 0; i--) {
        fill(255, 255, 255, shim / i);
        circle(mouseX, mouseY, brushSize * (i * 0.8));
      }
      stroke(255, 200);
      strokeWeight(1);
      noFill();
      circle(mouseX, mouseY, brushSize);
    }
    else if (currentLabel === "Creatures") {
      // changing of purple color for the creatures option
      let change = random(-30, 30);
      stroke(150 + change, 50 + change, 200 + change);
      strokeWeight(brushSize);
      line(pmouseX, pmouseY, mouseX, mouseY);
    }
    else {
      stroke(currentColor);
      strokeWeight(brushSize);
      line(pmouseX, pmouseY, mouseX, mouseY);
    }
  }
}

function mousePressed() {
  if (mouseY < userheight) {
    if (mouseY > 15 && mouseY < 50) {
      if (mouseX > 10 && mouseX < 90) { currentColor = color("coral"); currentLabel = "Coral"; }
      else if (mouseX > 100 && mouseX < 180) { currentColor = color("skyblue"); currentLabel = "Bubbles"; }
      else if (mouseX > 190 && mouseX < 270) { currentColor = color("green"); currentLabel = "Seaweed"; }
      else if (mouseX > 280 && mouseX < 360) { currentColor = color("orange"); currentLabel = "Fish"; }
      else if (mouseX > 370 && mouseX < 450) { currentColor = color("grey"); currentLabel = "Rocks"; }
      else if (mouseX > 460 && mouseX < 540) { currentColor = color("purple"); currentLabel = "Creatures"; }
      
      else if (mouseX > 560 && mouseX < 630) { currentLabel = "Eraser"; }
      else if (mouseX > 640 && mouseX < 710) { drawOceanEnvironment(); }
      else if (mouseX > 720 && mouseX < 790) { saveCanvas("ocean_art", "png"); }
    }
  } else {
    mouseDragged(); 
  }
}

function keyPressed() {
  if (key === '1') brushSize = 10;
  if (key === '2') brushSize = 20;
  if (key === '3') brushSize = 30;
  if (key === '4') brushSize = 40;
  if (key === '5') brushSize = 50;
  
  if (key === 's' || key === 'S') saveCanvas("ocean_art", "png");
  if (key === 'c' || key === 'C') drawOcean();
}