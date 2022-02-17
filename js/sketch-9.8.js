const bubbles = [];

function setup() {
  createCanvas(600, 400);

  let protection = 0;

  while (bubbles.length < 200) {
    const newBubble = new Bubble(random(width), random(height), random(12, 36));

    let overlapping = false;
    bubbles.forEach((bubble) => {
      if (bubble.intersects(newBubble)) {
        overlapping = true;
      }
    });

    !overlapping && bubbles.push(newBubble);

    protection++;

    if (protection > 10000) {
      break;
    }
  }

  background(0);
  bubbles.forEach((bubble) => {
    bubble.show();
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

  show() {
    stroke(255);
    strokeWeight(1);
    fill(100, 0, 255);
    ellipse(this.x, this.y, this.r * 2);
  }
}
