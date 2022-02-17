let bubble1, bubble2;

function setup() {
  createCanvas(600, 400);

  bubble1 = new Bubble(200, 200);
  bubble2 = new Bubble(360, 200, 100);
}

function draw() {
  background(0);

  if (bubble1.intersects(bubble2)) {
    background(200, 0, 100);
  }

  bubble1.move();
  bubble1.show();
  bubble2.move();
  bubble2.show();
}

class Bubble {
  constructor(_x, _y, _r = 50) {
    this.x = _x;
    this.y = _y;
    this.r = _r;
    this.brightness = 0;
  }

  intersects(other) {
    let d = dist(this.x, this.y, other.x, other.y);
    return d < this.r + other.r;
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
