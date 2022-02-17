const bubbles = [];

function setup() {
  createCanvas(600, 400);

  for (let i = 0; i < 20; i++) {
    const bubble = new Bubble(random(width), random(height), random(20, 30));
    bubbles.push(bubble);
  }
}

function draw() {
  background(0);

  bubbles.forEach((bubble) => {
    bubble.move();
    bubble.show();

    let overlap = false;
    bubbles.forEach((other) => {
      if (bubble !== other && bubble.intersects(other)) {
        overlap = true;
      }
    });

    bubble.changeColor(overlap ? 255 : 0);
  });
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

  changeColor(bright) {
    this.brightness = bright;
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
