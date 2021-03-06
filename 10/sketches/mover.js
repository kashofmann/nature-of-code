// This was coded while reading:
// "The Nature of Code" by Daniel Shiffman
// http://natureofcode.com/

var Mover = function() {
  
  this.position = createVector(width/2, height/2);
  this.velocity = createVector();  
  this.accelaration = createVector();
  this.topspeed = 6;

  this.update = function() {
    var mouse = createVector(mouseX,mouseY);
    this.acceleration = p5.Vector.sub(mouse,this.position);
    this.acceleration.setMag(0.2);

    this.velocity.add(this.acceleration);
    this.velocity.limit(this.topspeed);
    this.position.add(this.velocity);
  };

  this.display = function() {
    stroke(0);
    strokeWeight(2);
    fill(127,127,127);
    ellipse(this.position.x, this.position.y, 48, 48);
  };

  this.checkEdges = function() {

    if (this.position.x > width) {
      this.position.x = 0;
    } 
    else if (this.position.x < 0) {
      this.position.x = width;
    }

    if (this.position.y > height) {
      this.position.y = 0;
    } 
    else if (this.position.y < 0) {
      this.position.y = height;
    }
  };
};