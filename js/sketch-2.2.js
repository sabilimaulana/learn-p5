let cirleX = 0;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(250, 250, 100);

  fill(250, 200, 200);
  ellipse(cirleX, 200, 80, 80);

  cirleX += 10;
}
