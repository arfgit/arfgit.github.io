/* Resources:
 * https://www.youtube.com/watch?v=ktPnruyC6cc  --> info on sin waves
 */

//sketch one
let sketchOne = function (p) {
  let rot = 0;
  p.setup = () => {
    p.createCanvas(500, 500);
    p.stroke(189, 29, 2);
    p.background(0);
    p.strokeWeight(0.5);
  };

  p.draw = () => {
    p.translate(p.width / 2, p.height / 2);
    p.rotate(rot * p.PI);
    p.translate(100, 0);
    p.rotate(rot);
    p.scale(p.noise(rot * p.TWO_PI));
    p.line(60 / rot, 60 * rot, 0, 0);

    rot = rot + -p.PI / 100;

    if (p.frameCount === 3000) {
      noLoop();
    }
  };
};
new p5(sketchOne, "sketch-one");

//sketch two
let sketchTwo = function (p) {
  p.setup = () => {
    p.createCanvas(500, 500);
    p.angleMode(p.DEGREES);
    p.rectMode(p.CENTER);
  };

  p.draw = () => {
    p.background(18);
    p.translate(p.width / 2, p.height / 2); //center
    p.noFill();
    for (let i = 0; i < 100; i++) {
      p.push();
      p.rotate(p.sin(p.frameCount + i) * 100);
      p.rotate(p.noise(i * 3));
      let r = p.map(p.sin(p.frameCount), -1, 1, 50, 250);
      let g = p.map(p.sin(p.frameCount / 2), -1, 1, 50, 250);
      let b = p.map(p.sin(p.frameCount / 4), -1, 1, 50, 250);
      p.stroke(r, g, b);
      p.rect(0, 0, 300 - i, 50 - i * p.QUARTER_PI, 100 - i);
      p.pop();
    }
  };
};
new p5(sketchTwo, "sketch-two");

//sketch three
let sketchThree = function (p) {
  p.setup = () => {
    p.createCanvas(750, 500);
    p.strokeWeight(0.1);
  };

  p.draw = () => {
    p.background(5);
    p.translate(p.width / 2, p.height / 2);
    p.noFill();
    p.stroke(150, 150, 150);
    for (let i = 0; i < 400; i++) {
      p.push();
      p.rotate(p.sin(p.frameCount + i * 0.5) * 100);
      p.ellipse(0, 0, 400 - i, 400 - i / p.TWO_PI);
      p.pop();
    }
  };
};
new p5(sketchThree, "sketch-three");
