const ball = {
  x: 300,
  y: 200,
  xspeed: 4,
  yspeed: -3,
};

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  strokeWeight(4);
  stroke(255);
  noFill();

  move();
  bounce();
  display();
}

const move = () => {
  ball.x += ball.xspeed;
  ball.y += ball.yspeed;
};

const bounce = () => {
  if (ball.x > width || ball.x < 0) {
    ball.xspeed *= -1;
  }
  if (ball.y > height || ball.y < 0) {
    ball.yspeed *= -1;
  }
};

const display = () => {
  ellipse(ball.x, ball.y, 24, 24);
};
