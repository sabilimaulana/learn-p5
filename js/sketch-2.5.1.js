const circle = { r: 250, g: 200, b: 200, a: 50 };
const col = { r: 250, g: 250, b: 100 };

function setup() {
  createCanvas(600, 400);
  background(col.r, col.g, col.b);
}

function draw() {
  noStroke();
  fill(circle.r, circle.g, circle.b, circle.a);

  circle.r = random(0, 255);
  circle.g = random(0, 255);
  circle.b = random(0, 255);
  ellipse(mouseX, mouseY, 25, 25);
}

function mousePressed() {
  col.r = random(0, 255);
  col.g = random(0, 255);
  col.b = random(0, 255);

  background(col.r, col.g, col.b);
}
