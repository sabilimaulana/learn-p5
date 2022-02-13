function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  strokeWeight(4);
  stroke(255);

  let x = 0;
  while (x <= width) {
    const g = map(x, 0, width, 0, 255);
    fill(0, g, 255);
    ellipse(x, 100, 25, 25);
    x = x + 50;
  }

  for (let x = 0; x <= width; x += 50) {
    const r = map(x, 0, width, 0, 255);
    fill(r, 0, 255);
    ellipse(x, 300, 25, 25);
  }
}
