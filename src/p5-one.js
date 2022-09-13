// let sketchOne = function (p) {
//   p.setup = () => {
//     p.createCanvas(500, 500);
//     p.background(0);
//   };

//   p.draw = () => {
//     //strokeWeight(random(0.1,1))
//     p.translate(width / 2, height / 2);
//     p.rotate(rot * -PI);

//     //scale(random(0,1))
//     p.translate(100, 0);
//     //rotate(rot);
//     p.rotate(rot);
//     p.scale(noise(rot * 360));
//     p.line(60 / rot, 60 * rot, 0, 0);

//     rot = rot + PI / 10;

//     if (frameCount === 1600) {
//       noLoop();
//     }
//   };
// };
// new p5(sketchOne, "sketch-one");

// let sketchTwo = function (p) {
//   p.setup = () => {
//     p.createCanvas(500, 500);
//   };

//   p.draw = () => {
//     p.background(0);
//     p.ellipse(mouseX, mouseY, 50);
//   };
// };
// new p5(sketchTwo, "sketch-two");
let rot = 0;
function setup() {
  let canvas = createCanvas(500, 500);
  canvas.parent("sketch-one");
  // stroke(255, 100);
  stroke(189, 29, 2);
  strokeWeight(0.5);
  background(0);
}

function draw() {
  translate(width / 2, height / 2);
  rotate(rot * PI);
  translate(100, 0);
  // rotate(rot);
  rotate(rot);
  scale(noise(rot * 360));
  line(60 / rot, 60 * rot, 0, 0);

  rot = rot + -PI / 100;

  if (frameCount === 3000) {
    noLoop();
  }
}
