let space;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  space = mouseX + 1;
  background(64, 39, 89);
  fill(191, 179, 142);
  noStroke();
  for (let x = 20; x < width; x += 20) {
    for (let y = 20; y < height; y += 20) {
      circle(x, y, random(2, 10));
    }
  }
}
