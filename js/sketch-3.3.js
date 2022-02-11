let x = 0;
let speed = 3;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  stroke(255);
  strokeWeight(4);
  noFill();
  ellipse(x, 200, 100, 100);

  if (x > width || x < 0) {
    speed *= -1;
  }

  x += speed;
}
