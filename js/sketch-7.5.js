const bubbles = [];

function setup() {
  createCanvas(600, 400);

  for (let i = 0; i < 10; i++) {
    let x = random(width);
    let y = random(height);
    let r = random(10, 50);
    let b = new Bubble(x, y, r);
    bubbles.push(b);
  }
}

function draw() {
  background(0);

  bubbles.forEach((bubble) => {
    bubble.show();
    bubble.move();
    bubble.changeColor(bubble.contains(mouseX, mouseY) ? 255 : 0);
  });
}

function mousePressed() {
  bubbles.forEach((bubble, i) => {
    bubble.contains(mouseX, mouseY) && bubbles.splice(i, 1);
  });
}

class Bubble {
  constructor(_x, _y, _r) {
    this.x = _x;
    this.y = _y;
    this.r = _r;
    this.brightness = 0;
  }

  changeColor(bright) {
    this.brightness = bright;
  }

  contains(px, py) {
    let d = dist(px, py, this.x, this.y);
    return d < this.r;
  }

  move() {
    this.x += random(-5, 5);
    this.y += random(-5, 5);
  }

  show() {
    stroke(255);
    strokeWeight(4);
    fill(this.brightness, 125);
    ellipse(this.x, this.y, this.r * 2);
  }
}
