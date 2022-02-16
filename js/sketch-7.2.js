const nums = [100, 25, 46, 72];
function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);

  nums.forEach((num, i) => {
    stroke(255);
    fill(51);
    ellipse(i * 100 + 100, 200, num, num);
  });
}
