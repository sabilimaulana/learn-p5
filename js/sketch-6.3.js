let bubble1, bubble2;

function setup() {
  createCanvas(600, 400);
  bubble1 = new Bubble(200, 100, 40);
  bubble2 = new Bubble(300, 200, 20);
}

function draw() {
  background(0);

  bubble1.show();
  bubble1.move();

  bubble2.show();
  bubble2.move();
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
