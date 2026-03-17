/* ARTG 2262 Prototyping with Code
Alexis Bray
bray.a@northeastern.edu
Assignment #4
"Tango" */

function setup() {
  createCanvas(1024, 1024);
}

function draw() {
  background(220);
  
  //number of columns and rows needed, size of each square
  let cols = 6;
  let rows = 6;
  let cell = width / cols;

  // for loop for square grid 
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      
      let x = j * cell;
      let y = i * cell;
      
      // every other pattern
      if ((i + j) % 2 == 0) {
        // light blue squares
        stroke(0);
        strokeWeight(2);
        fill("lightblue");
        rect(x, y, cell, cell);
        
        // yellow sun, orange outline
        stroke("orange"); 
        strokeWeight(3);      
        fill("gold"); 
        circle(x + cell / 2, y + cell / 2, cell * 0.6);
      } else {
        // navy squares
        stroke(0);
        strokeWeight(2);
        fill("navy");
        rect(x, y, cell, cell);
        
        // light gray moons
        fill("lightgray");
        circle(x + cell / 2 - 5, y + cell / 2 - 3, cell * 0.6);
        
        noStroke();
        fill("navy");
        circle(x + cell / 2 + 30, y + cell / 2 - 5, cell * 0.6);
      }
    }
  }
  noLoop();
}

/**
* A function to define what to do whenever a key
* is pressed over the canvas.
*/
function keyPressed() {
  // Was it the upper/lower 'S' key?
  if (key == 'S' || key == 's') {
    // Saves with your specific assignment naming convention
    saveCanvas("assignment[4]_pattern_bray_alexis.png");
  }
}
