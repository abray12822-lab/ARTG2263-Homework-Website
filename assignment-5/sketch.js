/* ARTG 2262 Prototyping with Code
Alexis Bray
bray.a@northeastern.edu
Assignment #4
"Spring Time" */

let xPos = []; // Flower X
let yPos = []; // Flower Y
let flowerGrowth = []; 
let numFlowers = 10;

let starX = [];
let starY = [];
let cloudX = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  // spacing of flowers and grass
  let spacing = width / (numFlowers + 2);
  for (let i = 0; i < numFlowers; i++) {
    xPos.push(spacing * (i + 1));
    yPos.push(height * 0.85);
    flowerGrowth.push(0);
  }

  // star placement
  for (let i = 0; i < 60; i++) {
    starX.push(random(0, width));
    starY.push(random(0, height * 0.6));
  }
  
  // position of clouds
  cloudX.push(width * 0.1);
  cloudX.push(width * 0.4);
  cloudX.push(width * 0.7);
}

function draw() {
  // 10 second intervals, 0-5 day, 5-10 night
  let seconds = millis() / 1000;
  let cycle = seconds % 10; 
  let dayTime = cycle < 5;

  // sun and moon arc
  let t = (cycle % 5) * (PI / 5); 
  let angle = PI - t; 
  
  sky(dayTime, angle);
  displayTime(dayTime);
  
  // grass
  noStroke();
  fill("forestgreen"); 
  rect(0, height * 0.8, width, height * 0.2);

  // flowers growing
  for (let i = 0; i < xPos.length; i++) {
    if (dayTime) {
      if (flowerGrowth[i] < 120) {
        flowerGrowth[i] = flowerGrowth[i] + 1.5;
      }
    } else {
      if (flowerGrowth[i] > 0) {
        flowerGrowth[i] = flowerGrowth[i] - 1.5;
      }
    }
    drawTulip(xPos[i], yPos[i], flowerGrowth[i]);
  }
}

function sky(dayTime, angle) {
  let cx = width / 2;
  let cy = height * 0.85;
  let radius = width * 0.45;
  
  let sunMoonX = cx + cos(angle) * radius;
  let sunMoonY = cy + sin(angle) * -radius;

  if (dayTime) {
    background("skyblue");
    fill("yellow"); 
    circle(sunMoonX, sunMoonY, height * 0.12);
    
    fill(255, 255, 255, 180);
    for (let i = 0; i < cloudX.length; i++) {
      drawCloud(cloudX[i], height * (0.2 + i * 0.1));
      cloudX[i] = cloudX[i] + 0.8; 
      if (cloudX[i] > width + 100) {
        cloudX[i] = -100;
      }
    }
  } else {
    background("midnightblue");
    fill(255, 255, 255, random(150, 255));
    for (let i = 0; i < starX.length; i++) {
      circle(starX[i], starY[i], 2);
    }
    
    fill("lightgray"); 
    circle(sunMoonX, sunMoonY, height * 0.1);
    fill("midnightblue"); 
    circle(sunMoonX + 15, sunMoonY, height * 0.1);
  }
}

function drawCloud(x, y) {
  noStroke();
  circle(x, y, 50);
  circle(x + 30, y - 15, 65);
  circle(x + 60, y, 50);
}

function drawTulip(x, y, s) {
  push();
  translate(x, y);
  stroke("darkgreen");
  strokeWeight(4);
  line(0, 0, 0, -s); 
  
  if (s > 20) {
    noStroke();
    fill("limegreen");
    let leafSize = s * 0.3; 
    push();
    rotate(-PI / 4);
    ellipse(leafSize, 0, leafSize * 2, 10);
    pop();
    push();
    rotate(PI / 4);
    ellipse(-leafSize, 0, leafSize * 2, 10);
    pop();
  }
  
  // petals of tulip
  if (s > 5) {
    noStroke();
    fill("mediumpurple"); 
    
    ellipse(-10, -s, 20, 40);
    ellipse(10, -s, 20, 40);
    
    ellipse(0, -s + 5, 28, 35);
  }
  pop();
}

function displayTime(dayTime) {
  if (dayTime) {
    fill("black");
  } else {
    fill("white");
  }
  
  textAlign(CENTER);
  
  let h = hour();
  let m = minute();
  let s = second();
  let ampm = " AM";
  
  if (h >= 12) {
    ampm = " PM";
  }
  if (h > 12) {
    h = h - 12;
  }
  if (h == 0) {
    h = 12;
  }
  
  let minStr = m;
  if (m < 10) {
    minStr = "0" + m;
  }
  let secStr = s;
  if (s < 10) {
    secStr = "0" + s;
  }
  
  let timeStr = h + ":" + minStr + ":" + secStr + ampm;
  let dateStr = month() + "/" + day() + "/" + year();

  textSize(width * 0.03);
  text(timeStr, width / 2, height * 0.08);
  textSize(width * 0.015);
  text(dateStr, width / 2, height * 0.12);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}