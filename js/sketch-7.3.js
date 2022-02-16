const bubbles = [];

function setup() {
  createCanvas(600, 400);
}

function mouseDragged() {
  let r = random(10, 50);
  let b = new Bubble(mouseX, mouseY, r);
  bubbles.push(b);
}

function draw() {
  background(0);

  bubbles.forEach((bubble, i) => {
    bubble.show();
    bubble.move();
  });
}

class Bubble {
  constructor(_x, _y, _r) {
    this.x = _x;
    this.y = _y;
    this.r = _r;
  }

  move() {
    this.x += random(-5, 5);
    this.y += random(-5, 5);
  }

  show() {
    stroke(255);
    strokeWeight(4);
    noFill();
    ellipse(this.x, this.y, this.r * 2);
  }
}
