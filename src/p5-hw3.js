// console.log("hello");

let extraCanvas;
let img1, img2;
function preload() {
  img1 = loadImage("../homework/imgs/old-love.png");
  img2 = loadImage("../homework/imgs/new-love.png");
}
function setup() {
  let canvas = createCanvas(800, 800);
  canvas.parent("hw3-sketch");
  extraCanvas = createGraphics(800, 800);
  extraCanvas.strokeWeight(150);
  extraCanvas.background(img1);
  extraCanvas.blendMode(REMOVE);
}

function draw() {
  image(img2, 0, 0, width, height);

  //mouse eraser
  if (mouseIsPressed) {
    extraCanvas.line(pmouseX, pmouseY, mouseX, mouseY);
  }
  image(extraCanvas, 0, 0);
}
