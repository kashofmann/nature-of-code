// This was coded while reading:
// "The Nature of Code" by Daniel Shiffman
// http://natureofcode.com/

var mover;

function setup() {
  createCanvas(640, 360);
  mover = new Mover();
}

function draw() {
  background(50);
  mover.update();
  mover.checkEdges();
  mover.display();
}