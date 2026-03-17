/*Alexis Bray
bray.a@northeastern.edu
ARTG2262: Prototyping with Code
Lab #6
Assignment #3
Self Portrait*/
function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(210, 235, 190); 

  //Hair
  noStroke();
  fill(180, 85, 45); 
  rect(130, 140, 240, 400, 100, 100, 0, 0); 

  //Neck
  fill(248, 228, 195);
  rect(225, 340, 50, 60);
  
  //Head
  ellipse(250, 250, 185, 215); 

  //Bangs
  fill(180, 85, 45);
  beginShape();
  vertex(250, 140); 
  bezierVertex(140, 145, 150, 210, 155, 300);
  bezierVertex(180, 230, 220, 185, 250, 185); 
  endShape();
  
  beginShape();
  vertex(250, 140);
  bezierVertex(360, 145, 350, 210, 345, 300);
  bezierVertex(320, 230, 280, 185, 250, 185);
  endShape();

  //Body
  fill(130, 70, 160);
  rect(165, 400, 170, 150, 70, 70, 0, 0); 

  //Nose
  noStroke();
  fill(230, 200, 170);
  ellipse(250, 280, 16, 10); 

  //Mouth
  stroke(150, 60, 60);
  strokeWeight(2);
  fill(235, 120, 130); 
  arc(250, 320, 40, 45, 0, PI);

  //Eyebrows
  stroke(100, 60, 30);
  strokeWeight(3);
  noFill();
  arc(210, 225, 45, 12, PI + 0.3, TWO_PI - 0.3);
  arc(290, 225, 45, 12, PI + 0.3, TWO_PI - 0.3);

  //Eyelashes
  strokeWeight(2);
  line(188, 238, 178, 230); 
  line(195, 232, 190, 222); 
  line(205, 230, 205, 220); 
  
  line(295, 230, 295, 220); 
  line(305, 232, 310, 222); 
  line(312, 238, 322, 230); 

  //Eyes
  noStroke();
  fill(255);
  ellipse(210, 245, 40, 20); 
  ellipse(290, 245, 40, 20);
  
  fill(70, 150, 220); 
  circle(210, 245, 20);
  circle(290, 245, 20);
  
  fill(0); 
  circle(210, 245, 8);
  circle(290, 245, 8);

  //Earrings
  noFill();
  stroke(200); 
  strokeWeight(3);
  arc(162, 285, 20, 30, HALF_PI, PI + HALF_PI); 
  arc(338, 285, 20, 30, PI + HALF_PI, HALF_PI);
  
  textAlign(RIGHT, BOTTOM);
  textSize(12);
  
  stroke(0);
  fill(255);
  text("Alexis Bray Self Portrait", width - 20, height - 16);
}