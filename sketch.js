let space;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  //space = mouseX + 1;
  space = map(mouseX, 0, width, 10, 50);

  //background(64, 39, 89);
  background(map(mouseY, 0, height, 20, 120), 39, 89); // Fondo que varía al movimiento de Y

  //fill(191, 179, 142);
  //noStroke();
  //for (let x = 20; x < width; x += 20) {
  //for (let y = 20; y < height; y += 20) {
  //circle(x, y, random(2, 10));
  //}
  //}
  //}

  for (let x = space / 2; x < width; x += space) {
    for (let y = space / 2; y < height; y += space) {
      // Para definir el color de los círculos

      let col = map(y, 0, height, 100, 255);
      fill(col, random(100, 150), map(mouseX, 0, width, 150, 255), 150);

      let size = map(mouseX, 0, width, 5, 20) + sin(frameCount * 0.1) * 5; // Se cambia el tamaño de los círculos

      // Crear círculos en movimiento al presionar el mouse
      let offsetX = mouseIsPressed ? sin(frameCount * 0.05 + y) * 10 : 0;
      let offsetY = mouseIsPressed ? cos(frameCount * 0.05 + x) * 10 : 0;

      noStroke();
      circle(x + offsetX, y + offsetY, size);
    }
  }
}
