// A seperate class file for the 'Mover' class
function Mover(_x, _y, _vx, _vy, _ax, _ay, _mass) {

  this.location = createVector(_x, _y);
  this.velocity = createVector(_vx, _vy);
  this.acceleration = createVector(_ax, _ay);
  this.mass = _mass;


  this.update = function() {
    this.velocity.add(this.acceleration);
    this.velocity.limit(2);
    this.location.add(this.velocity);
    this.acceleration.mult(0);
  }

  this.render = function() {
    noStroke();
    fill(254, 51, 102, 150);
    ellipse(this.location.x, this.location.y, this.mass * 16, this.mass * 16);
  }

  this.checkEdges = function() {
    if (this.location.x + (this.mass * 8) <= 0) {
      this.location.x = width + (this.mass * 8);
    } else if (this.location.x - (this.mass * 8) >= width) {
      this.location.x = 0 - (this.mass * 8);
    } else if (this.location.y + (this.mass * 8) <= 0) {
      this.location.y = height + (this.mass * 8);
    } else if (this.location.y - (this.mass * 8) >= height) {
      this.location.y = 0 - (this.mass * 8);
    }
  }


  this.applyForce = function(force) {
    var f = p5.Vector.div(force, this.mass)
    this.acceleration.add(f);
  }
}
